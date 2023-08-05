import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import BMI from "./components/BMI";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  return (
    <>
      <Router> 
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home key="home" />} />
          <Route exact path="/about" element={<About key="about" />} />
          <Route exact path="/service" element={<Service key="service" />} />
          <Route exact path="/contact" element={<Contact key="contact" />} />
          <Route exact path="/bmi" element={<BMI key="bmi" />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
