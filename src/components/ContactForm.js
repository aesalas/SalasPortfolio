
import React from "react";
import emailjs from 'emailjs-com';
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
              <Button type='submit'>Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default ContactForm;