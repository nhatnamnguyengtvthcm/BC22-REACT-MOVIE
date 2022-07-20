import React from "react";
import "App.css";
import Home from "pages/Home";
import { MainTemplate } from "template/MainTemplate";
import { GlobalStyle } from "GlobalStyle";
import { Route, Routes } from "react-router-dom";
import Movie from "pages/Movie";
import Login from "pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route path="/movies/:movieId" element={<Movie />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
