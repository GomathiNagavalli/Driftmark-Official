import React from "react";
import { Container, Image, Row,Col } from "react-bootstrap";
import Hacker from "../assets/hacker.jpg";

const Blog = () => {
  return (
    <>
      {/* <Container className=""> */}
        <Row className="d-flex align-items-center justify-content-center ">
          <Col>
            <h1>Vulnerability In This Cisco</h1>
            <h1>Software Could Allow</h1>
            <h1>Hackers Access</h1>
            {/* <p>Hackers Access</p> */}
            <p>February 7, 2022</p>
            <div className="">
              <Image src={Hacker} fluid rounded className="" />
            </div>
            <p className="mt-3">
              Cisco recently discovered a critical security flaw in their Cisco
              Redundancy Configuration Manager (RCM) for Cisco StarOS. The
              vulnerability allowed an attacker to execute code arbitrarily and
              gain root-level access on any device suffering from the
              vulnerability which is being tracked as CVE-2022-20649.
            </p>
            <p>
              The good news is that Cisco responded with blistering speed and
              this issue has already been patched. Based on the best
              intelligence currently available, there were no examples of this
              exploit having been used ‘in the wild’ so the company was able to
              catch and correct it before hackers got wind of it and started
              taking advantage of the flaw.
            </p>
            <p className="display-6 my-3 fw-bold">
              The company explained how the flaw could be used in a recent blog
              post, which read in part as follows:
            </p>
            <p>
              “A vulnerability in Cisco RCM for Cisco StarOS Software could
              allow an unauthenticated, remote attacker to perform remote code
              execution on the application with root-level privileges in the
              context of the configured container.
            </p>
            <p>
              An attacker could exploit this vulnerability by connecting to the
              device and navigating to the service with debug mode enabled. A
              successful exploit could allow the attacker to execute arbitrary
              commands as the root user.”
            </p>
          </Col>
        </Row>
      {/* </Container> */}
    </>
  );
};

export default Blog;
