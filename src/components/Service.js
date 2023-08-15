import React from "react";
import bmi from "./Images/info2.jpg";
import diet from "./Images/diet.jpg";
import item from "./Images/public.jpg";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={bmi} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">BMI Calculator</h5>
                    <p class="card-text">
                      Calculate your body mass and get recipes recommendations according to it.
                    </p>
                    <a href="/bmi" class="btn btn-success">
                      Check It
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={diet} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Ingredients recipes</h5>
                    <p class="card-text">
                      Get your personalized recipes content according to your available ingredients with you.
                    </p>
                    <a href="/" class="btn btn-success">
                      Get It
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={item} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Public recipes</h5>
                    <p class="card-text">
                      Recipes Community based on the public rating system
                    </p>
                    <a href="/" class="btn btn-success">
                      Check It
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
