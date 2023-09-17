import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VisualCard from "./VisualCard";
import Particle from "../Particle";

function Visuals() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few data visuals I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <VisualCard
              // imgPath={}
              isBlog={false}
              title=""
              description=""
              // ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <VisualCard
              // imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <VisualCard
              // imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <VisualCard
              // imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <VisualCard
              // imgPath={}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <VisualCard
              // imgPath={}
              isBlog={false}
              title=""
              description=""
              
              ghLink=""
              demoLink="" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Visuals;
