import React, {useEffect, useRef, useState} from 'react';
import ReactDom from 'react-dom';

const useFullscreen = callback => {
  const element = useRef();
  const runCb = isFull => {
    if(callback && typeof callback === "function"){
      callback(isFull);
    }
  }
  const triggerFull = () => {
    if(element.current){
      if(element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen){
        /* firefox */
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen){
        /* opera */
        element.current.webkitRequestFullscreen();
      } else if (element.curren.msRequestFullscreen){
        /* ms */
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  }
  return {element, triggerFull, exitFull};
};

const App = () => {
  const onFullS = isFull => {
    console.log(isFull ? "We are Full" : "We are Small");
  }
  const {element, triggerFull, exitFull} = useFullscreen(onFullS);
  return (
    <div className="App" style={{height: "1000vh"}}>
      <div ref={element}>
      <img 
        ref={element}
        src="https://lh3.googleusercontent.com/proxy/ZCl6K9d5RDZKpkPkGjy7hVR1k3PegzXHkB6TRDNdtGPy0VXv_HJWHGvfU4n4s3w2mbCw8BcpjMcF0v8Edv1PIyDkMDcZF2PGONZIydig1vBT2YqVNW237A" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;