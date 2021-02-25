import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import plugLogo from '../../Images/plug.png';
import brokenCables from '../../Images/broken-cable.png';
import multimeter from '../../Images/multimeter.png';
import { GiLightBulb } from 'react-icons/gi';


const ServicePage = () => {
    return (
        <React.Fragment>
            <div className='services-div'>
                <h1 className='services-header'>Electrical Services</h1>
                <Container>
                    <Row className='services-row'>
                        <Col className="services-column" xs={6} md={4}>
                            <Image className='services-logo img-responsive' src={plugLogo}>
                            </Image>
                            <p> <GiLightBulb /> Switch and outlet installation</p>
                            <p> <GiLightBulb />Electirical and wiring repair</p>
                            <p> <GiLightBulb />Remodeling</p>
                            <span className='li-hide'>
                                <p> <GiLightBulb />Circuit breaker panel or fuse box installation</p>

                                <p> <GiLightBulb />Circuit breaker panel or fuse box repair</p>
                            </span>

                        </Col>
                        <Col className="services-column" xs={6} md={4}>
                            <Image className='services-logo img-responsive' src={brokenCables}></Image>
                            <span className='li-hide'>
                                <p> <GiLightBulb /> Renovations or additions Indoor or outdoor lighting</p>
                            </span>
                            <p><GiLightBulb /> Inspections</p>
                            <p><GiLightBulb /> Wiring Repairs</p>
                            <p><GiLightBulb /> Wiring installation</p>
                        </Col>
                        <Col className="services-column" xs={6} md={4}>
                            <Image className='services-logo img-responsive' src={multimeter}></Image>
                            <p><GiLightBulb /> Fan installation</p>
                            <p><GiLightBulb /> Generator installation</p>
                            <p><GiLightBulb /> Lighting installation</p>
                            <p><GiLightBulb /> Switch and outlet repair</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>

    )
}


export default ServicePage;
