import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../components/Solutions.css";
import Aboutimg from "../assets/Aboutimg.jpg";
import '../components/Solutionspage.css';
import SolutionsPage from "./SolutionsPage";

const About = () => {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={6}>
            <div>
              {/* <span style={{color:'skyblue'}}>OUR ADVANTAGE</span> */}
              <h1>Scalable Solutions for</h1>
              <h1>Ambitious Business</h1>
              <p>
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
                style={{ width: "500px", height: "250px" }}
              ></Image>
            </div>
          </Col>
        </Row>
      </Container>
      <SolutionsPage />
      <Container>
        <Row>
          <Col md={4}>
          <h2>Cybersecurity</h2>
          <p>Our cybersecurity experts help enterprises protect their sensitive data, prevent cyber threats, and ensure compliance with regulatory requirements.</p>
          </Col>
          <Col md={4}>
          <h2>IT Consulting</h2>
          <p>We provide expert guidance and support to help enterprises make informed technology decisions, optimize their IT infrastructure, and ensure seamless integration with existing systems.</p>
          </Col>
          <Col md={4}>
          <h2>Custom Solutions</h2>
          <p>Our team develops tailored software solutions that meet the unique needs of enterprises, improving operational efficiency, reducing costs, and enhancing customer experiences.</p>
          </Col>
        </Row>
      </Container>

      <Container
        className="my-5"
        style={{ backgroundColor: " rgb(246, 212, 140)", borderRadius: "10px" }}
      >
        <div className="text-center py-5 px-5">
          <h1 className="my-3">About Our Expert Team</h1>
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
        <Row>
          <Col>
            <div className="text-center">
              <h1 className="display-6 ">
                Driftmark Brings Your Vision to Life!
              </h1>
              <p className="lead">
                Our team of experts specializes in delivering cutting-edge
                solutions in frontend development, full-stack development, and
                Flutter mobile app development. Leveraging the power of ReactJS
                and Flutter, we've successfully completed 3+ projects that
                empower businesses to reach new heights.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
