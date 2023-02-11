
import React from "react";
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
