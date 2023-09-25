import "../App.css";
import React, { useState, useEffect } from "react";

const BMI = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [caloriesRequired, setCaloriesRequired] = useState(0);
  const [nutrientsRequired, setNutrientsRequired] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipesByNutrients = () => {
    const apiKey = '4aabc2f4c3aa4cbbad58d41f06cf6120';
    const minCarbs = 10;
    const maxCarbs = 50;

    const apiUrl = `https://api.spoonacular.com/recipes/findByNutrients?minCarbs=${minCarbs}&maxCarbs=${maxCarbs}&apiKey=${apiKey}`;

    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Ensure that 'data' is an array before setting 'recipes' state
      if (Array.isArray(data)) {
        setRecipes(data);
      } else {
        console.error("Data is not an array:", data);
      }
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
    });
  };

  useEffect(() => {
    fetchRecipesByNutrients();
  }, [caloriesRequired]);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height");
      return;
    }

    const bmiValue = (weight / (height * height)) * 703;
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("You are a healthy weight");
    } else {
      setMessage("You are overweight");
    }

    const calculatedCalories = calculateCalories(bmiValue);
    const calculatedNutrients = calculateNutrients(calculatedCalories);

    setCaloriesRequired(calculatedCalories);
    setNutrientsRequired(calculatedNutrients);
  };

  const calculateCalories = (bmiValue) => {
    if (bmiValue < 18.5) {
      return 2000;
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return 2500;
    } else {
      return 2200;
    }
  };

  let reload = () => {
    window.location.reload();
  };

  const calculateNutrients = (calories) => {
    const carbohydrates = calories * 0.5;
    const fat = calories * 0.3;
    const protein = calories * 0.2;

    return {
      calories,
      carbohydrates,
      fat,
      protein,
    };
  };

  return (
    <div className="App">
      <div className="container my-3">
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <div>
            <label htmlFor="">Weight (ibs): </label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Height (in): </label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-success" type="submit">
              Submit
            </button>
            <button className="btn btn-success btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
        </form>
        
        <div className="center">
          <h3>Your BMI is : {bmi}</h3>
          <strong>{message}</strong>
        </div>
      </div>
      <hr />
      <div className="center">
        <h3 style={{fontFamily: "sans-serif"}}>Recommended Daily Requirements:</h3>
        <div className="flex" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
          <p>Calories: {caloriesRequired} kcal/day</p>
          <p>
            Carbohydrates: {nutrientsRequired?.carbohydrates.toFixed(2)} grams/day
          </p>
          <p>Fat: {nutrientsRequired?.fat.toFixed(2)} grams/day</p>
          <p>Protein: {nutrientsRequired?.protein.toFixed(2)} grams/day</p>

          
        </div>

      </div>
      <hr />
      <h3 className="center" style={{fontFamily: "serif", fontSize: "40px"}}>Suggested Recipes</h3>
          <div className="recipe-list" style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px"}}>
            {recipes.map((recipe) => (
              <div class="card" key={recipe.id} style={{
                width: "18rem",
                
              }}>
                
              <img src={recipe.image} class="card-img-top" alt={recipe.title}/>
              <div class="card-body">
                <h5 class="card-title">{recipe.title}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Calories: {recipe.calories.toFixed(2)} kcal</li>
                <li class="list-group-item">Carbs: {Number(recipe.carbs.replace('g', ''))} grams</li>
                <li class="list-group-item">Fat: {Number(recipe.fat.replace('g', ''))} grams</li>
                <li class="list-group-item">Protein: {Number(recipe.protein.replace('g', ''))} grams</li>
              </ul>
              <div class="card-body">
                <a href="/" class="card-link" style={{padding: "10px", backgroundColor: "green", color: "whitesmoke", textDecoration: "none"}}>Ingredients</a>
                <a href="/" class="card-link" style={{padding: "10px", backgroundColor: "green", color: "whitesmoke", textDecoration: "none"}}>Recipes</a>
              </div>
            </div>

            ))}
          </div>
         
    </div>
  );
};
export default BMI;
