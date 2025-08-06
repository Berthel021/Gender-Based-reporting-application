import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HelpForm.css';

const HelpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    address: '',
    phone: '',
    incidentDetails: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        navigate('/map');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Report an Incident</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Surname:</label>
          <input 
            type="text" 
            name="surname" 
            value={formData.surname} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Address:</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Telephone Number:</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Details of Incident:</label>
          <textarea 
            name="incidentDetails" 
            value={formData.incidentDetails} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <button type="submit" className="locate-help-button">
          Locate Help
        </button>
      </form>
    </div>
  );
};

export default HelpForm;