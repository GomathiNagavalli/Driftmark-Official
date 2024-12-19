import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import solutin_img from "../assets/SolutionsImg.png";
import "../components/Solutions.css";
import SolutionsPage from "./SolutionsPage";
// import { Button } from 'bootstrap';
import cloud from "../assets/cloud.jpg";
import cloud2 from "../assets/cloud2.png";
import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";

const Solutions = () => {
  const navigate=useNavigate();
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <span style={{ color: "skyblue" }}>IT SOLUTIONS</span>
            <h1> Small To Midsize </h1>
            <h1> Businesses, Meet Your </h1>
            <h1>New IT Department</h1>
            <p>
              Your focus is on building your business. We’ll make sure your IT
              infrastructure is up to the task. Our experienced team offers
              proven & certified managed services, data backup, and cloud
              computing support to keep your business growing strong.
            </p>
          </Col>
          <Col md={6}>
            <Image src={solutin_img} fluid />
          </Col>
        </Row>
      </Container>
      <SolutionsPage />
      <Container className="contact-container">
        <div>
          <h1 style={{ color: "white" }}>We would love to hear how we</h1>
          <h1 style={{ color: "white" }}> could help your business.</h1>
          <Button className="mt-3" onClick={()=>navigate('/contact')}>Contact Us Today</Button>
        </div>
      </Container>
      <Container className="mt-3">
        <Row>
          <Col md={6}>
            <h3 className="mb-3">No-Surprise Pricing</h3>
            <p>
              In the event that your network is down or a server fails, the last
              thing you’ll need on your plate is an unexpected fee to combat
              those challenges. That’s why we fix our pricing at a single
              monthly rate to cover all the ups and downs. Even when your tech
              isn’t predictable, our pricing always will be.
            </p>
            <Button>Get A Free Consulting</Button>
          </Col>
          <Col md={6}>
            <h3 className="mb-3 ">Our Advantage</h3>
            <p>
              Our expertise keeps us (and our clients) confident in what we do.
              Our custom IT services are backed by 15 years of experience and a
              dedicated, accessible team that's always just a call away.
            </p>
          </Col>
        </Row>
      </Container>
      <Container >
        <Row g={3}>
          <Col className="layout p-4 m-3">
           <div className="text-center">
           <Image
              src={cloud}
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
          <Col  className="layout p-4 m-3">
          <div className="text-center">
          <Image src={cloud2} style={{ width: "200px", height: "200px" }}></Image>
          </div>
            
            <h3 className="my-2">Enterprise-Level Expertise</h3>
            <p>
              We’re IT people for IT departments, meaning we’re always ready to
              step in and assist teams at larger organizations whenever they
              might need a little extra support to keep your business growing strong.
            </p>
            <Button>Reinforce Your IT</Button>
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Solutions;
