import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

const Pluswonen = () => {
  return (
    <div>
      <div className="pdf">
        <a href="http://localhost:5000/juliendl/data/pdf/pluswonen.pdf">
          Jurybundel Pluswonen
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
                src="http://localhost:5000/juliendl/data/images/plus1.png"
                alt="slide 1"
              />
            </>
            <>
              <img
                src="http://localhost:5000/juliendl/data/images/plus2.png"
                alt="slide 2"
              />
            </>
            <>
              <img
                src="http://localhost:5000/juliendl/data/images/plus3.png"
                alt="slide 3"
              />
            </>
            <>
              <img
                src="http://localhost:5000/juliendl/data/images/plus4.png"
                alt="slide 4"
              />
            </>
            <>
              <img
                src="http://localhost:5000/juliendl/data/images/plus5.png"
                alt="slide 5"
              />
            </>
          </Carousel>
        </div>
        <div className="projects-gif">
          <img
            src="http://localhost:5000/juliendl/data/images/gif.gif"
            alt="gif"
          />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Pluswonen;
