import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import AboutCardPers from "./AboutCardPers";
import profileImg from "../../Assets/profile.png";
import Toolstack from "./Toolstack";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1> About Me </h1>
        <Row className="about-row">

          <Col md={{span: 6, offset: 1}}>
            <AboutCard />
          </Col>

          <Col md={5} className="about-img">
            <img src={profileImg} alt="about" className="img-fluid" />
          </Col>

        </Row>
        <Row>
          <Col md={5} className="about-img">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>

          <Col md={7} className="about-pers">                    
            <AboutCardPers/>            
          </Col>
        </Row>
        <h1 className="project-heading">
          Programming <strong className="popOColor">Tech Stack </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="popOColor">Tools</strong> I Utilize
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
