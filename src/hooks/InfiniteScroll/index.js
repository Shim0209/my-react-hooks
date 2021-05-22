import React from "react";
import ReactDOM from "react-dom";
import useScrollAxios from "./useScrollAxios";

import "./styles.css";

function App() {
  const {movie, loading} = useScrollAxios();
  return (
      loading ? (
        <div>loading...</div>
      ) : (
        movie.map((movie, index) => 
            <div key={index}>{movie.title}</div>
        )
      )
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
