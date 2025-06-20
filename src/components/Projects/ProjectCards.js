import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Fade from "react-reveal/Fade";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <Fade bottom>
      <Card
        className="project-card-view"
        style={{
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease",
          border: "none",
          borderRadius: "12px",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
      >
        <Card.Img
          variant="top"
          src={imgPath}
          alt="card-img"
          style={{
            height: "200px",
            objectFit: "cover",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px"
          }}
        />
        <Card.Body style={{ padding: "1.2rem" }}>
          <Card.Title style={{ fontWeight: "600", fontSize: "1.25rem",color:"#fff" }}>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "0.95rem", color: "#eda426" }}>
            {description}
          </Card.Text>
          <div className="d-flex mt-3">
            <Button
              variant="dark"
              href={ghLink}
              target="_blank"
              style={{ marginRight: "10px" }}
            >
              <BsGithub /> &nbsp;
              {isBlog ? "Blog" : "GitHub"}
            </Button>
            {!isBlog && demoLink && (
              <Button variant="info" href={demoLink} target="_blank">
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Fade>
  );
}

export default ProjectCards;
