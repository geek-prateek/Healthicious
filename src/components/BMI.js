import "../App.css";
import React, { useState } from "react";

const BMI=()=> {
    const [weight, setWeight] = useState(0);
    const [height, setheight] = useState(0);
    const [bmi, setBmi] = useState("");
    const [message, setMessage] = useState("");

    let calcBmi = (e) => {
        e.preventDefault();
        if(weight===0 || height===0){
        alert(':-) No need to diet');
        }
        else{
        let bmi = (weight/(height*height)*703)
        setBmi(bmi.toFixed(1))

        if(bmi < 25){
            setMessage('You are underweight')
        }else if(bmi>=25 && bmi<30){
            setMessage('You are a healthy weight')
        }else{
            setMessage('You are OverWeight')
        }
        }
    }

    let reload = ()=>{
        window.location.reload() 
    }
    return(
        <div className="App">
        <div className="container my-3">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label htmlFor="">Weight (ibs): </label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e)=>setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Height (in): </label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(e)=>setheight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
        </div>
    );

    
}
export default BMI;