import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas, Image,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Solutions from '../components/Solutions.js';
// import Logo from "../"
import { Link } from 'react-router-dom';
import '../components/NavigationBar.css';
import logo from '../assets/Driftmarklogo.jpg';

function NavigationBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="navigation-bar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} style={{width:'130px',height:'130px'}} />
          <span className='h3' style={{color: 'rgba(5, 5, 124, 0.882)'}} >Driftmark Technology</span>
          {/* <span className='h3 '>Driftmark</span> */}
          </Navbar.Brand>
          <Button variant="outline-primary" className="d-lg-none" onClick={handleShow}>
            <span className="navbar-toggler-icon" ></span>
          </Button>
          <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
            <Nav className="nav-links">
              <Nav.Link as={Link} to='/' activeClassName='active-link'>Solutions</Nav.Link>
              <Nav.Link as={Link} to="/cloud" activeClassName='active-link'>Cloud</Nav.Link>
              <Nav.Link as={Link} to="/enterprise" activeClassName='active-link'>Enterprise</Nav.Link>
              <Nav.Link as={Link} to="/advantage" activeClassName='active-link'>Our Advantage</Nav.Link>
              <Nav.Link  as={Link} to="/resources" activeClassName='active-link'>Resources</Nav.Link>
              <Nav.Link as={Link} to="/contact" activeClassName='active-link'>Contact</Nav.Link>
              {/* <Nav.Link href="tel:603-262-1405">603-262-1405</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to='/' onClick={handleClose}>Solutions</Nav.Link>
            <Nav.Link  as={Link}to='/cloud' onClick={handleClose}>Cloud</Nav.Link>
            <Nav.Link as={Link} to='/enterprise' onClick={handleClose}>Enterprise</Nav.Link>
            <Nav.Link as={Link} to='/advantage' onClick={handleClose}>Our Advantage</Nav.Link>
            <Nav.Link as={Link} to='/resources' onClick={handleClose}>Resources</Nav.Link>
            <Nav.Link as={Link} to='/contact'onClick={handleClose}>Contact</Nav.Link>
            {/* <Nav.Link href="tel:603-262-1405" onClick={handleClose}>603-262-1405</Nav.Link> */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      {/* <Solutions /> */}
      
    </>
  );
}

export default NavigationBar;


