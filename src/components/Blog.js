import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
// import Hacker from "../assets/hacker.jpg";
import "../components/Solutions.css";
import ITteam from "../assets/ITteam.jpg";
import FrontPage from "../assets/FrontPage.jpg";
import ServicesFrontimg from '../assets/servicesFrontimg.jpg';

const Blog = () => {
  const fadeIn = {
    animation: "fadeIn 1s ease-in",
  };

  const zoomIn = {
    animation: "zoomIn 1s ease-in",
  };
  return (
    <>
      <Row className="my-4">
        <Col md={6}>
          {/* <h2 className="d-none d-md-block" style={fadeIn}>Transforming Businesses through Innovative</h2>
          <h2 className="d-none d-md-block" style={fadeIn}> Software Solutions</h2> */}
          <h3 className="animate-slide-up">Driftmark Technology Story</h3>
          <p className="">
            In today's fast-paced digital landscape, businesses need innovative
            software solutions to stay ahead of the competition. Driftmark
            Technology, a leading software development company, has been helping
            businesses achieve their goals through cutting-edge technology
            solutions. With a proven track record of delivering successful
            projects, Driftmark Technology is the go-to partner for businesses
            looking to transform their operations.
          </p>
        </Col>
        <Col md={6}>
        <Image src={ServicesFrontimg} fluid rounded
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
        ></Image>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
        <h3 className="d-block d-md-none text-center mt-3">Transforming Businesses through Innovative</h3>
          <h3 className="d-block d-md-none text-center mb-3"> Software Solutions</h3>
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center my-4  bg-light p-4 shadow">
        <Col md={6}>
          <Image
            src={ITteam}
            fluid
            rounded
            className="shadow"
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
        </Col>
        <Col md={6}>
          <h3 className="my-3">Let's Shape the Future Together</h3>
          <p>
            Discover how Driftmark Technology can empower your business to
            achieve new heights. Contact us today to explore our services and
            solutions.
          </p>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center my-5">
        <Col md={6}>
          <h3 className="my-3 text-center">At Driftmark Technology</h3>
          <p>
            We follow a structured SDLC approach to ensure that our projects are
            delivered on time, within budget, and to the required quality
            standards. Our SDLC process includes:
          </p>
          <ol className="text-muted">
            <li>Requirements gathering and analysis</li>
            <li>Design and prototyping</li>
            <li> Development and testing</li>
            <li>Deployment and maintenance</li>
          </ol>
        </Col>
        <Col md={6}>
          <Image
            src={FrontPage}
            fluid
            rounded
            className="shadow"
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
        </Col>
      </Row>
      <Row
        className="align-items-center shadow justify-content-center mx-1 my-5 py-3 layout"
        style={{ borderRadius: "10px" }}
      >
        <Col md={6}>
          <h3 className="text-center my-3">
            Advantages of Partnering with Us
          </h3>
          <p className="text-center ">
            By partnering with Driftmark Technology, businesses can benefit from
          </p>
        </Col>
        <Col md={6}>
          <ul className="text-muted">
            <p>
            <li>
              {" "}
              <span className="fw-bold d-block" style={{textDecoration:'underline'}}>Customized solutions : </span>We deliver
              tailored software solutions that meet the unique needs of our
              clients.
            </li>
            </p>
            <p>
            <li>
              {" "}
              <span className="fw-bold d-block" style={{textDecoration:'underline'}}>Expertise :</span> Our team of
              experienced developers, designers, and project managers ensures
              that our projects are delivered to the highest quality standards.
            </li>
            </p>
            <p>
            <li>
              {" "}
              <span className="fw-bold d-block" style={{textDecoration:'underline'}}>Cost-effectiveness : </span>We offer
              competitive pricing without compromising on quality.
            </li>
            </p>
            <p>
            <li>
              {" "}
              <span className="fw-bold d-block" style={{textDecoration:'underline'}}>Agile methodology : </span>We follow an
              agile approach to ensure that our projects are delivered quickly
              and efficiently.
            </li></p>
          </ul>
        </Col>
      </Row>
      <Row className="my-3 text-center">
        <Col>
          <p>
            Driftmark Technology is a trusted software development company that
            helps businesses achieve their goals through innovative technology
            solutions. With a proven track record of delivering successful
            projects, we are the ideal partner for businesses looking to
            transform their operations. Contact us today to learn more about our
            services and how we can help your business thrive.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Blog;
