
import './App.css';
import Header from './Header';
import Home from './components/Home'
import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
 

  return (
    <Router>
    <div className='App'>
  <Header/>


  <Routes>
  <Route path="/" element={<Home/>}/>       
        </Routes>
 
 
    </div>
    </Router>
  );
}

export default App;
