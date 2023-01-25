
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
    
    
   useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setEmSent(true);
    }
    setShow(true);
  }, []);

  return (
    <Container >
      <Row>
        <Col>
          {/* <!-- contact form --> */}
          <div className="contact">
            <form 
                name="contact" 
                method="POST" 
                action="/contact/?success=true"
                data-netlify="true" 
                >
            <input type="hidden" name="form-name" value="contact" />
              <TextArea id="standard-basic" label="name" name="name" /> <br />
              <TextArea id="standard-basic" label="email" name="email" /> <br />
              <TextArea
                multiline
                id="standard-multiline-static"
                label="message"
                name="message"
              />
              <br />
              <div>
                <Button type="submit">Send</Button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default ContactForm;
