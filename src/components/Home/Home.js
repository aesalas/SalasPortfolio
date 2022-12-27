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
          <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{  maxWidth:"500px" }}
              />
            </Col>

            <Col md={7} className="home-header">

              <h1 className="heading-name">
                Hi, I'm
                <strong className="main-name"> Alexandra Salas</strong><div style={{ fontSize: 24, padding: "10px 0px 10px 127px"}}>
                <Type />
              </div>
              </h1>

              
              <h5 style={{ padding: "0px 50px", textAlign:"center"}}>
              Passionate about creating innovative, purposeful, and creative solutions. I build things to make a difference.
              </h5>
              
            </Col>

            
          </Row>
          
        </Container>
      </Container>
        <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <ContactForm />
        </Col>

    </section>
  );
}

export default Home;
