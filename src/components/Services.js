import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import autocad from "../../src/pictures/autocad.png";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <h1 className="py-5">my services</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <img className="icon" src={autocad} alt="autocad..." />
              </div>
              <a href="#">AutoCAD</a>
              <p>Info info info</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <a href="#">Rhino</a>
              <p> Info info info</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <a href="#">Photoshop</a>
              <p>Info info info</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <a href="#">Revit</a>
              <p>Info info info</p>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
