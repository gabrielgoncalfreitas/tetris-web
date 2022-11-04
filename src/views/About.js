import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

import Logo from "../assets/img/logo.jpg";

function About() {
  return (
    <Container>
      <div className="d-flex justify-content-center flex-column">
        <Row className="justify-content-center">
          <Col md="6">
            <Image src={Logo} fluid alt="Logo"/>
          </Col>
        </Row>

        <Container className="mt-5">
          <p className="text-center ">
            Game developed by: <a href="https://github.com/gabrielgoncalfreitas">github.com/gabrielgoncalfreitas</a>
          </p>

          <Col md="6" className="my-2 mx-auto">
            <Row className="justify-content-center">
              <Button href="/" variant="outline-primary">
                RETURN HOME
              </Button>
            </Row>
          </Col>
        </Container>
      </div>
    </Container>
  );
}

export default About;
