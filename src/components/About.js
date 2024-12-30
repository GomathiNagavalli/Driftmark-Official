import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../components/Solutions.css";
import Aboutimg from "../assets/Aboutimg.jpg";
import '../components/Solutionspage.css';
// import SolutionsPage from "./SolutionsPage";

const About = () => {
  const fadeIn = {
    animation: "fadeIn 1s ease-in",
  };

  const zoomIn = {
    animation: "zoomIn 1s ease-in",
  };
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <div>
              {/* <span style={{color:'skyblue'}}>OUR ADVANTAGE</span> */}
              <h2 className="mt-3" style={fadeIn}>Scalable Solutions for</h2>
              <h2 className="mb-3" style={fadeIn}>Ambitious Business</h2>
              <p className="my-4"> 
                At Driftmark Technology, we understand that innovative
                businesses like yours can't afford to be held back by IT
                obstacles. That's why we're dedicated to providing top-notch
                software development services that drive growth and success.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <Image
                src={Aboutimg}
                fluid
                rounded
                style={{
                  width: "500px",
                  // maxWidth: "50",
                  height: "300px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  ...zoomIn,
                  transition: "transform 0.2s ease-in-out",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                // className="shadow"
                // style={{ width: "500px", height: "300px" }}
              ></Image>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <SolutionsPage /> */}
      <Container
      className="my-2"
      >
        <div className="text-center py-5 px-2 shadow"
        style={{ backgroundColor: " rgb(246, 212, 140)", borderRadius: "10px" }}>
          <h1 className="mt-3">About Our Expert Team</h1>
          <p className="my-3">
            Whether you're looking to enhance your online presence, streamline
            operations, or develop a custom mobile app, we've got you covered.
            Our mission is to keep your business moving forward, no matter what
            IT challenges come your way. Partner with us to unlock scalable
            solutions that propel your business forward.
          </p>
        </div>
      </Container>
      <Container className="my-5">
        <Row >
          <Col md={4}>
          <h3>Cybersecurity</h3>
          <p>Our cybersecurity experts help enterprises protect their sensitive data, prevent cyber threats, and ensure compliance with regulatory requirements.</p>
          </Col>
          <Col md={4}>
          <h3>IT Consulting</h3>
          <p>We provide expert guidance and support to help enterprises make informed technology decisions, optimize their IT infrastructure, and ensure seamless integration with existing systems.</p>
          </Col>
          <Col md={4}>
          <h3>Custom Solutions</h3>
          <p>Our team develops tailored software solutions that meet the unique needs of enterprises, improving operational efficiency, reducing costs, and enhancing customer experiences.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
