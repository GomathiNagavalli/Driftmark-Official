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
import { Link } from "react-router-dom";
import "../components/NavigationBar.css";
import logo from "../assets/Driftmarklogo.jpg";

function NavigationBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="navigation-bar border-bottom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <Image
              src={logo}
              style={{ width: "70px", height: "70px" }}
              className="me-2"
              alt="Driftmark Logo"
            />
            <h5 className="text-teal fw-bold m-0">Driftmark Technology</h5>
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
              <Nav.Link as={Link} to="/" activeClassName="active-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/innovation" activeClassName="active-link">
              Innovation
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/enterprise"
                activeClassName="active-link"
              >
                Enterprise
              </Nav.Link>
              <Nav.Link as={Link} to="/about" activeClassName="active-link">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/services" activeClassName="active-link">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" activeClassName="active-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/innovation" onClick={handleClose}>
            Innovation
            </Nav.Link>
            <Nav.Link as={Link} to="/enterprise" onClick={handleClose}>
              Enterprise
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleClose}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleClose}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleClose}>
              Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavigationBar;

// import React, { useState } from 'react';
// import { Navbar, Nav, Container, Button, Offcanvas, Image,  } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Solutions from '../components/Solutions.js';
// // import Logo from "../"
// import { Link } from 'react-router-dom';
// import '../components/NavigationBar.css';
// import logo from '../assets/Driftmarklogo.jpg';

// function NavigationBar() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Navbar expand="lg" className="navigation-bar  border-bottom">
//         <Container>
//           <Navbar.Brand as={Link} to="/">
//             <Image src={logo} style={{width:'60px',height:'60px'}} />
//           <span className='h5' style={{color: 'rgba(5, 5, 124, 0.882)'}} >Driftmark Technology</span>
//           {/* <span className='h3 '>Driftmark</span> */}
//           </Navbar.Brand>
//           <Button variant="outline-primary" className="d-lg-none" onClick={handleShow}>
//             <span className="navbar-toggler-icon" ></span>
//           </Button>
//           <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
//             <Nav className="nav-links">
//               <Nav.Link as={Link} to='/' activeClassName='active-link'>Home</Nav.Link>
//               <Nav.Link as={Link} to="/cloud" activeClassName='active-link'>Cloud</Nav.Link>
//               <Nav.Link as={Link} to="/enterprise" activeClassName='active-link'>Enterprise</Nav.Link>
//               <Nav.Link as={Link} to="/about" activeClassName='active-link'>About Us</Nav.Link>
//               <Nav.Link  as={Link} to="/services" activeClassName='active-link'>Services</Nav.Link>
//               <Nav.Link as={Link} to="/contact" activeClassName='active-link'>Contact</Nav.Link>
//               {/* <Nav.Link href="tel:603-262-1405">603-262-1405</Nav.Link> */}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Offcanvas show={show} onHide={handleClose} placement="end">
//         <Offcanvas.Header closeButton>
//           {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link as={Link} to='/' onClick={handleClose}>Home</Nav.Link>
//             <Nav.Link  as={Link}to='/cloud' onClick={handleClose}>Cloud</Nav.Link>
//             <Nav.Link as={Link} to='/enterprise' onClick={handleClose}>Enterprise</Nav.Link>
//             <Nav.Link as={Link} to='/about' onClick={handleClose}>About Us</Nav.Link>
//             <Nav.Link as={Link} to='/services' onClick={handleClose}>Services</Nav.Link>
//             <Nav.Link as={Link} to='/contact'onClick={handleClose}>Contact</Nav.Link>
//             {/* <Nav.Link href="tel:603-262-1405" onClick={handleClose}>603-262-1405</Nav.Link> */}
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//       {/* <Solutions /> */}

//     </>
//   );
// }

// export default NavigationBar;
