import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Enterpriseimg from "../assets/enterprise.png";
import "../components/Solutions.css";
import ITsolution from "../assets/ITsolution.png";
import cloud2 from "../assets/cloud2.png";

const Enterprise = () => {
  return (
    <>
      <Container className="">
        <Row>
          <Col md={6}>
            <span style={{ color: "skyblue" }}>ENTERPRISE SOLUTIONS</span>
            <h2 className="mt-3">Supplemental IT For IT</h2>
            <h2>Experts</h2>
            <p className="mt-3">
              Some organizations have the resources for a fully realized IT
              department, equipped to handle technical support internally.
              Others look to outsourcing to fulfill their IT needs, seeking a
              third party provider to step in and take the lead. But for those
              businesses finding themselves somewhere in the middle: let us take
              some of the weight off your shoulders.
            </p>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <Image
                src={Enterpriseimg}
                fluid
                style={{ width: "400px", height: "300px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <h2>Call In The IT Reinforcements</h2>
              <p>
                We offer enterprise-level expertise for businesses with 100+
                seats and a staff of dedicated IT professionals. Our goal: to
                help shoulder the day-to-day responsibilities weighing down your
                workflow and your business's productivity.
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
          <h2>A Strategic Perspective For Your</h2>
          <h2> Business</h2>
          <p className="mt-3">
            Together, let’s generate a tactical, deliberate plan for your
            organization's approach to IT. We'll step in with technical
            expertise that helps your projects ladder up to your
            expectations—and give your business the IT support it needs to
            thrive.
          </p>
        </div>
      </Container>
      <Container className="contact-container">
              <div>
                <h1 style={{ color: "white" }}>We would love to hear how we</h1>
                <h1 style={{ color: "white" }}> could help your business.</h1>
                <Button className="mt-3" href="/contact">Contact Us Today</Button>
              </div>
            </Container>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <h3 className="my-3 ">Our Advantage</h3>
              <p>
                Our expertise keeps us (and our clients) confident in what we
                do. Our custom IT services are backed by 15 years of experience
                and a dedicated, accessible team that's always just a call away.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row g={3}>
          <Col className="layout p-4 m-3">
            <div className="text-center">
              <Image
                src={ITsolution}
                style={{ width: "200px", height: "200px" }}
              ></Image>
            </div>
            <h3 className="my-2">IT SOLUTIONS</h3>
            <p>
              For over two decades, we’ve stepped in with managed solutions to
              provide businesses with a firm IT foundation to stand on. We’ll
              protect your business and your data.
            </p>
            <Button>How It Works</Button>
          </Col>
          <Col className="layout p-4 m-3">
            <div className="text-center">
              <Image
                src={cloud2}
                style={{ width: "200px", height: "200px" }}
              ></Image>
            </div>
            <h3 className="my-2">Cloud Technology</h3>
            <p>
              As seasoned experts in cloud computing, we’ll help you access your
              data whenever and wherever you need. Having dedicated virtual
              servers in a secure, SSAE 16 certified data center doesn't hurt
              either.
            </p>
            <Button>How It Works</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Enterprise;
