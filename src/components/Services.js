import React from "react";
import autocad from "../../src/pictures/autocad.png";
import rhino from "../pictures/rhino.png";
import photoshop from "../pictures/Adobe-Photoshop-Logo.jpg";
import revit from "../pictures/revit.png";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="container">
        <h1 className="myh1">my Services</h1>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="logo">
                <img className="icon" src={autocad} alt="autocad..." />
              </div>
              <a href="https://www.autodesk.com/products/autocad/overview?term=1-YEAR&tab=subscription">
                AutoCAD
              </a>
              <p>
                4 years of experience: 2D plans, sections, elevations, 3D
                models, renders and more
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="logo">
                <img className="icon" src={rhino} alt="rhino..." />
              </div>
              <a href="https://www.rhino3d.com/">Rhino</a>
              <p>3 years of experience: 3D models and renders</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="logo">
                <img className="icon" src={photoshop} alt="photoshop..." />
              </div>
              <a href="https://www.adobe.com/be_nl/products/photoshop.html">
                Photoshop
              </a>
              <p>3 years of experience: upgrade plans, sections, elevations and renders</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="logo">
                <img className="icon" src={revit} alt="revit..." />
              </div>
              <a href="https://www.autodesk.com/products/revit/overview?term=1-YEAR&tab=subscription">
                Revit
              </a>
              <p>1 year of experience: plans, sections, elevations, 3D modelling and renders</p>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
