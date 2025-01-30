import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import TicTac from "./TicTac"
import wave from "../../Assets/Projects/waveportal.png";
import autoTest from "../../Assets/Projects/AutoTest.png";
import watsonAssist from "../../Assets/Projects/watsonAssist.png";
import LABcookie from "../../Assets/Projects/LABcookie.png";
import PPweb from "../../Assets/Projects/PPweb.png";


function Projects() {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="popOColor"> Works </strong>
        </h1>
        <h4>
          Here are a few projects I've worked on recently.
        </h4>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PPweb}
              title="Personal Portfolio"
              description="Website designed to showcase my development skills and certifications. Improved my 
                frontend development and React development skills. I also learned how to host my website and purchase a domain."
              demoLink="https://alexandrasalas.dev/"
              ghLink="https://github.com/aesalas/SalasPortfolio"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LABcookie}
              title="Life's A Batch Baking Co."
              description="Website designed for a monthly cookie drop by life's a batch baking co. 
                Utilited for farmers market to hold ingredients and different flavors. Improved my 
                frontend development skills and improved SEO and web optimization"
              demoLink="https://www.lifesabatchbakingco.com/"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watsonAssist}
              title="Watson Assistant"
              description="Introduction to enterprise-grade AI.
              Used IBM Watson web assistant builder to create possible customer conversation, 
              actions, and steps. Learned about how AI can be integrated in to webpages to make 
              customers feel supported and provide analyitics to the company"
              demoLink="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Fau-syd.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-62a2d422-ea9e-4390-b4b5-9d83ede44e70%3A%3Aba220f89-0579-4530-b46f-075c7d28c9df&integrationID=831023cd-bd85-4122-8470-783a0e8f49a6&region=au-syd&serviceInstanceID=62a2d422-ea9e-4390-b4b5-9d83ede44e70"
            />
          </Col>

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
          <Col md={4} className="game-card">
            <TicTac/>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
