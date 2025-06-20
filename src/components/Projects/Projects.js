import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading text-center mb-3">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p className="text-center" style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row className="justify-content-center pb-4">
          <Col md={4} className="d-flex mb-4">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="A real-time chatroom built with React.js, Firebase, and Material-UI. Features include messaging, image sharing, and emoji reactions."
              ghLink="https://github.com/Veeras-code/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="d-flex mb-4">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="A deep learning model using PyTorch and ResNet34 that identifies plant leaf diseases with 98% accuracy using Kaggle’s dataset."
              ghLink="https://github.com/Veeras-code/Plant-AI-Master"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="d-flex mb-4">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Facial emotion recognition using CNN on the FER-2013 dataset with Keras & TensorFlow. Face detection done using OpenCV."
              ghLink="https://github.com/Veeras-code/Face_Emotion_Detector/tree/main/Face_And_Emotion_Detection-master"
              demoLink="https://emotion-detector-demo.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;