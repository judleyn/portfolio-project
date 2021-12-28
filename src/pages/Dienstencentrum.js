import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

const Dienstencentrum = () => {
  return (
    <div>
      <div className="pdf">
        <a href="http://localhost:5000/juliendl/data/pdf/dienstencentrum.pdf">
          Jurybundel Dienstencentrum
        </a>
      </div>
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
                <img
                  src="http://localhost:5000/juliendl/data/images/dienst1.png"
                  alt="slide 1"
                />
              </>
              <>
                <img
                  src="http://localhost:5000/juliendl/data/images/dienst2.png"
                  alt="slide 2"
                />
              </>
              <>
                <img
                  src="http://localhost:5000/juliendl/data/images/dienst3.png"
                  alt="slide 3"
                />
              </>
              <>
                <img
                  src="http://localhost:5000/juliendl/data/images/dienst4.png"
                  alt="slide 4"
                />
              </>
              <>
                <img
                  src="http://localhost:5000/juliendl/data/images/dienst5.png"
                  alt="slide 5"
                />
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
