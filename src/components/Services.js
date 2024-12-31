import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Services() {
  return (
    <Container className="py-4">
      {/* <h1>Services</h1> */}
      <Outlet /> {/* Placeholder for nested routes */}
    </Container>
  );
}

export default Services;




