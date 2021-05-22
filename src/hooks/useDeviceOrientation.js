import React, {useEffect, useRef, useState} from 'react';

const useDeviceOrientation = () => {
  const [alpha, setAlpha] = useState("null");
  const [beta, setBeta] = useState("null");
  const [gamma, setGamma] = useState("null");
  
  useEffect(()=>{
    window.addEventListener("deviceorientation", handleOrientation, true);
    return window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  const handleOrientation = (event) => {
    const {alpha, beta, gamma} = event;
    setAlpha(alpha);
    setBeta(beta);
    setGamma(gamma);
  }

  return {
    alpha, beta, gamma
  }
}


const App = () => {
  const { alpha, beta, gamma } = useDeviceOrientation(); 

  return (
    <div className="App">
        <h3>useDeviceOrientation</h3>
        <ul>
          <li>Alpha : {alpha}</li>
          <li>Beta : {beta}</li>
          <li>Gamma : {gamma}</li>
        </ul>
    </div>
  );
};

export default App;