
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import PPweb from "../../Assets/Projects/PPweb.png";



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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={PPweb}
              title="TBD"
              description="TBD"
              demoLink="https://alexandrasalasdev.netlify.app/"
              ghLink="https://github.com/aesalas/SalasPortfolio"
            />
          </Col>




          
        </Row>
      </Container>
    </Container>
  );
}

export default DataProjects;
