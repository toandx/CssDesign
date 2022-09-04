import React, { useState } from 'react';
import GoogleSearch from './pages/GoogleSearch/GoogleSearch.js';
import Login from './pages/Login/Login.js';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function App(){
  const [loginStatus,setLoginStatus]=useState(false);
  const [isLoginPage,setIsLoginPage]=useState(false);
  return (
  <div>
    {isLoginPage ? <Login setLoginStatus={setLoginStatus} setIsLoginPage={setIsLoginPage}/> : 
      <GoogleSearch loginStatus={loginStatus} setIsLoginPage={setIsLoginPage} setLoginStatus={setLoginStatus}/> }
    <button onClick={() => alert(isLoginPage)}> Show status </button>
    <button onClick={() => setIsLoginPage((prev) => !prev)}> Set status </button>
  </div>
  )
}
