import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "../components/Solutions.css";
import { useNavigate } from "react-router-dom";
import cloudnew from "../assets/cloudnew.jpg";

const Innovation = () => {
   const navigate = useNavigate();
  
    const handleLinkClick = (path) => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
    };
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <div>
              <h1>Our Mission</h1>

              <p>
                Driftmark Technology is a cutting-edge software development
                company that specializes in creating innovative solutions for
                businesses. Our team of expert developers, designers, and
                project managers work collaboratively to deliver high-quality
                products that meet the evolving needs of our clients.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <Image src={cloudnew} fluid rounded style={{ height: "70%" }} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="background-image mb-3 justify-content-center align-items-center">
          <Col lg={10}>
            {" "}
            <div className="text-center">
              <h1 className="" style={{ color: "white" }}>
                Why Choose Driftmark Technology?
              </h1>
            </div>
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={4}>
            <h3>Mobile Applications</h3>
            <p>
              We provide Custom Software Development. We create tailored
              software solutions that meet the unique needs of our clients.  We design and develop mobile apps that are
              intuitive, engaging, and scalable.
            </p>
          </Col>
          <Col md={4}>
            <h3>Web Development</h3>
            <p>
              We build fast, secure, and scalable websites that drive business
              growth. IT Consulting: We provide expert advice and guidance to
              help businesses navigate the complexities of technology.
            </p>
          </Col>
          <Col md={4}>
            <h3>Revolution</h3>
            <p>
              At Driftmark Technology, our mission is to empower businesses to
              succeed in the digital age. We strive to deliver exceptional
              software solutions that drive growth, improve efficiency, and
              enhance customer experiences.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="contact-container animated-border p-3">
        <div>
          <h2 style={{ color: "teal" }}>We always ready to</h2>
          <h2 style={{ color: "teal" }}>help your business.</h2>
          <Button className="mt-3 orange-button" onClick={()=>handleLinkClick("/contact")}>
            Contact Us Today
          </Button>
        </div>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <h3 className="my-3 ">The Right Team, Behind You</h3>
              <p>
                Our advantage lies in our experienced team, dedicated to
                providing custom IT solutions and exceptional support to help
                our clients achieve their goals.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-3">
        <Row>
          <Col>
            <div className="text-center">
              <h1>
                Driftmark Brings Your Vision to Life!
              </h1>
              <p>
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

export default Innovation;
