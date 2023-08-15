import React from "react";
import bg from "./Images/circle.png";
import Common from "./Common";
import Talk from "./Talk";

const Home = () => {
  return (
    <>
      <Common name='Enjoy your meals with' sub='Welcome to Revolutionary Online Personalized Recipes Generator - Where Imagination Meets Ingredients, and Every Dish is a Masterpiece"' imgsrc={bg} visit='/service' btname='Get Started'/>
      <Talk/>
    </>

  );
};
export default Home;
