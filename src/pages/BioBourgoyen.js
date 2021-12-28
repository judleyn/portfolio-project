import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

const BioBourgoyen = () => {
  return (
    <div>
      <div className="pdf">
        <a href="http://localhost:5000/juliendl/data/pdf/biobourgoyen.pdf">
          Jurybundel Bio Bourgoyen
        </a>
      </div>
      <div className="projects">
        <div className="projects-content">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={false}
          >
            <>
              <img
                src="http://localhost:5000/juliendl/data/images/bio1.png"
                alt="slide 1"
              />
            </>
            <>
              <img
                src="http://localhost:5000/juliendl/data/images/bio2.png"
                alt="slide 2"
              />
            </>
            <>
              <img
                src="http://localhost:5000/juliendl/data/images/bio3.png"
                alt="slide 3"
              />
            </>
            <>
              <img
                src="http://localhost:5000/juliendl/data/images/bio4.png"
                alt="slide 4"
              />
            </>
          </Carousel>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BioBourgoyen;
