import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";

export default function MasterstudioD() {
  return (
    <div>
      <div class="masterstudio">
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
                        <img
                          src="http://localhost:5000/juliendl/data/images/master1.png"
                          alt="slide 1"
                        />
                      </>
                      <>
                        <img
                          src="http://localhost:5000/juliendl/data/images/master2.png"
                          alt="slide 2"
                        />
                      </>
                      <>
                        <img
                          src="http://localhost:5000/juliendl/data/images/master3.png"
                          alt="slide 3"
                        />
                      </>
                      <>
                        <img
                          src="http://localhost:5000/juliendl/data/images/master4.png"
                          alt="slide 4"
                        />
                      </>
                      <>
                        <img
                          src="http://localhost:5000/juliendl/data/images/master5.png"
                          alt="slide 4"
                        />
                      </>
                      <>
                        <img
                          src="http://localhost:5000/juliendl/data/images/master6.png"
                          alt="slide 4"
                        />
                      </>
                      <>
                        <img
                          src="http://localhost:5000/juliendl/data/images/master7.png"
                          alt="slide 4"
                        />
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
