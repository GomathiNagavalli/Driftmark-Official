import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../components/Footer.css";
// import Logo from "../assets/Driftmarklogo.jpg";
import { Image } from "react-bootstrap";
import Footerlogo from "../assets/OfficialLogo2.jpeg";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  return (
    <>
      <Container
        fluid
        className="shadow"
        style={{
          backgroundColor: "black",
          color: "white",
         
        }}
      >
        <Row style={{ backgroundColor: "white" }}>
          <Col>
            <div className="text-center my-3 d-flex align-items-center justify-content-center">
              <h1>Let Us Bring Your Product to life</h1>
            </div>
          </Col>
        </Row>
        <Row className="my-4 d-flex justify-content-center ">
          <Col md={3} className="my-2">
            <div className="d-flex flex-column">
              <div className="my-2">
                <Image
                  src={Footerlogo}
                  style={{
                    // width: "45px",
                    width: "35px",
                    borderRadius: "30%",
                    // height: "40px",
                    height: "27px",
                    // padding: "4px",
                  }}
                  // className="me-2"
                  alt="Driftmark Logo"
                />
              </div>

              <span className="text-light my-2">
                <i className="i bi bi-telephone "></i> +91 6381475573
              </span>
              <span className="text-light my-2">
                <i className="bi bi-clock "></i> Monday - Saturday
              </span>
              <span
                onClick={() => handleLinkClick("/enterprise")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <i className="bi bi-globe"></i> www.driftmarktech.com
              </span>
              {/* <span
                onClick={() => handleLinkClick("/enterprise")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <i className="bi bi-globe"></i> www.driftmarktech.com
              </span> */}
              <Link to="mailto:driftmarktechnology@gmail.com" className="my-2 text-light text-decoration-none">
                  <i
                    className="bi bi-envelope"
                    // style={{ color: "#EA4335" }}
                  ></i> Email
                </Link>
            </div>
          </Col>
          <Col md={3} className="my-2">
            <div className="d-flex flex-column ">
              <h4 className="my-2">Services</h4>
              <span
                onClick={() => handleLinkClick("/")}
                className="my-2 text-light "
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Home
              </span>
              <span
                onClick={() => handleLinkClick("/innovation")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Innovation
              </span>
              <span
                onClick={() => handleLinkClick("/enterprise")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Enterprise
              </span>
            </div>
          </Col>
          <Col md={3} className="my-2">
            <div className="d-flex flex-column">
              <h4 className="my-2">Resources</h4>
              <span
                onClick={() => handleLinkClick("/services")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Blog
              </span>
              <span
                onClick={() => handleLinkClick("/contact")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Contact Us
              </span>
              <span
                onClick={() => handleLinkClick("/services")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Downloads
              </span>
            </div>
          </Col>
          <Col md={3} className="my-2">
            <div className="d-flex flex-column">
              <h4 className="my-2">Follow Us</h4>
              <div
                className="d-flex justify-content-between my-2"
                style={{ width: "150px" }}
              >
                <Link
                  to="https://www.linkedin.com/company/driftmark-technology/?originalSubdomain=in"
                  target="_blank"
                >
                  <i
                    className="bi bi-linkedin"
                    style={{ color: "#0077b5" }}
                  ></i>
                </Link>
                <Link
                  to="https://x.com/DriftmarkTech/status/1868882210511896780"
                  target="_blank"
                >
                  <i className="bi bi-twitter" style={{ color: "#1DA1F2" }}></i>
                </Link>

                <Link
                  to="https://www.instagram.com/driftmarktechnology/"
                  target="_blank"
                  className=""
                >
                  <i
                    className="bi bi-instagram"
                    style={{ color: "#E1306C" }}
                  ></i>
                </Link>
                
              </div>
            </div>
          </Col>
        </Row>
        <Row className="p-5 small">
          <Col className="text-center">
            <div>
              <div className="d-flex justify-content-center">
                <span
                  onClick={() => handleLinkClick("termsandconditions")}
                  className="my-2 px-1 border-end border-primary text-light"
                  style={{ cursor: "pointer", textDecoration: "none" }}>
                  Terms & Conditions
                </span>
                
                <span
                  onClick={() => handleLinkClick("privacypolicy")}
                  className="my-2 px-1 text-light "
                  style={{ cursor: "pointer", textDecoration: "none" }}>
                  Privacy Policy
                </span>
              </div>
              ©2023 - 2024 Driftmark Technology Pvt. Ltd. All Rights Reserved
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
