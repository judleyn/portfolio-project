import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <div>
      <div>
        <Container className="mycontainer">
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="http://localhost:5000/juliendl/data/images/preview1.png"
                />
                <Card.Body>
                  <Card.Title>Bio Bourgoyen</Card.Title>
                  <Card.Text>
                    Een ecofarm, hostel, buurtcafé, biowinkeltje en restaurant/
                    workshopruimte worden op een compacte manier
                    aaneengeschakeld.
                  </Card.Text>
                  <Button href="/biobourgoyen" variant="dark">
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="http://localhost:5000/juliendl/data/images/preview2.png"
                />
                <Card.Body>
                  <Card.Title>Pluswonen</Card.Title>
                  <Card.Text>
                    Een ontwerp voor een multifunctionele woning die doorheen de
                    tijd met kleine aanpassing aan verschillende wooncondities
                    kan voldoen.
                  </Card.Text>
                  <Button href="/pluswonen" variant="dark">
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="http://localhost:5000/juliendl/data/images/preview3.png"
                />
                <Card.Body>
                  <Card.Title>Dienstencentrum</Card.Title>
                  <Card.Text>
                    Een oude school wordt omgebouwd tot een dienstencentrum met
                    verschillende functies vanuit een economisch en ecologisch
                    standpunt.
                  </Card.Text>
                  <Button href="/Dienstencentrum" variant="dark">
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="http://localhost:5000/juliendl/data/images/preview4.png"
                />
                <Card.Body>
                  <Card.Title>Masterstudio D</Card.Title>
                  <Card.Text>
                    Een bestaande, massieve bib, gebouwd uit staal, beton en
                    natuursteen wordt herontworpen uit een ecologisch standpunt
                    met het materiaal hout.
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
      <div>
        {/*class="fixed-bottom" nog niet de oplossing die ik zoek */}
        <Footer />
      </div>
    </div>
  );
}
