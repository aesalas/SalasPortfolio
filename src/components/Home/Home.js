import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Type from "./Type";
import ContactForm from '../ContactForm'
import Card from "react-bootstrap/Card";

function Home() {


  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row xs={1} md={2}>
            <Col >
              <img 
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
            <Col className="home-header">
              <Row>
                <Col md={4}>
                  <h1 className="heading-name">
                    Hi, I'm
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "25px 0px"}}>
                  <h1 className="heading-name">
                    <strong className="main-name"> 
                      Alexandra Salas
                    </strong>  
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 8, offset: 2 }}>
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
      <div className="home-contact">
        <Col md={{ span: 6, offset: 3 }} className="home-about-social">
            <h1>Contact</h1>
            <div className="contact-message">
              <p>Connect with me on LinkedIn or fill out the form to send me an email!</p>
              <div className="contact-frm">
                <ContactForm/>
              </div>
            </div>
        </Col>
      </div>
    </section>
  );
}

export default Home;
