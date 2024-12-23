import React, { useState } from 'react';
import  Blog  from './Blog';
// import { CaseStudies } from './CaseStudies';
import  Downloads  from './Downloads';
// import CaseStudies from './CaseStudies';
import Contact from '../components/Contact';
import { Container } from 'react-bootstrap';
import './Solutions.css'


function Services() {
  const [activeLink, setActiveLink] = useState('blog');

  // Map link names to components
  const components = {
    blog: Blog,
    downloads: Downloads,
    ContactNow: Contact,
  };

  // Get the current component to render
  const ActiveComponent = components[activeLink];


  return (
    <Container className='mt-3'>
      {/* Navigation Links */}
      <nav>
        <ul className='list-unstyled d-flex gap-2'>
          {Object.keys(components).map((link) => (
            <li key={link} className=''>
              <button onClick={() => setActiveLink(link)} className='btn btn-primary'>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Dynamic Component Rendering */}
      <span style={{color:'skyBlue'}}>{activeLink.charAt(0).toUpperCase() + activeLink.slice(1)}</span>
      <ActiveComponent />
    </Container>
  );
}

export default Services;
