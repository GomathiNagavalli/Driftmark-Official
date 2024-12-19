import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <div>
              <span style={{ color: "skyblue", marginTop: "15px" }}>
                CONTACT
              </span>
              <h2 className="mt-4" style={{ color: "" }}>
                How Can We Help You And
              </h2>
              <h2 style={{ color: "" }}>Your Business?</h2>
              <div
                className="contact"
                style={{
                  backgroundColor: "blue",
                  borderRadius: "10px",
                  padding: "15px",
                  marginTop: "25px",
                }}
              >
                <h3 style={{ color: "white" }}>Get Support</h3>
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
          </Col>
          <Col md={6} className="mt-3">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
