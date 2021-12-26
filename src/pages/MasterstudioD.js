import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

import slide1 from "../pictures/masterstudio d/slide 1.png";
import slide2 from "../pictures/masterstudio d/slide 2.png";
import slide3 from "../pictures/masterstudio d/slide 3.png";
import slide4 from "../pictures/masterstudio d/slide 4.png";
import slide5 from "../pictures/masterstudio d/slide 5.png";
import slide6 from "../pictures/masterstudio d/slide 6.png";
import slide7 from "../pictures/masterstudio d/slide 7.png";

export default function MasterstudioD() {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col sm={4}>
              <h1 className="masterstudio-heading">masterstudio d: </h1>
              <h4 className="about-heading">woodifications</h4>
              <p>
                Redesign of the Beinecke Rare Book & Manuscript Library by
                Gordon Bunshaft. The library is one of the largest buildings in
                the world dedicated to rare books and manuscripts. A specific
                climate is needed to preserve the books for as long as possible
                and they can’t be exposed to direct sunlight.
              </p>
            </Col>
            <Col sm={8}>
              <div className="projects">
                <div className="container">
                  <div className="masterstudio-content">
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
                        <img src={slide5} alt="slide 4" />
                      </>
                      <>
                        <img src={slide6} alt="slide 4" />
                      </>
                      <>
                        <img src={slide7} alt="slide 4" />
                      </>
                    </Carousel>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
