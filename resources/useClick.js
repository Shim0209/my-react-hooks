import React, {useEffect, useRef, useState} from 'react';
import ReactDom from 'react-dom';

const useClick = (onClick) => {
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if(element.current) {
        element.current.removeEventListener("click", onClick)
      }
    };
  }, [])
  if(typeof onClick !== "function"){
    return;
  }
  return element;
}

const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
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