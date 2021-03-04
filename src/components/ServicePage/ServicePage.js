import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Image } from 'react-bootstrap';
import plugLogo from '../../Images/plug.png';
import brokenCables from '../../Images/broken-cable.png';
import multimeter from '../../Images/multimeter.png';
import { GiLightBulb } from 'react-icons/gi';
import './ServicePage.scss';




const ServicePage = () => {
    return (
        <React.Fragment>
            <Container className='services-div'>
                <h1 className='services-header text-center'>Electrical Services</h1>
                <Container>
                    <Row className='mb-5'>

                        <Col md={5} id="kc-icons">
                            <Image className='services-logo icons' src={plugLogo} />

                        </Col>
                        <Col md={5} id="kc-icons">
                            <Image className='services-logo icons' src={brokenCables} />
                        </Col>
                        <Col md={2} id="kc-icons">
                            <Image className='services-logo icons' src={multimeter} />
                        </Col>
                    </Row>

                    <Row className='mb-5'>

                        <Col className="service-text"  md={5} id="kc-text">
                            <p> <GiLightBulb /> Switch and outlet installation</p>
                            <p> <GiLightBulb />Electirical and wiring repair</p>
                            <p> <GiLightBulb />Remodeling</p>
                            <p> <GiLightBulb />Circuit breaker panel or fuse box installation/repair</p>

                        </Col>
                        <Col className="service-text" md={5} id="kc-text">

                            <p> <GiLightBulb /> Renovations or additions Indoor or outdoor lighting</p>
                            <p><GiLightBulb /> Inspections</p>
                            <p><GiLightBulb /> Wiring installation/Wiring Repairs</p>
                        </Col>
                        <Col className="service-text" md={2} id="kc-text">
                            <p><GiLightBulb /> Fan installation</p>
                            <p><GiLightBulb /> Lighting installation</p>
                            <p><GiLightBulb /> Switch and outlet repair</p>
                            <p><GiLightBulb /> Generator installation</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </React.Fragment>

    )
}


export default ServicePage;
