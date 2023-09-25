import React, { useEffect, useState } from "react";
import axios from "axios";

const Ingredients = () => {
  const [data, setData] = useState([]);
  const [ingredientsInput, setIngredientsInput] = useState("");

  useEffect(()=>{
    if (ingredientsInput) {
      const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=4aabc2f4c3aa4cbbad58d41f06cf6120&ingredients=${encodeURIComponent(ingredientsInput)}`;
      axios.get(apiUrl)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [ingredientsInput]);

  const handleSearch = (e) => {
    e.preventDefault();
    setIngredientsInput(e.target.elements.ingredients.value);
  };

  const handleLike = (recipeIndex) => {
    const updatedData = [...data];
    updatedData[recipeIndex].likes += 1;
    setData(updatedData);
  };

  return (
    <>
      <div>
      <nav class="navbar bg-body-tertiary">
      <div class="container-fluid" style={{justifyContent: "center"}}>
        <form class="d-flex" role="search" onSubmit={handleSearch} style={{width: "600px"}}>
          <input class="form-control me-2" type="search" name="ingredients" placeholder="Search your Ingredients" aria-label="Search" style={{ border: "2px solid green" }}/>
          <button class="btn btn-outline-success" type="submit" style={{width: "200px"}}>Search</button>
        </form>
      </div>
    </nav>
        <br />
        
        {data.map((recipe, index) => (
          <div className="items" style={{ display: "flex", justifyContent: "center" }} key={recipe.id}>
            <div className="card mb-3" style={{ width: "800px" }}>
              <div className="row g-0">
                <div className="col-md-5">
                  <img src={recipe.image} className="img-fluid rounded-start" alt={recipe.title} />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">
                      Missed Ingredients: {recipe.missedIngredientCount}
                    </p>
                    <ul>
                      {recipe.missedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.name}</li>
                      ))}
                    </ul>
                    <p className="card-text">
                      Likes: {recipe.likes}
                      
                      <button
                        className="btn1"
                        onClick={() => handleLike(index)}
                        style={{border: "none", margin:"20px", background: "transparent"}}
                      >
                      <i class="bi bi-hand-thumbs-up" style={{color: "blue"}}></i>
                      </button>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
};

export default Ingredients;
