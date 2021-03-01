import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {FaPhoneAlt } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContactPage.scss';



const ContactPage = () => {
  return (
        <div>
            <Container className='mt-5'>
                <h1 className="contact-header-one">Get In Touch!</h1>
                <h3 className='contact-header-two'>Contact Us for a Quote</h3>
            </Container>

            <Row className=" mt-5 mb-5">
                <Col md ={6} className=" text-center">
                    <FaPhoneAlt className="contact-icons"/>
                    <h5 className="mt-3"> (347)-997-0315</h5>
                </Col>

                <Col md={6} className=" text-center">
                   <HiOutlineMail className="contact-icons"/>
                   <h5 className="mt-3">KCelectrialcontractorllc@gmail.com</h5>
                </Col>
            </Row>

            <Container className="mb-5">
                <Card className='contact-card mb-3'>
                    <Card.Body> Monday to Friday    {' '}   8AM to 4PM</Card.Body>
                </Card>
            </Container>
            
            <Container className='mt-5'>
                 <h1 className="contact-header-one">Contact Form</h1>
            </Container>

            <Col md={12} className="contact-form mb-10">
                 <Form>
                    <Form.Group controlid="formBasicName">
                        <Form.Label className="d-block text-left">Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        required/> 
                    </Form.Group>
              
                    <Form.Group controlid="formBasicPhone">
                        <Form.Label className="d-block text-left">Phone Number</Form.Label>
                        <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        />
                    </Form.Group>

                    <Form.Group controlid="formBasicEmail">
                        <Form.Label className="d-block text-left">Email</Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                        placeholder="Email"
                        required
                        />
                    </Form.Group>

                    <Form.Group controlid="formBasicServices">
                        <Form.Label className="d-block text-left">Services</Form.Label>
                        <Form.Control 
                        as="select" 
                        defaultValue="Choose a service..."
                        type="services"
                            name="services"
                            className=""
                            placeholder="Please select a service"
                            required>
                            <option>Please select a service</option>
                            <option>Switch and outlet installation</option>
                            <option>Electical and wiring repair</option>
                            <option>Circuit breaker panel or fuse box installation</option>
                            <option>Circuit breaker panel or fuse box repair</option>
                            <option>Fan installation</option>
                            <option>Generator installation</option>
                            <option>Lighting installation</option>
                            <option>Switch and outlet repair</option>
                            <option>Wiring installation</option>
                        </Form.Control>
                    
                    </Form.Group>

                    <Form.Group controlid="formBasicMessage">
                        <Form.Label className="d-block text-left">Message</Form.Label>
                        <Form.Control as="textarea" row={3}
                        type="textarea"
                        name="message"
                        placeholder="Any additional information, please enter here." 
                        required
                        />
                    </Form.Group>
                    
                    <Row className="justify-content-center">
                        <Button type="submit">Submit</Button>
                    </Row>
            </Form>
        </Col>
         
    </div>
   
      )};
 
  
  export default ContactPage;
  