import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

// FOTOS
import slide1 from "../pictures/pluswonen/Pluswonen_Pagina_01.png";
import slide2 from "../pictures/pluswonen/Pluswonen_Pagina_02.png";
import slide3 from "../pictures/pluswonen/Pluswonen_Pagina_03.png";
import slide4 from "../pictures/pluswonen/Pluswonen_Pagina_04.png";
import slide5 from "../pictures/pluswonen/Pluswonen_Pagina_05.png";
import slide6 from "../pictures/pluswonen/Pluswonen_Pagina_06.png";
import slide7 from "../pictures/pluswonen/Pluswonen_Pagina_07.png";
import slide8 from "../pictures/pluswonen/Pluswonen_Pagina_08.png";
import slide9 from "../pictures/pluswonen/Pluswonen_Pagina_09.png";
import slide10 from "../pictures/pluswonen/Pluswonen_Pagina_10.png";
import slide11 from "../pictures/pluswonen/Pluswonen_Pagina_11.png";
import slide12 from "../pictures/pluswonen/Pluswonen_Pagina_12.png";
import slide13 from "../pictures/pluswonen/Pluswonen_Pagina_13.png";
import slide14 from "../pictures/pluswonen/Pluswonen_Pagina_14.png";
import slide15 from "../pictures/pluswonen/Pluswonen_Pagina_15.png";
import slide16 from "../pictures/pluswonen/Pluswonen_Pagina_16.png";
import slide17 from "../pictures/pluswonen/Pluswonen_Pagina_17.png";
import slide18 from "../pictures/pluswonen/Pluswonen_Pagina_18.png";
import slide19 from "../pictures/pluswonen/Pluswonen_Pagina_19.png";
import slide20 from "../pictures/pluswonen/Pluswonen_Pagina_20.png";

const Pluswonen = () => {
  return (
    <div>
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
            <>
              <img src={slide5} alt="slide 5" />
            </>
            <>
              <img src={slide6} alt="slide 6" />
            </>
            <>
              <img src={slide7} alt="slide 7" />
            </>
            <>
              <img src={slide8} alt="slide 8" />
            </>
            <>
              <img src={slide9} alt="slide 9" />
            </>
            <>
              <img src={slide10} alt="slide 10" />
            </>
            <>
              <img src={slide11} alt="slide 10" />
            </>
            <>
              <img src={slide12} alt="slide 10" />
            </>
            <>
              <img src={slide13} alt="slide 10" />
            </>
            <>
              <img src={slide14} alt="slide 10" />
            </>
            <>
              <img src={slide15} alt="slide 10" />
            </>
            <>
              <img src={slide16} alt="slide 10" />
            </>
            <>
              <img src={slide17} alt="slide 10" />
            </>
            <>
              <img src={slide18} alt="slide 10" />
            </>
            <>
              <img src={slide19} alt="slide 10" />
            </>
            <>
              <img src={slide20} alt="slide 10" />
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

export default Pluswonen;
