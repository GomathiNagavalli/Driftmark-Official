import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
// import Hacker from "../assets/hacker.jpg";
import "../components/Solutions.css";
import ITteam from '../assets/ITteam.jpg';
import FrontPage from '../assets/FrontPage.jpg';

const Blog = () => {
  return (
    <>
      <Row>
        <Col >
          <h1 >Transforming Businesses through Innovative</h1>
          <h1> Software Solutions</h1>
          <h3>The Driftmark Technology Story</h3>
          <p className="mt-3">
            In today's fast-paced digital landscape, businesses need innovative
            software solutions to stay ahead of the competition. Driftmark
            Technology, a leading software development company, has been helping
            businesses achieve their goals through cutting-edge technology
            solutions. With a proven track record of delivering successful
            projects, Driftmark Technology is the go-to partner for businesses
            looking to transform their operations.
          </p>
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center my-5">
        <Col md={6}><Image src={ITteam} fluid rounded className="shadow"/></Col>
        <Col md={6} className="mt-3">
        <h3>Let's Shape the Future Together</h3>
          <p>
          

Discover how Driftmark Technology can empower your business to achieve new heights. Contact us today to explore our services and solutions.
          </p>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center my-5">
        <Col md={6}>
          <h3>At Driftmark Technology</h3>
          <p>
             We follow a structured SDLC approach to
            ensure that our projects are delivered on time, within budget, and
            to the required quality standards. Our SDLC process includes:
          </p>
          <ol className="text-muted">
            <li>Requirements gathering and analysis</li>
            <li>Design and prototyping</li>
            <li> Development and testing</li>
            <li>Deployment and maintenance</li>
          </ol>
        </Col>
        <Col md={6}><Image src={FrontPage} fluid rounded className="shadow" style={{height:'60%'}} /></Col>
      </Row>
      <Row className="align-items-center justify-content-center my-5 py-3 layout" style={{borderRadius:"10px"}} >
        <Col>
          <h3>Advantages of Partnering with Driftmark Technology</h3>
          <p>
            By partnering with Driftmark Technology, businesses can benefit
            from:
          </p>
        </Col>
        <Col md={6}>
          <ul className="text-muted">
            <li>
              {" "}
              <span className="fw-bold">Customized solutions : </span>We deliver tailored software solutions that
              meet the unique needs of our clients.
            </li>
            <li>
              {" "}
              <span className="fw-bold">Expertise :</span> Our team of experienced developers, designers, and
              project managers ensures that our projects are delivered to the
              highest quality standards.
            </li>
            <li>
              {" "}
              <span className="fw-bold">Cost-effectiveness : </span>We offer competitive pricing without
              compromising on quality.
            </li>
            <li>
              {" "}
              <span className="fw-bold">Agile methodology : </span>We follow an agile approach to ensure that our
              projects are delivered quickly and efficiently.
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col ><p>Driftmark Technology is a trusted software development company that helps businesses achieve their goals through innovative technology solutions. With a proven track record of delivering successful projects, we are the ideal partner for businesses looking to transform their operations. Contact us today to learn more about our services and how we can help your business thrive.</p></Col>
      </Row>
    </>
  );
};

export default Blog;
