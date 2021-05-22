import React, {useEffect, useRef, useState} from 'react';

const useGeolocation = () => {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [error, setError] = useState("null");
  
    const getError = () => {
      setError("Unable to retrieve your location");
    }
  
    const getPosition = position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
  
      setLat(lat);
      setLong(long);
    }
  
    navigator.geolocation.getCurrentPosition(getPosition, getError);
  
    return {coords:{lat, long}, error};
  }

  const App = () => {
    const {coords:{lat, long}, error} = useGeolocation();
  
    return (
        <div>
          <h3>useGeolocation</h3>
          <ul>
            <li>Latitude: {lat}</li>
            <li>Longitude: {long}</li>
            <li>Geolocation: {error}</li>
          </ul>
        </div>
    );
  };
  
  export default App;