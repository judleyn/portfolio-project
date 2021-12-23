import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// FOTOS
import slide1 from "../pictures/pluswonen/Pluswonen_Pagina_01.png";
import slide2 from "../pictures/pluswonen/Pluswonen_Pagina_02.png";
import slide3 from "../pictures/pluswonen/Pluswonen_Pagina_03.png";
import slide4 from "../pictures/pluswonen/Pluswonen_Pagina_04.png";

const Pluswonen = () => {
  return (
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
        </Carousel>
      </div>
    </div>
  );
};

export default Pluswonen;
