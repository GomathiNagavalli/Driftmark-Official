import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

 

const Footer = () => {
 
  return (
    <>
      <Container fluid
        
        className="my-1 shadow"
        style={{
          backgroundColor:'black',
          color:'white',
          // background: "linear-gradient(to bottom, rgb(182, 219, 227), white)",
          //  backgroundColor: " rgb(182, 230, 230)",
          borderRadius: "10px"
        }}
      >
        <Row style={{borderBottom:'1px solid white'}}>
          <Col><div className="text-center my-3">
        <h2 className="text-light">Let Us Bring Your Product to life</h2>
        </div></Col>
        </Row>
        <Row>
          <Col md={4} className="my-3">
            <div className="d-flex flex-column">
              <h4 className="text-light">Services</h4>
              <Link to="/" style={{textDecoration:'none'}}>Solutions</Link>
              <Link to="/cloud" style={{textDecoration:'none'}}>Cloud</Link>
              <Link to="/enterprise" style={{textDecoration:'none'}}>Enterprise</Link>
            </div>
            {/* <Link to={''}>Solutions</Link> */}
          </Col>
          <Col md={4} className="my-3">
            <div className="d-flex flex-column">
              <h4 className="text-light" >Resources</h4>
              <Link to="/services" style={{textDecoration:'none'}}>Blog</Link>
              <Link to="/contact" style={{textDecoration:'none'}}>Contact Us</Link>
              <Link to="/services" style={{textDecoration:'none'}}>Downloads</Link>
            </div>
          </Col>
          <Col md={4} className="my-3">
            <div className="d-flex flex-column">
              <h4 className="text-light">Follow Us</h4>
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
          <Col className="text-center my-4 border-top border-1 pt-3">
           
            <span className="text-muted">©2023 - 2024 Driftmark Technology Pvt. Ltd. All Rights Reserved</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
