import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiSqllite,
  DiJava,
  DiHtml5,
  DiAngularSimple
} from "react-icons/di";
import {
  SiSolidity
} from "react-icons/si";

function Techstack() {
  return (

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} >
      <Col xs={4} md={2} className="tech-icons"  >
        <CgCPlusPlus />
        <h5>C++/C</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  >
        <DiJavascript1 />
        <h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  >
        <DiNodejs />
        <h5>Node.JS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  >
        <DiAngularSimple />
        <h5>Angular</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  >
        <DiReact />
        <h5>ReactJS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  >
        <DiJava />
        <h5>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  >
        <DiGit />
        <h5>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  >
        <DiSqllite />
        <h5>Sqlite</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  >
        <DiPython />
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  >
        <DiHtml5 />
        <h5>HTML/CSS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons"  >
        <SiSolidity />
        <h5>Solidity</h5>
      </Col>

    </Row>
  );
}

export default Techstack;
