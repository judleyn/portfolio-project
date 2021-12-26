import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

import slide1 from "../pictures/bio bourgoyen/Bio Bourgoyen_Pagina_01.png";
import slide2 from "../pictures/pluswonen/Pluswonen_Pagina_01.png";
import slide3 from "../pictures/dienstencentrum/Dienstencentrum_Pagina_01.png";
import slide4 from "../pictures/masterstudio d/slide1 extra.png";

export default function ProjectsPage() {
  return (
    <div>
      <div>
        <Container className="mycontainer">
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={slide1} />
                <Card.Body>
                  <Card.Title>Bio Bourgoyen</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button href="/biobourgoyen" variant="dark">
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={slide2} />
                <Card.Body>
                  <Card.Title>Pluswonen</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button href="/pluswonen" variant="dark">
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={slide3} />
                <Card.Body>
                  <Card.Title>Dienstencentrum</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button href="/Dienstencentrum" variant="dark">
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={slide4} />
                <Card.Body>
                  <Card.Title>Masterstudio D</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button href="/masterstudio-d" variant="dark">
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
}
