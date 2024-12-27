import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <>
      <Container className=" my-4">
        <div className="text-center">
      <h1>Take the First Step Towards <span style={{color:'orange'}}> Hassle-Free</span>  </h1>
      <h1>Technology</h1>
      </div>
        <Row className="justify-content-center align-items-center">
          <Col md={8} className="mt-3">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
