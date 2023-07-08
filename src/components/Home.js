import React, {useEffect, useState} from "react";
import info from './Images/info2.jpg';
import diet from './Images/diet.jpg';
import Public from './Images/public.jpg';



const Home=()=> {
    return(
        <>
        <div className="center"><h1  style={{color: "red"}}>Hello Users</h1>
        <h2  style={{color: "purple"}}>Enjoy your receipe</h2></div>
        
        <div class="row">
        <div class="col">
        <div class="card">
            <img src={info} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">BMI Calculator</h5>
                <p class="card-text">Calculate your body mass and get your related receipe.</p>
                <a href="/bmi" class="btn btn-primary">Check It.</a>
            </div>
            
            </div>
            </div>
            <div class="col">
            <div class="card">
            <img src={diet} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Ingredients Recipe</h5>
                <p class="card-text">Get your receipe with your available ingredients.</p>
                <a href="/bmi" class="btn btn-primary">Try It.</a>
            </div>
            
            </div>
            </div>
            <div class="col">
        <div class="card">
            <img src={Public} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Public Receipe</h5>
                <p class="card-text">Get your receipe based on public rating</p>
                <a href="/bmi" class="btn btn-primary">Get It.</a>
            </div>
            
            </div>
            </div>
            </div>
        </>
    );

    
};
export default Home;