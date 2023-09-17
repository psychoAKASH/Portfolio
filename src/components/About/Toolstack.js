import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiPowerbi,
  SiAnaconda
} from "react-icons/si";
import {RiFileExcel2Fill} from "react-icons/ri";
import {BsGithub} from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiFileExcel2Fill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < BsGithub/>
      </Col>
    </Row>
  );
}

export default Toolstack;
