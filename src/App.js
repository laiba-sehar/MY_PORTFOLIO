
import './App.css';

import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Main from './components/main/Main';




function App() {
 

  return (
   
    <div className='App'>
    <Header/>
<Main/>

    </div>
  );
}

export default App;
