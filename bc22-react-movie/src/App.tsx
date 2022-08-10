import React from "react";
import "App.css";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
// import {createBrowserHistory} from "history";
import { Router,  } from "react-router";
import { MainTemplate } from "templates/MainTemplate";
import News from "pages/News/News";
import Contact from "pages/Contact";
import Regisgter from "pages/Register/Regisgter";
import Login from "pages/Login";
import Detail from "pages/Detail";


function App() {
  return (
    <>
      <Routes >
        {/* <Route path="" element={<Login />}> </Route> */}
        <Route path="/" element={<MainTemplate />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/register" element={<Regisgter />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path= "/test" element={<Detail />} /> */}
          
          <Route index element={<Login />} />
         
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Route>
        <Route path= "/detail/:maPhim" element={<Detail />} />
      </Routes>
    </>

    
  );
}

export default App;
