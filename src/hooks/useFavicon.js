import React, {useEffect, useRef, useState} from 'react';

const useFavicon = initialFaviconUrl => {
    const [favicon, setFavicon] = useState(initialFaviconUrl);
    
    const updateFavicon = () => {
      const originFavicon = document.querySelector('[rel=icon]');
      originFavicon.href = favicon;
    }
  
    useEffect(updateFavicon, [favicon]);
  
    return setFavicon;
}

const App = () => {
    const setFavicon = useFavicon("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Ff6pARXIkX6fcze3TotWXv_uy7KJsYf4pHzN7ZMedXIubOdi8nDtqK_I6sdvI0W1uYY&usqp=CAU");
  
    return (
    <div className="App">
        <h3>useFavicon</h3>
        <button onClick={() => setFavicon("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCMGYWB4nzKaMicGcyHhoKg0tRodWdjCXs1IAAz96zkzuBWzb3XFtrsnCrrF_Y2enMpo&usqp=CAU")}>Change Favicon</button>
    </div>
    );
  };
  
  export default App;