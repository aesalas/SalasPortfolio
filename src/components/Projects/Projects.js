import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import wave from "../../Assets/Projects/waveportal.png";
import autoTest from "../../Assets/Projects/AutoTest.png";


function Projects() {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wave}
              title="Wave Portal"
              description="Introduction project to Solidity and Web3.
              Wrote and deployed a smart contract to the blockchain and built a
              client app to allow interactions with the smart contract."
              demoLink="https://waveportal-starter-project.alexandrasalas1.repl.co/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoTest}
              title="Auto Test Fixture"
              description="A web application that features a test procedure
               builder to provide engineers with tools for creating 
               procedures composed of automated and manual steps that 
               can then be used by test technicians to test devices and 
               produce reports."
              />
          </Col>

        

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
