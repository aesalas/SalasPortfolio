import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Type from "./Type";
import ContactForm from '../ContactForm'


function Home() {


  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <Row>
                <Col md={4}>
                  <h1 className="heading-name">
                    Hi, I'm
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img 
                	src={homeLogo}
                	alt="home pic"
                	className="img-fluid"
                  />

                </Col>
                <Col className = "home-contact">
              <Col className="home-about-social">
              <h1>Contact</h1>
                <p>Connect with me on LinkedIn or fill out the form to send me an email!</p>
                
                  <ContactForm/>
                
              </Col>
            </Col>
              </Row>
              <Row>
                <Col md={{ span: 8, offset: 3 }}>
                  <h2><Type /></h2>
                </Col>
              </Row>
              <Row>
                <Col className="home-header">
                  <h3>
                  Passionate about building innovative,
                   purposeful, and creative solutions.
                  </h3>
                </Col>
              </Row>
            </Col>
            
            </Row>
        </Container>
      </Container>

    </section>
  );
}

export default Home;
