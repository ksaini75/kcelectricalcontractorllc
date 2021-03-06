import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { Form, FormGroup, Label, Input } from 'reactstrap'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';
import swal from 'sweetalert';
import ReCAPTCHA from "react-google-recaptcha";
import './ContactPage.scss';



const ContactPage = () => {

    const [isVerified, setVerification] = useState(false);


    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');


    const isEnabled = email.length > 0 && fullName.length > 0 &&
        phoneNumber.length > 0 && service.length > 0 && message.length > 0 && isVerified;

    const verifyCallback = () => {
        setVerification(true);
    }


    const handleSubmit = () => {

        let templateParams = {
            name: fullName,
            phoneNumber: phoneNumber,
            email: email,
            to_name: 'kcelectricalcontractorllc',
            service: service,
            message: message

        }

        handleVerification(templateParams);

    }


    const handleVerification = (templateParams) => {


        if (isVerified) {
            emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE,
                templateParams,
                process.env.REACT_APP_USER_ID_EMAILJS
            ).then(function (response) {
                console.log("Message sent to kcelectricalcontractorllc");
                swal({
                    title: `Thank You ${fullName}!`,
                    text: `I'll be in touch soon!`,
                    icon: "success",
                    timer: 5000,
                    buttons: { cancel: null }

                });
            }, function (error) {
                swal({
                    title: `Message not sent!`,
                    text: `Please email me: KCelectrialcontractorllc@gmail.com`,
                    icon: "error",
                    timer: 5000,
                    buttons: { cancel: null }

                });
                console.log("NO Message sent to kcelectricalcontractorllc: " + error);
            });
            clearForm();
        }
    }
    const clearForm = () => {
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        setService('');
    }



    return (

        <div>
            <FadeIn transitionDuration="1000">
                <Container className='mt-5'>
                    <h1 className="contact-header-one">Get In Touch!</h1>
                    <h3 className='contact-header-two'>Contact Us for a Quote</h3>
                </Container>
            </FadeIn>
            <FadeIn transitionDuration="2000">
                <Row className="mt-5 mb-5">
                    <Col md={5} className="text-center">
                        <FaPhoneAlt className="contact-icons" />
                        <h5 className="contact-info mt-3"> (347)-997-0315</h5>
                    </Col>

                    <Col md={7} className=" text-center">
                        <HiOutlineMail className="contact-icons" />
                        <h5 className="contact-info mt-3">KCelectrialcontractorllc@gmail.com</h5>
                    </Col>
                </Row>

                <h1 className="contact-header-one mt-5">Open Hours</h1>
                <Col md={12}>
                    <Card className='contact-card '>
                        <Card.Body> Monday to Friday: <br />8AM to 4PM</Card.Body>
                    </Card>
                </Col>



                <Col md={12} className="contact-form mb-10 mt-5">
                    <Form className="justify-content-center">
                        <FormGroup controlid="formBasicName">
                            <Label className="d-block text-left">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup controlid="formBasicPhone">
                            <Label className="d-block text-left">Phone Number</Label>
                            <Input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}

                            />
                        </FormGroup>

                        <FormGroup controlid="formBasicEmail">
                            <Label className="d-block text-left">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}

                            />
                        </FormGroup>

                        <FormGroup controlid="formBasicServices">
                            <Label className="d-block text-left">Services</Label>
                            <Input
                                type="select"
                                name="services"
                                className=""
                                placeholder="Choose a service..."
                                value={service}
                                onChange={e => setService(e.target.value)}
                            >
                                <option></option>
                                <option disabled > -- Select a service -- </option>
                                <option>Switch and outlet installation</option>
                                <option>Electical and wiring repair</option>
                                <option>Circuit breaker panel or fuse box installation</option>
                                <option>Circuit breaker panel or fuse box repair</option>
                                <option>Fan installation</option>
                                <option>Generator installation</option>
                                <option>Lighting installation</option>
                                <option>Switch and outlet repair</option>
                                <option>Wiring installation</option>
                            </Input>


                        </FormGroup>

                        <FormGroup controlid="formBasicMessage">
                            <Label className="d-block text-left">Message</Label>
                            <Input row={3}
                                type="textarea"
                                name="message"
                                placeholder="Any additional information, please enter here."
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                        </FormGroup>
                        <ReCAPTCHA className="mb-4 d-flex justify-content-center g-recaptcha"
                            sitekey={process.env.REACT_APP_SITE_KEY}
                            onChange={verifyCallback}
                        />
                        <Row className="justify-content-center mb-2">

                            <Button type="submit" onClick={handleSubmit} disabled={!isEnabled}>Submit</Button>
                        </Row>

                    </Form>
                </Col>
            </FadeIn>
        </div>

    )
};


export default ContactPage;
