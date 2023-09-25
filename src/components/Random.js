import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card';

const Random = () => {
    const [randomRecipes, setRandomRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchRandomRecipes = () => {
        axios
          .get(
            "https://api.spoonacular.com/recipes/random?apiKey=4aabc2f4c3aa4cbbad58d41f06cf6120&number=3"
          )
          .then((res) => {
            const randomData = res.data.recipes;
            setRandomRecipes(randomData);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      };
    
      useEffect(() => {
        fetchRandomRecipes();
      }, []);

  return (
    
    <>
    {isLoading ? (
        <p style={{display: 'flex', justifyContent: "center"}}>Loading random recipes...</p>
      ) : (
        <>
        
        <section style={{backgroundColor: "orange"}}>
        <hr />
        
        <h2 style={{display: 'flex',justifyContent: "center", fontSize: "40px", fontWeight: "bold", fontFamily: "serif", color: "whitesmoke"}}>Random Recipes</h2>
        <div className="items" style={{display: 'flex', justifyContent: "row", margin: "20px"}}>
        {randomRecipes.map((recipe) => (
            
          <Card title={recipe.title} src={recipe.image} desc={recipe.readyInMinutes}/>
           
            
            
        ))}
        </div>
        </section>
        </>
        )}
    </>
    
  )
}

export default Random;