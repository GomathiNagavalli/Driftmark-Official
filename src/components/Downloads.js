import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import "../components/Solutions.css";
import Refix from "../assets/refix.jpg";
import Train from "../assets/train.jpg";

const Downloads = () => {
  return (
    <>
      <Row className="">
        <Col md={6} className="mb-3">
          <Image src={Refix} style={{width:'100px', height:'100px'}}/>
          <h3>Refix Systems</h3>
          <p style={{fontSize:'14px'}}>
            Are you tired of dealing with the hassle of taking your laptop to a
            repair shop? Do you need a convenient and reliable solution to get
            your laptop fixed without leaving the comfort of your home? Our
            at-home laptop repair service is here to help!
          </p>
          <Button onClick={() => window.open('https://refixsystems.com/','_blank')}>Download Now</Button>
        </Col>
        <Col md={6} className="my-4">
          <Image src={Train}  style={{width:'100px', height:'100px'}}/>
          <h3>Trains On Wheels</h3>
          <p style={{fontSize:'14px'}}>
            Trains On My Wheels is an Android application owned by Driftmark for
            tracking the live status of trains run by Indian Railways. The
            application was created by Sigmoid Labs. a team of former TiVo
            Corporation developers
          </p>
          <Button onClick={() => window.open('https://play.google.com/store', '_blank')}>
  Download Now
</Button>
        </Col>
      </Row>
    </>
  );
};

export default Downloads;
