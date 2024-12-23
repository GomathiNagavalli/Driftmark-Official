import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
// import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Container className=" my-4">
        <div className="text-center">
      <h4 style={{color:'#02025fe1'}} className="display-6 fw-bold">Take the First Step Towards Hassle-Free Technology</h4>
      </div>
        <Row className="justify-content-center align-items-center">
          {/* <Col md={4}>
            <div>
              <h3 className="mt-4" style={{ color: "" }}>
              How Can We Help You 
              </h3>
              <h3 style={{ color: "" }}>Achieve Success?</h3>
              <div
                className="contact"
                style={{
                  backgroundColor: "blue",
                  borderRadius: "10px",
                  padding: "15px",
                  marginTop: "25px",
                }}
              >
                <h3 style={{ color: "white" }} >Get Support</h3>
                <p style={{ color: "white" }}>
                  Our current customers can submit a support ticket by sending
                  us an email at:
                </p>
                <i className="bi bi-envelope" style={{ color: "white" }}></i>{" "}
                <Link
                  to="mailto:driftmarktechnology@gmail.com"
                  style={{ color: "white" }}
                  className="fw-light"
                >
                  driftmarktechnology@gmail.com
                </Link>
              </div>
            </div>
          </Col> */}
          <Col md={8} className="mt-3">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
