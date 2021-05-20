import React, {useEffect, useRef, useState} from 'react';

const useDeviceOrientation = () => {
  const [alpha, setAlpha] = useState("null");
  const [beta, setBeta] = useState("null");
  const [gamma, setGamma] = useState("null");
  
  useEffect(()=>{
    window.addEventListener("deviceorientation", handleOrientation, true);
    return window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  const handleOrientation = (event) => {
    const {alpha, beta, gamma} = event;
    setAlpha(alpha);
    setBeta(beta);
    setGamma(gamma);
  }

  return {
    alpha, beta, gamma
  }
}
const useFavicon = initialFaviconUrl => {
  const [favicon, setFavicon] = useState(initialFaviconUrl);
  
  const updateFavicon = () => {
    const originFavicon = document.querySelector('[rel=icon]');
    originFavicon.href = favicon;
  }

  useEffect(updateFavicon, [favicon]);

  return setFavicon;
}
const useGeolocation = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [error, setError] = useState("null");

  const getError = () => {
    setError("Unable to retrieve your location");
  }

  const getPosition = position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    setLat(lat);
    setLong(long);
  }

  navigator.geolocation.getCurrentPosition(getPosition, getError);

  return {coords:{lat, long}, error};
}
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
const useOnline = () => {
  const [status, setStatus] = useState(navigator.onLine);
  
  useEffect(() => {
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
  } ,[]);

  const updateStatus = event => {
    setStatus(navigator.onLine);
  }

  return status;
}
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
  const { alpha, beta, gamma } = useDeviceOrientation(); 
  const setFavicon = useFavicon("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Ff6pARXIkX6fcze3TotWXv_uy7KJsYf4pHzN7ZMedXIubOdi8nDtqK_I6sdvI0W1uYY&usqp=CAU");
  const {coords:{lat, long}, error} = useGeolocation();
  const {k, i, m, c, h} = useKeyPress();
  const {LS, setLS} = useLocalStorage("name", "12345");
  const {x, y} = useMousePosition();
  const isOnLine = useOnline();
  const {scrollLock, lockScroll, unlockScroll} = useLockScroll();

  return (
    <div className="App">
      <h1>Superhooks!</h1>
      <div>
        <h3>useDeviceOrientation</h3>
        <ul>
          <li>Alpha : {alpha}</li>
          <li>Beta : {beta}</li>
          <li>Gamma : {gamma}</li>
        </ul>
      </div>
      <div>
        <h3>useFavicon</h3>
        <button onClick={() => setFavicon("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCMGYWB4nzKaMicGcyHhoKg0tRodWdjCXs1IAAz96zkzuBWzb3XFtrsnCrrF_Y2enMpo&usqp=CAU")}>Change Favicon</button>
      </div>
      <div>
        <h3>useGeolocation</h3>
        <ul>
          <li>Latitude: {lat}</li>
          <li>Longitude: {long}</li>
          <li>Geolocation: {error}</li>
        </ul>
      </div>
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
      <div>
        <h3>useLocalStorage</h3>
        <ul>
          <li>Current Value: {LS.value}</li>
            <button onClick={()=>setLS({key:"name", value:"12345"})}>Set value: </button>
            <button onClick={()=>setLS({key:"name", value:null})}>Clear LS</button>
        </ul>
      </div>    
      <div>
        <h3>useMousePosition</h3>
        <ul>
          <li>Mouse X: {x}</li>
          <li>Mouse Y: {y}</li>
        </ul>
      </div>
      <div>
        <h3>useOnline</h3>
        <div>Are we online? {isOnLine ? "OnLine" : "OffLine"}</div>
      </div>
      <div>
        <h3>useLockScroll</h3>
        <div>Is locked? {scrollLock ? "True" : "False"}</div>
        <button onClick={lockScroll}>Lock scroll</button>
        <button onClick={unlockScroll}>Unlock scroll</button>
      </div>    
    </div>
  );
};

export default App;