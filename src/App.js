import React from "react";
import logo from "./logo.png";
import "./App.css";
import List from "./components/List"
import {  Route, Routes, useNavigate } from "react-router-dom";
import Search from "./components/Search";
import { Button } from "react-bootstrap/";

function App () {
  const navigate = useNavigate();
  const handleMoreDetails = () =>{
    navigate('/moredetails')
  }
  const handleSummary=() =>{
    navigate('/')
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="d-flex justify-content-between">
            
              <Button onClick={handleSummary}>Summary</Button>

              <Button onClick={handleMoreDetails}>Details</Button>  
          </nav>

          <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/moredetails" element={<Search />}></Route>
          </Routes>
        </header>
      </div>
    );
  }


export default App;
