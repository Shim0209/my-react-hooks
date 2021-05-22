import React, {useEffect, useRef, useState} from 'react';

const useLockScroll = () => {
    const [scrollLock, setScrollLock] = useState(false);
  
    const lockScroll = () => {
      document.body.style.overflow = "hidden";
      setScrollLock(true);
    }
    const unlockScroll = () => {
      document.body.style.overflow = "unset";
      setScrollLock(false);
    }
  
    return {scrollLock, lockScroll, unlockScroll};
  }

  const App = () => {
    const {scrollLock, lockScroll, unlockScroll} = useLockScroll();
  
    return (
        <div>
          <h3>useLockScroll</h3>
          <div>Is locked? {scrollLock ? "True" : "False"}</div>
          <button onClick={lockScroll}>Lock scroll</button>
          <button onClick={unlockScroll}>Unlock scroll</button>
        </div>    
    );
  };
  
  export default App;