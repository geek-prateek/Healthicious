import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import BMI from "./components/BMI";
import Footer from "./components/Footer";
import Talk from "./components/Talk";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import Random from "./components/Random";


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
          <Route exact path="/talk" element={<Talk key="talk" />} />
          <Route exact path="/ingredients" element={<Ingredients key="ingredients" />} />
          <Route exact path="/random" element={<Random key="random" />} />
          
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
