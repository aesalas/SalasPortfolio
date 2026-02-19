
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import bookAnalysis from "../../Assets/Projects/bookAnalysis.png";



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
              imgPath={bookAnalysis}
              title="Book Analysis"
              description="Analyzed a dataset of books to extract insights about genres, authors, and publication trends."
              ghLink="https://github.com/aesalas/amazon-best-sellers-2023-2025-analysis"
            />
          </Col>




          
        </Row>
      </Container>
    </Container>
  );
}

export default DataProjects;
