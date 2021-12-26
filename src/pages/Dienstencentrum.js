import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

import slide1 from "../pictures/dienstencentrum/Dienstencentrum_Pagina_01.png";
import slide2 from "../pictures/dienstencentrum/Dienstencentrum_Pagina_02.png";
import slide3 from "../pictures/dienstencentrum/Dienstencentrum_Pagina_03.png";
import slide4 from "../pictures/dienstencentrum/Dienstencentrum_Pagina_04.png";

const Dienstencentrum = () => {
  return (
    <div>
      <div className="projects">
        <div className="container">
          <div className="projects-content">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={false}
            >
              <>
                <img src={slide1} alt="slide 1" />
              </>
              <>
                <img src={slide2} alt="slide 2" />
              </>
              <>
                <img src={slide3} alt="slide 3" />
              </>
              <>
                <img src={slide4} alt="slide 4" />
              </>
            </Carousel>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dienstencentrum;
