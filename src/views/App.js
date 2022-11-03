import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

import Logo from "../assets/img/logo.jpg";

function App() {
  return (
    <Container>
      <div className="d-flex justify-content-center flex-column">
        <Row className="justify-content-center">
          <Col md="6">
            <Image src={Logo} fluid alt="Logo" />
          </Col>
        </Row>

        <Container className="mt-5">
          <Col md="6" className="my-2 mx-auto">
            <Row className="justify-content-center">
              <Button href="/game">
                START GAME
              </Button>
            </Row>
          </Col>

          <Col md="6" className="my-2 mx-auto">
            <Row className="justify-content-center">
              <Button href="/" variant="outline-secondary">
                Scores
              </Button>
            </Row>
          </Col>

          <Col md="6" className="my-2 mx-auto">
            <Row className="justify-content-center">
              <Button href="/about" variant="outline-secondary">
                About
              </Button>
            </Row>
          </Col>
        </Container>
      </div>
    </Container>
  );
}

export default App;