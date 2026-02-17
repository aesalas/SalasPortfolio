import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import PPweb from "../../Assets/Projects/PPweb.png";
import { BsGithub } from "react-icons/bs";


function DataProjects() {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="popOColor"> Works </strong>
        </h1>
        <h4>
          Here are a few data specific projects I've worked on recently.
        </h4>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/*PP project card*/}
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




          
        </Row>
      </Container>
    </Container>
  );
}

export default DataProjects;
