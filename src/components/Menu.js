import React from "react";
import { Button, Container } from "react-bootstrap";

import Logo from "../assets/img/logo.jpg";

function Menu() {
    return (
        <Container>
            <div className="d-flex justify-content-center flex-column">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-md-4">
                        <img src={Logo} className="img-fluid" alt="Logo" />
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="col-md-6 my-2 mx-auto">
                        <div className="row justify-content-center">
                            <Button>
                                START GAME
                            </Button>
                        </div>
                    </div>

                    <div className="col-md-6  my-2 mx-auto">
                        <div className="row justify-content-center">
                            <Button variant="outline-secondary">
                                Scores
                            </Button>
                        </div>
                    </div>

                    <div className="col-md-6 my-2 mx-auto">
                        <div className="row justify-content-center">
                            <Button variant="outline-secondary">
                                About
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Menu;