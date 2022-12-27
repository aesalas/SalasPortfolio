import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAdobephotoshop,
  SiVisualstudiocode,
  SiAdobeillustrator,
  SiHeroku,
  SiAtlassian,
  SiDocker,
  SiIntellijidea,
  SiPycharm,
  SiSlack,
  SiAmazonaws,
  SiReplit
} from "react-icons/si";

function Toolstack() {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>Visual Studios</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <h5>Intellij</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <h5>Pycharm</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReplit /><h5>Replit</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <h5>Photoshop</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
        <h5>Illustrator</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtlassian />
        <h5>Atlassian</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h5>Slack</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /><h5>Docker</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h5>AWS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
         <h5>Heroku</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
