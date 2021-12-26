import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

// FOTOS
import slide1 from "../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_01.png";
import slide2 from "../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_02.png";
import slide3 from "../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_03.png";
import slide4 from "../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_04.png";
import slide5 from "../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_05.png";
import slide6 from "../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_06.png";
import slide7 from "../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_07.png";
import slide8 from "../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_08.png";
import slide9 from "../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_09.png";
import slide11 from "../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_11.png";

const BioBourgoyen = () => {
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
              <img src={slide11} alt="slide 11" />
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
