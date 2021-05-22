import React, {useEffect, useRef, useState} from 'react';

const useMousePosition = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0
    });
  
    useEffect(()=>{
      window.addEventListener("mousemove", updateMouseCoord);
    }, []);
  
    const updateMouseCoord = event => {
      const {clientX, clientY} = event;
      setState({x: clientX, y: clientY});
    }
  
    return state;
  }

  const App = () => {
    const {x, y} = useMousePosition();
  
    return ( 
        <div>
          <h3>useMousePosition</h3>
          <ul>
            <li>Mouse X: {x}</li>
            <li>Mouse Y: {y}</li>
          </ul>
        </div>
    );
  };
  
  export default App;