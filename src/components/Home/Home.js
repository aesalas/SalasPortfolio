import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import homeLogo from "../../Assets/home-main.png";
import Type from "./Type";
import ContactForm from '../ContactForm'


function Home() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          
         
            <div className="home-header">
              
                <Col md={4}>
                  <h1 className="heading-name">
                    Hi, I'm
                  </h1>
                </Col>

                <Col>
                  <img 
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid"
                  />
                </Col>

                <Col md={{ span: 8, offset: 3 }}>
                <p></p>
                  <h2><Type/></h2>
                </Col>


                <Col className="home-header">
                  <h3>
                  Passionate about building innovative,
                   purposeful, and creative solutions.
                  </h3>
                </Col>
              <div className="center" >
                <Button onClick={handleShow}>
                  Let's Talk!
                </Button>
              </div>

              <Modal 
                show={show} 
                onHide={handleClose} 
                backdrop="static"
               >
                <Modal.Header closeButton>
                  <Modal.Title> Contact </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Connect with me on LinkedIn or fill out the form to send me an email!</p>
                  <ContactForm/>
                </Modal.Body>
              </Modal>
            </div>
    

        </Container>
      </Container>
    </section>
  );
}

export default Home;
