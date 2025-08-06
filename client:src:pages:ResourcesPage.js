import React from 'react';
import './ResourcesPage.css';

const ResourcesPage = () => {
  return (
    <div className="resources-container">
      <h1>Resources for Help</h1>
      
      <div className="contact-section">
        <h2>Emergency Contact Numbers:</h2>
        <ul>
          <li><strong>Call Childline:</strong> 116</li>
          <li><strong>SAPS:</strong> 10111</li>
          <li><strong>GBV Hotline:</strong> 0800 428 428</li>
          <li><strong>Call Angels Impilo:</strong> 0872 656 905</li>
          <li><strong>Ambulance/Fire Emergency:</strong> 10177</li>
          <li><strong>Emergency:</strong> 112</li>
        </ul>
      </div>
      
      <div className="online-section">
        <h2>Online Resources:</h2>
        <ul>
          <li>
            <strong>Angels Impilo:</strong> 
            <a href="https://angelsimpilo.com/" target="_blank" rel="noopener noreferrer">
              https://angelsimpilo.com/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesPage;