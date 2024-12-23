import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function ContactForm() {
  return (
    <Container className="">
      <p style={{ color: "rgba(53, 53, 148, 0.882)" }}>
        Fill out the form below to schedule a complimentary consultation and
        learn how we can help you achieve your technology goals.
      </p>
      <Form>
        {/* Input Fields */}
        {[
          "First Name",
          "Last Name",
          "Email",
          "Phone",
          "Company",
          "Message",
        ].map((label, index) => (
          <Form.Group
            controlId={label.toLowerCase().replace(" ", "")}
            key={index}
            className="mb-3"
          >
            <Form.Label style={{ color: "navy" }}>{label}</Form.Label>
            <Form.Control
              type={label === "Message" ? "textarea" : "text"}
              placeholder={`Enter ${label.toLowerCase()}`}
              rows={label === "Message" ? 3 : undefined}
              style={{ borderColor: "#5a75a9" }}
            />
          </Form.Group>
        ))}

        {/* "I am not a robot" Section */}
        <Form.Group controlId="robotCheck" className="mb-4">
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Check type="checkbox" className="me-2" />
            </Col>
            <Col>
              <Form.Label className="mb-0">I am not a robot</Form.Label>
            </Col>
          </Row>
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
