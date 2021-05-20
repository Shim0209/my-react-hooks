import React, {useEffect, useRef, useState} from 'react';
import ReactDom from 'react-dom';

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === "function"){
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(()=>{
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are Offline");
  }
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
}

export default App;

/*
  navigator.onLine의 반환값은 Boolean값이다.
  online -> true
  onffline -> false
*/