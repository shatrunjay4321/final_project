import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom";
import Home from "./components/Home"
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import Block from "./components/Block";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home_login from "./components/Home_login";
function App() {
  return (
<>
  <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="article/:id" element={<Articles/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup"  element={<Signup/>}/>
          <Route path="home"  element={<Home_login/>}/>
      </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
