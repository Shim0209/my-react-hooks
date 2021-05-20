import React, {useEffect, useRef, useState} from 'react';
import ReactDom from 'react-dom';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    onBefore();
    /*
    const { clientY } = event;
    if(clientY <= 0) {
      
    }
    */
  }
  useEffect(()=>{
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);

  if(typeof onBefore !== "function") {
    return;
  }
}

const App = () => {
  const begForLife = () => console.log("Pls don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
