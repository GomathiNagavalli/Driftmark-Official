import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
// import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../components/Footer.css';

const Footer = () => {
  return (
    <>
      <Container
        className="my-4"
        style={{
          background: "linear-gradient(to bottom, rgb(108, 209, 229), white)",
          borderRadius: "10px",
        }}
      >
        <Row>
          <Col md={4} className="my-3">
            <div className="d-flex flex-column">
              <h4 style={{ color: "blue" }}>Services</h4>
              <Link to="/">Solutions</Link>
              <Link to="/cloud">Cloud</Link>
              <Link to="/enterprise">Enterprise</Link>
            </div>
            {/* <Link to={''}>Solutions</Link> */}
          </Col>
          <Col md={4} className="my-3">
            <div className="d-flex flex-column">
              <h4 style={{ color: "blue" }}>Resources</h4>
              <Link to="/resources">Blog</Link>
              <Link to="/resources">Case Studies</Link>
              <Link to="/resources">Downloads</Link>
            </div>
          </Col>
          <Col md={4} className="my-3">
            <div className="d-flex flex-column">
              <h4 style={{ color: "blue" }}>Contact Us</h4>
              <Link to="https://www.linkedin.com/company/driftmark-technology/?originalSubdomain=in" target="_blank">
               
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link to="https://www.instagram.com/driftmarktechnology/" target="_blank" className="">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link to="mailto:driftmarktechnology@gmail.com">
                <i className="bi bi-envelope"></i>
              </Link>
            </div>
          </Col>
          <Col className="text-center my-4 border-top border-4 pt-3">
           
            <span className="text-muted">© 2024 Driftmark Technology</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
