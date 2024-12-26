import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "../components/Solutions.css";
import { useNavigate } from "react-router-dom";
import Enterpriseimg2 from "../assets/Enterpriseimg.jpg";

const Enterprise = () => {
   const navigate = useNavigate();
  
    const handleLinkClick = (path) => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
    };
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={6}>
            {/* <span style={{ color: "skyblue" }}>ENTERPRISE SOLUTIONS</span> */}
            <h1 className="mt-3">Commercial Solutions</h1>
            {/* <h1></h1> */}
            <p className="mt-3">
              At Driftmark Technology, we understand the complexities of
              enterprise environments and the need for scalable, secure, and
              efficient solutions. Our team of experts works closely with
              enterprises to design, develop, and implement customized solutions
              that drive business growth, improve operational efficiency, and
              enhance customer experiences.
            </p>
          </Col>
          <Col md={6} >
            <div className="text-center">
              <Image
                src={Enterpriseimg2}
                fluid
                rounded
                className="shadow"
                // style={{ width: "400px", height: "300px" }}
                style={{ width: "500px", height: "300px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col>
            <div className="text-center ">
              <h2 className="my-2"> Digital Transformation</h2>
              <p>
                We help enterprises navigate the digital landscape by developing
                strategies, designing solutions, and implementing technologies
                that drive business innovation.
              </p>
            </div>
          </Col>
        </Row>
        <div
          className="text-center my-4 w-70 layout"
          style={{
            // border: "3px solid #02025fe1",
            borderRadius: "10px",
            padding: "30px",
          }}
        >
          <h2>Aligning IT with Your Business Vision</h2>
          {/* <h2> Business</h2> */}
          <p className="mt-3 ">
            Let's collaborate to develop a strategic IT roadmap tailored to your
            organization's unique goals. Our technical experts will help you
            bridge the gap between IT and business objectives, ensuring your
            projects drive meaningful outcomes and propel your business forward.
          </p>
        </div>
      </Container>
      
      <Container className="my-3">
        <Row>
          <Col md={4}>
            <h3>Flutter MobileApp Development</h3>
            <p>
              Flutter is an open-source mobile app development framework created
              by Google. It allows developers to build natively compiled
              applications for mobile, web, and desktop from a single codebase.
            </p>
          </Col>
          <Col md={4}>
            <h3>Our Expertise in Frontend Development</h3>
            <p>
              {" "}
              Frontend frameworks like React, Angular, and Vue.js enable
              developers to build complex and scalable applications.
              Additionally, considerations such as responsive web design,
              accessibility, and performance optimization are essential to
              ensure a seamless user experience across various devices and
              browsers.{" "}
            </p>
          </Col>

          <Col nd={4}>
            <h3>Experts In FullStack Development</h3>
            <p>
              Designing and developing the user interface and user experience
              (UI/UX) using frontend technologies like HTML, CSS, and
              JavaScript, as well as building the server-side logic, database
              integration, and API connectivity using backend technologies like
              Node.js, Ruby on Rails, and Python.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Enterprise;
