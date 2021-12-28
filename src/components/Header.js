import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1> Portfolio Julien De Leyn </h1>
        <Typed
          className="typed-text"
          strings={[
            "About Me",
            "Projects",
            "Contact",
            
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="contact" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
