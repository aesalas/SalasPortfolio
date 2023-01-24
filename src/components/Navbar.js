import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import ContactForm from "./ContactForm";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  
  window.addEventListener("scroll", scrollHandler);

  return (
    <div>
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              > About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >Resume
              </Nav.Link>
            </Nav.Item>

            

            <Nav.Item className="connect-btn" >
            
              <Button 
                className="connect-btn-inner"
                onClick={handleShow}
                >

                <AiOutlineMail style={{ fontSize: "1.2em" }} />
              </Button>
              
           </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       <Modal 
          className="contact-mod"
          show={show} 
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={handleClose}>
        <Modal.Header closeButton className="contact-header">
          <Modal.Title>
            <h1>Contact Me!</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm/>
        </Modal.Body>
      </Modal>
  </div>
  );
}

export default NavBar;
