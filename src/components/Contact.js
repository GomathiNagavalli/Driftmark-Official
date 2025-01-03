import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact = () => {
  const fadeIn = {
    animation: "fadeIn 1s ease-in",
  };

  return (
    <>
      <Container className="py-4 mt-2">
        <Row className="justify-content-center my-4 ">
          <Col md={6}>
            <div className="text-center animate-slide-up" >
              <h3>
                Take the First Step Towards{" "}
                <span style={{ color: "skyblue" }}> Hassle-Free</span>{" "}
                Technology
              </h3>
            </div>
            
           <div className="bg-light py-2 px-3 my-3" style={{border:'1px solid skyblue',borderRadius:'10px'}}>
            <h3 className="small my-3">Phone</h3>
            <p className="small">+91 6381475573</p>
            <h3 className="small my-3">Headquarters</h3>
            <p className="small">Tirupattur, Vellore, Tamil Nadu</p>
            <h3 className="small my-3">Specialties</h3>
            <p className="small"> Mobile, Web, Desktop, Web Design, QA, and Testing</p>
            </div>
            {/* <p className="my-5 text-center">
              Fill out the form to schedule a complimentary consultation and
              learn how we can help you achieve your technology goals.
            </p> */}
            <h3 className="my-3">What to Expect During Your Consultation
            </h3>
            <ul>
              <p><li>A personalized, one-on-one discussion with our technology expert.</li></p>
              <p><li>A thorough review of your current technology infrastructure and goals.</li></p>
              <p><li>A Q&A session to address any questions or concerns you may have.</li></p>
              <p><li>A tailored presentation outlining our recommended solutions and strategies.</li></p>
            </ul>
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
