import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import kisaanmart from "../../Assets/Projects/kisaanmart.png";
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
              imgPath={kisaanmart}
              isBlog={false}
              title="Kisaan-Mart"
              description="Built a Full-Stack web application that enables farmers to directly list and sell their agricultural products to consumers through online, eliminating middlemen and increasing profitability. Integrated secure user authentication, real-time product listings, and responsive UI to provide a seamless marketplace experience. Utilized the MERN stack for efficient data handling and scalable deployment."
              ghLink="https://github.com/Veeras-code/Kisan-Mart"
              demoLink="https://kisaan-mart-gilt.vercel.app/"
            />
          </Col>

          <Col md={4} className="d-flex mb-4">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Veeras-code/Plant-AI-Master"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="d-flex mb-4">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
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
