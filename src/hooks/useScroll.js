import React, {useEffect, useRef, useState} from 'react';
import ReactDom from 'react-dom';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({y: window.scrollY, x: window.scrollX});
  }
  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return state;
};

const App = () => {
  const {y} = useScroll();
  return (
    <div className="App" style={{height: "1000vh"}}>
      <h1 style={{position:"fixed", color: y > 300 ? "red" : "blue"}}>Hello</h1>
    </div>
  );
}

export default App;