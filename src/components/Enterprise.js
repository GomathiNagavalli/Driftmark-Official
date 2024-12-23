import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
// import Enterpriseimg from "../assets/enterprise.png";
import "../components/Solutions.css";
// import ITsolution from "../assets/ITsolution.png";
// import cloud2 from "../assets/cloud2.png";
import { useNavigate } from "react-router-dom";
import Enterpriseimg2 from "../assets/Enterpriseimg.jpg";

const Enterprise = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={6}>
            {/* <span style={{ color: "skyblue" }}>ENTERPRISE SOLUTIONS</span> */}
            <h2 className="mt-3"> Expert IT Support for</h2>
            <h2>In-House Teams</h2>
            <p className="mt-3">
              Not every organization needs a full-scale IT outsourcing solution,
              but nor do they have all the expertise in-house. If your business
              falls somewhere in between, our supplemental IT services are here
              to help. We'll work alongside your internal IT team to fill gaps,
              provide specialized expertise, and share the workload – so you can
              focus on what matters most.
            </p>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <Image
                src={Enterpriseimg2}
                fluid
                rounded
                style={{ width: "400px", height: "300px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        <Row>
          <Col>
            <div className="text-center ">
              <h2 className="display-6 fw-bold">
                {" "}
                Augment Your IT Team with Expert Support
              </h2>
              <p>
                Is your in-house IT team overwhelmed? We provide
                enterprise-grade expertise to businesses with 100+ users,
                helping to alleviate the daily burden on your IT staff. Our goal
                is to boost your productivity and streamline workflow, so you
                can focus on driving business growth
              </p>
            </div>
          </Col>
        </Row>
        <div
          className="text-center my-3 w-70"
          style={{
            border: "3px solid #02025fe1",
            borderRadius: "10px",
            padding: "30px",
          }}
        >
          <h2>Aligning IT with Your Business Vision</h2>
          {/* <h2> Business</h2> */}
          <p className="mt-3 lead">
            Let's collaborate to develop a strategic IT roadmap tailored to your
            organization's unique goals. Our technical experts will help you
            bridge the gap between IT and business objectives, ensuring your
            projects drive meaningful outcomes and propel your business forward.
          </p>
        </div>
      </Container>
      <Container className="contact-container my-5">
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <div>
              <h1 style={{ color: "white" }}>
                Let's discuss how we can support{" "}
              </h1>
              <h1 style={{ color: "white" }}>your business goals.</h1>
            </div>
          </Col>
          <Col>
            <Button className="mt-3" href="/contact">
              Contact Us Today
            </Button>
          </Col>
        </Row>
       
      </Container>
      <Container>
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
