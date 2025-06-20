import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, and I’ve been on a journey ever since. 🚀
              <br />
              <br />I’m fluent in core technologies like{" "}
              <i>
                <b className="purple">Python, Java, React, HTML, CSS, and JavaScript</b>
              </i>
              .
              <br />
              <br />
              I enjoy building{" "}
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>
              , and I'm deeply interested in{" "}
              <i>
                <b className="purple">Deep Learning</b> and{" "}
                <b className="purple">Natural Language Processing</b>.
              </i>
              <br />
              <br />
              Whenever I can, I apply my passion for full-stack development using{" "}
              <b className="purple">Node.js</b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar text-center">
            
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ maxWidth: "550px", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))" ,paddingLeft:"100px"}}
              />
            
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social text-center">
            <h1>FIND ME ON</h1>
            <p>
              Let's <span className="purple">connect</span> and build something awesome!
            </p>
            <ul className="home-about-social-links" style={{ paddingLeft: 0, listStyle: "none" }}>
              <li className="social-icons">
                <a
                  href="https://github.com/Veeras-code"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/nagasai"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/veera-naga-sai-543067266/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mr_.sai._6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;