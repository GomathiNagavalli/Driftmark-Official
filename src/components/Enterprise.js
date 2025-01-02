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

  const fadeIn = {
    animation: "fadeIn 1s ease-in",
  };

  const zoomIn = {
    animation: "zoomIn 1s ease-in",
  };

  return (
    <>
      <Container className="py-4">
        <Row>
          <Col md={6}>
            <h3 className="mt-3 animate-slide-up" >
              Commercial Solutions
            </h3>

            <p className="my-4">
              At Driftmark Technology, we understand the complexities of
              enterprise environments and the need for scalable, secure, and
              efficient solutions. Our team of experts works closely with
              enterprises to design, develop, and implement customized solutions
              that drive business growth, improve operational efficiency, and
              enhance customer experiences.
            </p>
          </Col>
          <Col md={6} className="animate-zoom-in">
            <div className="text-center">
              <Image
                src={Enterpriseimg2}
                fluid
                rounded
                // className="image-responsive"
                // className="shadow"

                // style={{ width: "500px", height: "300px" }}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  ...zoomIn,
                  transition: "transform 0.2s ease-in-out",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.01)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 shadow bg-light py-5 px-2">
        <Row className=" ">
          <Col>
            <div className="text-center ">
              <h3 className="my-2"> Digital Transformation</h3>
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
            borderRadius: "10px",
            padding: "30px",
          }}
        >
          <h3>Aligning IT with Your Business Vision</h3>

          <p className="mt-3 ">
            Let's collaborate to develop a strategic IT roadmap tailored to your
            organization's unique goals. Our technical experts will help you
            bridge the gap between IT and business objectives, ensuring your
            projects drive meaningful outcomes and propel your business forward.
          </p>
        </div>
      </Container>

      <Container className="my-5">
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
            <h3>Technologies In Fingertip</h3>
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
