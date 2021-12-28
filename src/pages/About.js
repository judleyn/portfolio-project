import React from "react";
import Services from "../components/Services";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <div id="about" className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img
                className="profile-img"
                src="http://localhost:5000/juliendl/data/images/ik.png"
                alt="foto van mezelf"
              />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">about</h1>
            <p>
              Hello my name is Julien De Leyn. I am a 21 year old student in my
              first master in engineering and architecture. This website is made
              by myself for the advanced topic Building Information Management.
              It contains a home page, an about page with some general info,
              some of the projects I made past years and a working contact form.
            </p>
          </div>
        </div>
        <Services />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
