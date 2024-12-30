import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact = () => {
  const fadeIn = {
    animation: "fadeIn 1s ease-in",
  };

  return (
    <>
      <Container className="py-4">
        <Row className="justify-content-center ">
          <Col md={6}>
            <div className="text-center" style={fadeIn}>
              <h1 classNamem="my-3">
                Take the First Step Towards{" "}
                <span style={{ color: "orange" }}> Hassle-Free</span>{" "}
              </h1>
              <h1>Technology</h1>
            </div>
            
           <div className="bg-light shadow py-5 px-3 my-5">
            <h3 className="small">Phone</h3>
            <p className="small">+91 6381475573</p>
            <h3 className="small">Headquarters</h3>
            <p className="small">Tirupattur, Vellore, Tamil Nadu</p>
            <h3 className="small">Specialties</h3>
            <p className="small"> Mobile, Web, Desktop, Web Design, QA, and Testing</p>
            </div>
            <p className="my-5">
              Fill out the form to schedule a complimentary consultation and
              learn how we can help you achieve your technology goals.
            </p>
          </Col>

          <Col md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
