import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Cloudpage1 from "../assets/Cloudpage1.png";
import SmallCloud1 from '../assets/smallcloud1.png';
import SmallCloud2 from '../assets/smallcloud2.png';
import SmallCloud3 from '../assets/smallcloud3.png';
// import cloud from "../assets/cloud.jpg";
import ITsolution from '../assets/ITsolution.png';
import cloud2 from "../assets/cloud2.png";
import '../components/Solutions.css';

const Cloud = () => {
  return (
    <>
      <Container className="">
      <Row>
        <Col md={6}>
          <div>
            <span style={{color:'skyblue'}}>CLOUD</span>
            <h2 className="mt-2">Security & Accessibility</h2>
            <h2>From Anywhere</h2>
            <p>
              The “office” has become a flexible concept, which means it’s more
              vital than ever for small and midsize businesses to have secure
              access to their data—no matter where their office might be on any
              given day. That’s where we come in.
            </p>
          </div>
        </Col>
        <Col md={6}>
        <div className="text-center">
          <Image src={Cloudpage1} fluid />
          </div>
        </Col>
      </Row>
      </Container>
      <Container>
        <div className="text-center">
        <h3>How It Works—In Plain English</h3>
        <p>Cloud technology is complex, but the concept is simple.</p>
        </div>
         <Row>
            <Col md={4}>
            <div className="text-center">
                <Image src={SmallCloud1} style={{width:'150px', height:'150px'}}></Image>
                </div>
                <h3>We Host Your Data</h3>
                <p>We host your data and applications in secure data centers, with round-the-clock technicians dedicated to safeguarding your information.</p>
            </Col>
            <Col md={4}>
            <div className="text-center">
                <Image src={SmallCloud2} style={{width:'150px', height:'150px'}} ></Image>
                </div>
                <h3>We Deploy Your Data</h3>
                <p>Need access to your information? We’ll deploy your data and applications to your device of choice—no on-site hardware necessary.</p>
            </Col>
            <Col md={4}>
            <div className="text-center">
                <Image src={SmallCloud3} style={{width:'150px', height:'150px'}}></Image>
                </div>
                <h3>We Backup Your Data</h3>
                <p>When we backup your data, our backups have backups. Your information will always be in secure hands.</p>
            </Col>
         </Row>
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
              Our expertise keeps us (and our clients) confident in what we do.
              Our custom IT services are backed by 15 years of experience and a
              dedicated, accessible team that's always just a call away.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container >
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
            For over two decades, we’ve stepped in with managed solutions to provide businesses with a firm IT foundation to stand on. We’ll protect your business and your data.
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
    </>
  );
};

export default Cloud;
