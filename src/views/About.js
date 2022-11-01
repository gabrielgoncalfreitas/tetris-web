import React from "react";
import { Container } from "react-bootstrap";

import Logo from "../assets/img/logo.jpg";

function About() {
  return (
    <Container>
      <div className="d-flex justify-content-center flex-column">
        <div className="row justify-content-center">
          <div className="col-md-6 col-md-4">
            <img src={Logo} className="img-fluid" alt="Logo" />
          </div>
        </div>

        <div className="container mt-5">
          <p className="text-center ">
            Game developed by: <a href="https://github.com/gabrielgoncalfreitas">github.com/gabrielgoncalfreitas</a>
          </p>

          <div className="col-md-6 my-2 mx-auto">
            <div className="row justify-content-center">
              <a href="/" className="btn btn-outline-primary">
                RETURN HOME
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
