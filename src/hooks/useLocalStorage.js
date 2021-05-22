import React, {useEffect, useRef, useState} from 'react';

const useLocalStorage = (name, initialValue) => {
    const [LS, setLS] = useState({
      key: name,
      value: initialValue
    })
  
    const updateLS = () => {
      localStorage.setItem(LS.key, LS.value);
    }
  
    useEffect(updateLS, [LS]);
  
    return {LS, setLS};
  }

  const App = () => {
    const {LS, setLS} = useLocalStorage("name", "12345");
  
    return (
        <div>
          <h3>useLocalStorage</h3>
          <ul>
            <li>Current Value: {LS.value}</li>
              <button onClick={()=>setLS({key:"name", value:"12345"})}>Set value: </button>
              <button onClick={()=>setLS({key:"name", value:null})}>Clear LS</button>
          </ul>
        </div>    
    );
  };
  
  export default App;