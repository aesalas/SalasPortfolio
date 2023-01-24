
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form, Input, TextArea } from 'semantic-ui-react';
import Alert from 'react-bootstrap/Alert';



function ContactForm() { 
 const form = useRef();
 {/* <!-- email logic and message sent/failed alert --> */}
    const [show, setShow] = useState(false);
    const [emSent, setEmSent] = useState(false);

    if (show && emSent) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Message Sent</Alert.Heading>
          <p>
            Thank you for reaching out! I'll get back to you as soon as possible.
          </p>
          <p>
            - Alex
          </p>
        </Alert>
      );
      
    } 
    if (show && !emSent) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Something went wrong</Alert.Heading>
          <p>
            I apologize for the inconvenience, please try again.
          </p>
          <p>
            If the error keeps occuring reach out to me via 
            Linkedin and I'll be happy to message you there!
          </p>
        </Alert>
      );
    }
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_dpkpiyd', 'template_vg7lyf7', e.target, 'xIGNAR0gHYEXzl1pb')
        .then((result) => {
          console.log(result.text);
          setEmSent(true);
          setShow(true);

        }, (error) => {
          console.log(error.text);
          setEmSent(false);
          setShow(true);
        });
      e.target.reset()
    };

  return (
    <Container >
      <Row>
        <Col>
          {/* <!-- contact form --> */}
          <div className="contact">
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Field
                id='name'
                control={Input}
                label='Name'
                name='name'
                placeholder='Name…'
                required
                icon='user circle'
                iconPosition='left'
              />
              <Form.Field
                id='Email'
                control={Input}
                label='Email'
                name='email'
                placeholder='Email…'
                required
                icon='mail'
                iconPosition='left'
              />
              
              <Form.Field
                id='message'
                control={TextArea}
                label='Message'
                name='message'
                placeholder='Message…'
                required
              />
              <div className="submit-btn">
              <Button
                variant="primary"
                target="_blank"
                style={{ maxWidth: "250px" }}
              >Submit</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default ContactForm;