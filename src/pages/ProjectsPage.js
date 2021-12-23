import React from "react";
import background from "../background.jpg";
import cityguidelineapp from "../pictures/city-guide-app.png";

const ProjectsPage = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">projects</h1>

        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={cityguidelineapp}
              alt="background..."
            />
            <div className="overflow"></div>
          </div>
        </div>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
         foto 2
            <div className="overflow"></div>
          </div>
        </div>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={background}
              alt="background..."
            />

            <div className="overflow"></div>
          </div>
        </div>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={background}
              alt="background..."
            />
            <div className="overflow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
