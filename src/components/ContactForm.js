
import React from "react";
import { useRef } from 'react';
import { Container, Row, Col} from "react-bootstrap";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm()
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
    );
        };
  return (
    <Container >
      <Row>
        <Col>
          {/* <!-- contact form --> */}
          <div className="contact">
            form name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" required />
              </p>
              <p>
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" name="email" required />
              </p>
              <p>
                <label htmlFor="message">Message</label> <br />
                <textarea id="message" name="message" required></textarea>
              </p>
              <Button type='submit'>Submit</Button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default ContactForm;
