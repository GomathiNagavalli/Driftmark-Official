import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Advantageimg from '../assets/advantage.png';
import Advantage1 from '../assets/advantage1.png';
import Advantage2 from '../assets/advantage2.png';
import Advantage3 from '../assets/advantage3.jpg';
import microsoftimg from '../assets/microsoft.jpg';
import secondaward from '../assets/secondaward.jpg';
import thirdaward from '../assets/thirdaward.png';
import fourthaward from '../assets/fourthaward.jpg';
import '../components/Solutions.css';


const Advantage = () => {
  return (
    <>
    <Container className=''>
        <Row>
            <Col md={6}>
                <div>
                    <span style={{color:'skyblue'}}>OUR ADVANTAGE</span>
                    <h2>Scalable Solutions For Your</h2>
                     <h2>Business</h2>
                     <p>Ever feel like tech and IT issues have a knack for hitting your small business right when you have the least time to deal with them? We get it—and it's the reason why we started our mission to support small and midsize businesses when they need us most. We work hard to keep you moving forward, no matter what IT obstacles try to get in the way.</p>
                </div>
            </Col>
            <Col md={6}>
               <div className='text-center'>
                   <Image src={Advantageimg} style={{width:'300px',height:'300px'}}></Image>
               </div>
            </Col>
        </Row>
    </Container>
    <Container className='my-5'>
        <Row>
            <Col>
            <div className='text-center'>
                <h2>Expertise. Skills. 15 Years Strong.</h2>
                 <p>The cutting edge of technology is our favorite place to be. It’s been our home for over a decade—and the reason we’re able to support our fellow New Hampshire businesses with the technical expertise they need to thrive.</p>
            </div>
            </Col>
        </Row>
    </Container>
    <Container className='my-5' >
        <Row>
            <Col md={4}>
            <div className='text-center'><Image src={Advantage1} style={{width:'100px',height:'100px'}}/></div>
           <h3 className='mt-3'>Security Comes First</h3>
           <p>The best work is done when you’re able to focus on what matters—not on whether or not your network is secure. Our promise: your business will stay up and running regardless of what unexpected challenges pop up today or tomorrow.</p>
            </Col>
            <Col md={4}>
            <div className='text-center'><Image src={Advantage2} style={{width:'100px',height:'100px'}}/></div>
           <h3 className='mt-3'>We Know Cloud Technology</h3>
           <p>Being veterans in cloud technology has its perks. With 15 years of experience in cloud computing on our side, and bragging rights as one of the first organizations in IT to offer cloud support, we know what it takes to ensure your business can access data and computing from anywhere—and to keep that data secure.</p>
            </Col>
            <Col md={4}>
            <div className='text-center'><Image src={Advantage3} style={{width:'100px',height:'100px'}}/></div>
           <h3 className='mt-3'>Your Neighborhood IT Experts</h3>
           <p>We serve New England with pride—because our neighbors deserve the best. Partnering with fellow New Hampshire businesses allows us to accomplish what we do best: making ourselves available whenever you need us.</p>
            </Col>
        </Row>
    </Container>
    <Container className='my-5' style={{backgroundColor:' rgb(182, 230, 230)', borderRadius:'10px'}}>
        <div className='text-center py-5 px-5'><h1 className='my-3'>About Our Expert Team</h1>
        <p className='my-3'>Matching your business with personalized IT solutions and strategies is what we do—and this is who we are. Meet the dedicated team behind the services that keep your business on track.</p></div>
    </Container>
    <Container className='my-5'>
        <div className='text-center my-4'><h1>Awards & Certifications</h1></div>
        <Row>
               <Col xs={6} md={3} className='text-center'><Image src={microsoftimg} style={{width:'100px', height:'100px'}}/> </Col> 
               <Col xs={6} md={3} className='text-center'> <Image src={secondaward}  style={{width:'100px', height:'100px'}}/></Col> 
               <Col xs={6} md={3} className='text-center'> <Image src={thirdaward}  style={{width:'100px', height:'100px'}}/></Col> 
               <Col xs={6} md={3} className='text-center'> <Image src={fourthaward}  style={{width:'130px', height:'100px'}}/> </Col>
        </Row>
    </Container>
    <Container className="contact-container">
        <div>
          <p style={{ color: "white",fontSize:'19px' }}>“Specialists help your business to be better, no</p>
          <p style={{ color: "white",fontSize:'19px' }}>matter the field, and seeking support from a team of</p>
          <p style={{ color: "white",fontSize:'19px' }}>IT experts unlocked our agency’s ability to streamline</p>
          <p style={{ color: "white",fontSize:'19px' }}>our internal and client-facing processes. Kilpatrick</p>
          <p style={{ color: "white",fontSize:'19px' }}>allows us to be a better business.”</p>
          {/* <Button className="mt-3" href="/contact">Contact Us Today</Button> */}
        </div>
      </Container>
    </>
  )
}

export default Advantage