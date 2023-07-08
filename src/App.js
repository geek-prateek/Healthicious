import React, { useState } from "react";
import Home from "./components/Home";
import BMI from "./components/BMI";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  return (
    <>
      <Router>
      
      <Routes>
      <Route exact path="/" element={<Home key="home" />} />
      <Route exact path="/bmi" element={<BMI key="bmi" />} />
          
             
        </Routes>

       
      </Router>
    </>
  );
}

export default App;
