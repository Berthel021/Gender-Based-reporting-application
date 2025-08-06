import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Gender-Based Violence Reporting Service</h1>
      <div className="button-container">
        <button 
          className="help-button" 
          onClick={() => navigate('/help')}
        >
          I Need Help
        </button>
        <button 
          className="resources-button" 
          onClick={() => navigate('/resources')}
        >
          I Need Resources
        </button>
      </div>
    </div>
  );
};

export default HomePage;