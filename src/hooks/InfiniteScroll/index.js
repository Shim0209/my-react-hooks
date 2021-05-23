import React from "react";
import ReactDOM from "react-dom";
import useScrollAxios from "./useScrollAxios";
import "./styles.css";
import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  font-size: 30px;
  background-color: white;
`;
const Container = styled.div`
    margin-top: 40px;
`;

function App() {
  const {movie, loading, page} = useScrollAxios();
  console.log('movie',movie);
  return (
    <Container>
      <Title>Infinite Movie / Page {page - 1}</Title>
      {loading ? (
        <div>loading...</div>
      ) : (
        movie.map((movie) => 
            <div key={movie.id}>{movie.title}</div>
        )
      )}
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
