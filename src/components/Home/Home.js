import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/myphoto.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";


function Home() {
  return (
    <section aria-label="Home Section">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading" style={{ marginBottom: "15px", fontWeight: "600" }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-label="Waving Hand">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ marginBottom: "20px", fontWeight: "700" }}>
                I'M <strong className="main-name">VEERA NAGA SAI</strong>
              </h1>

              <div style={{ marginLeft: "40px",marginTop:"30px", textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="text-center">
            <Tilt>
              <img
                src={homeLogo}
                alt="Portrait of Veera Naga Sai"
                className="img-fluid rounded-circle shadow"
                style={{
                  width: "320px",
                  height: "320px",
                  objectFit: "cover",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
                }}
              />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;