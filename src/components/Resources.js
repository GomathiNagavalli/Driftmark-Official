import React, { useState } from 'react';
import  Blog  from './Blog';
// import { CaseStudies } from './CaseStudies';
import  Downloads  from './Downloads';
import CaseStudies from './CaseStudies';
import { Container } from 'react-bootstrap';

function Resources() {
  const [activeLink, setActiveLink] = useState('blog');

  // Map link names to components
  const components = {
    blog: Blog,
    CaseStudies: CaseStudies,
    downloads: Downloads,
  };

  // Get the current component to render
  const ActiveComponent = components[activeLink];

  return (
    <Container>
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
      <span style={{color:'skyblue'}}>{activeLink.charAt(0).toUpperCase() + activeLink.slice(1)}</span>
      <ActiveComponent />
    </Container>
  );
}

export default Resources;
