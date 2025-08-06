import React, { useState, useEffect } from 'react';
import './MapPage.css';

const MapPage = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [policeStations, setPoliceStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          // In a real app, you would fetch nearby police stations from an API
          fetchNearbyPoliceStations(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  const fetchNearbyPoliceStations = async (lat, lng) => {
    // Mock data - in a real app, use Google Maps API or similar
    const mockStations = [
      {
        id: 1,
        name: "Central Police Station",
        address: "123 Main St, City Center",
        phone: "012 345 6789",
        distance: "0.5 km",
        lat: lat + 0.005,
        lng: lng + 0.005
      },
      {
        id: 2,
        name: "Northside Police Station",
        address: "456 North Ave, North District",
        phone: "012 987 6543",
        distance: "1.2 km",
        lat: lat + 0.01,
        lng: lng - 0.01
      }
    ];
    setPoliceStations(mockStations);
  };

  const openGoogleMapsDirections = (stationLat, stationLng) => {
    if (userLocation) {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${stationLat},${stationLng}&travelmode=driving`;
      window.open(url, '_blank');
    }
  };

  const handleTalkToSomeone = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'GBV Help Request - Need to Talk',
          message: 'A user has requested to talk to someone about their situation.'
        }),
      });
      
      if (response.ok) {
        alert('A support representative will contact you shortly.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="map-page-container">
      <h2>Find Help Near You</h2>
      
      {userLocation ? (
        <div className="map-container">
          {/* In a real app, you would embed a map component here */}
          <div className="mock-map">
            <p>Map would display here with your location and nearby police stations</p>
            <p>Your location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}</p>
          </div>
          
          <div className="stations-list">
            <h3>Nearby Police Stations:</h3>
            {policeStations.map(station => (
              <div key={station.id} className="station-card">
                <h4>{station.name}</h4>
                <p>{station.address}</p>
                <p>Phone: {station.phone}</p>
                <p>Distance: {station.distance}</p>
                <button 
                  onClick={() => openGoogleMapsDirections(station.lat, station.lng)}
                  className="directions-button"
                >
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading your location...</p>
      )}
      
      <button 
        onClick={handleTalkToSomeone}
        className="talk-button"
      >
        Talk to Someone
      </button>
    </div>
  );
};

export default MapPage;