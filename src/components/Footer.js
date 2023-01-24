import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Alexandra Salas</h3>
        </Col>
        
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/aesalas"
                style={{ color: "#034001" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/Alexandra-salas-/"
                style={{ color: "#034001"}}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AES</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
