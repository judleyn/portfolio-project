import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="d-flex">
              <a href="https://www.google.com/maps/place/Jozef+Plateaustraat+22,+9000+Gent/@51.0461292,3.7226704,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3715ab921389d:0x39c5e78f294c2682!8m2!3d51.0461258!4d3.7248591">
                Jozef Plateaustraat 22, Gent
              </a>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+32 474 02 31 91</a>
            </div>
            <div className="d-flex">
              <a href="mailto: julien.deleyn@ugent.be">
                Julien.DeLeyn@Ugent.be
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Projects</a>
                <br />
                <a className="footer-nav">Contacts</a>
                </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <SocialIcon url="https://www.instagram.com/juliendeleyn/" />
              <SocialIcon url="https://www.linkedin.com/in/julien-de-leyn-602002178/" />
              <SocialIcon url="https://www.facebook.com/julien.deleyn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
