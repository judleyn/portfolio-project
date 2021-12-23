import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// FOTOS
import slide1 from "../../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_01.png";
import slide2 from "../../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_02.png";
import slide3 from "../../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_03.png";
import slide4 from "../../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_04.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={false}
    >
      <>
        <img src={slide1} alt="John Doe 1" />
      </>
      <>
        <img src={slide2} alt="Jane Doe 2" />
      </>
      <>
        <img src={slide3} alt="John Doe 3" />
      </>
      <>
        <img src={slide4} alt="John Doe 4" />
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
