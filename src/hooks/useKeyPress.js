import React, {useEffect, useRef, useState} from 'react';

const useKeyPress = () => {
    const [state, setState] = useState({
      k: false,
      i: false,
      m: false,
      c: false,
      h: false
    });
  
    const handleKeyPress = event => {
      if(event.type === 'keyup' && event.key === 'a'){
        setState({
          k: false
        })
      } else if (event.type === 'keyup' && event.key === 'i'){
        setState({
          i: false
        })
      } else if (event.type === 'keyup' && event.key === 'm'){
        setState({
          m: false
        })
      } else if (event.type === 'keyup' && event.key === 'c'){
        setState({
          c: false
        })
      } else if (event.type === 'keyup' && event.key === 'h'){
        setState({
          h: false
        })
      }
      if(event.type === 'keydown' && event.key === 'k'){
        setState({
          k: true
        })
      } else if (event.type === 'keydown' && event.key === 'i'){
        setState({
          i: true
        })
      } else if (event.type === 'keydown' && event.key === 'm'){
        setState({
          m: true
        })
      } else if (event.type === 'keydown' && event.key === 'c'){
        setState({
          c: true
        })
      } else if (event.type === 'keydown' && event.key === 'h'){
        setState({
          h: true
        })
      }
    }
  
    useEffect(()=>{
      document.addEventListener("keydown", handleKeyPress);
      document.addEventListener("keyup", handleKeyPress);
    }, []);
  
    return state;
  }

  const App = () => {
    const {k, i, m, c, h} = useKeyPress();
  
    return (
        <div>
          <h3>useKeyPress</h3>
          <ul>
            <li>Pressed 'K': {k && "K"}</li>
            <li>Pressed 'I': {i && "I"}</li>
            <li>Pressed 'M': {m && "M"}</li>
            <li>Pressed 'C': {c && "C"}</li>
            <li>Pressed 'H': {h && "H"}</li>
          </ul>
        </div>
    );
  };
  
  export default App;