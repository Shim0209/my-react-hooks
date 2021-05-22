import React, {useEffect, useRef, useState} from 'react';

const useOnline = () => {
    const [status, setStatus] = useState(navigator.onLine);
    
    useEffect(() => {
      window.addEventListener("online", updateStatus);
      window.addEventListener("offline", updateStatus);
    } ,[]);
  
    const updateStatus = event => {
      setStatus(navigator.onLine);
    }
  
    return status;
  }

  const App = () => {
    const isOnLine = useOnline();
  
    return (
        <div>
          <h3>useOnline</h3>
          <div>Are we online? {isOnLine ? "OnLine" : "OffLine"}</div>
        </div>
    );
  };
  
  export default App;