import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Offcanvas,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import "../components/NavigationBar.css";
import logo from "../assets/Driftmarklogo.jpg";

function NavigationBar() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="navigation-bar border-bottom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            {/* <Image
              src={logo}
              style={{ width: "70px", height: "70px" }}
              className="me-2"
              alt="Driftmark Logo"
            /> */}
            <i
                    className="bi bi-twitter"
                    style={{ color: "#0077b5" }}
                  ></i>
            <span className="text-teal fw-bold m-0" style={{color:'teal'}} >Driftmark Technology</span>
          </Navbar.Brand>
          <Button
            variant="outline-primary"
            className="d-lg-none"
            onClick={handleShow}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
            <Nav className="nav-links">
              {[
                { to: "/", label: "Home" },
                { to: "/innovation", label: "Innovation" },
                { to: "/enterprise", label: "Enterprise" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <Nav.Link
                  key={to}
                  as={Link}
                  to={to}
                  className={`nav-item ${
                    pathname === to ? "active-link" : ""
                  }`}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {[
              { to: "/", label: "Home" },
              { to: "/innovation", label: "Innovation" },
              { to: "/enterprise", label: "Enterprise" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <Nav.Link
                key={to}
                as={Link}
                to={to}
                onClick={handleClose}
                className={`nav-item ${
                  pathname === to ? "active-link" : ""
                }`}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavigationBar;


