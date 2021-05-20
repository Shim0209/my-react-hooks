import React, {useEffect, useRef, useState} from 'react';
import ReactDom from 'react-dom';

const useHover = onHover => {
  const element = useRef();

  useEffect(() => {
    if(element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      element.current.addEventListener("mouseenter", onHover);
    }
  }, []);

  if(typeof onHover !== "function"){
    return;
  }
  return element;
}


const App = () => {
  const sayHi  = () => console.log("Hi");
  const title = useHover(sayHi);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}

export default App;

/*
  useRef()
  document.getElementById()를 사용한것과 똑같다.
*/

/*
  옵션널체이닝
  ?.
*/