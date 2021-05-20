import React, {useEffect, useRef, useState} from 'react';
import ReactDom from "react-dom";
import useAxios from "./resources/Axios/useAxios";


const App = () => {
  const {loading, data, error, refetch} = useAxios({
    url:"https://api.coinpaprika.com/v1/coins"
  });
  console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;