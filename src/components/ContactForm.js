import React, { useState } from "react";
import { useRef } from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form, Input, TextArea } from 'semantic-ui-react';




function ContactForm() { 

  return (
    <Container >
      <Row>
        <Col>
          {/* <!-- contact form --> */}
          <div className="contact">
            <Form name="contact" method post>
              <input type="hidden" name="form-name" value="contact" />
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
