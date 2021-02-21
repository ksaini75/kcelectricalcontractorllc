import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import plugLogo from '../../Images/plug.png';
import brokenCables from '../../Images/broken-cable.png';
import multimeter from '../../Images/multimeter.png';
import './ServicePage.scss';
import {  GiLightBulb   } from 'react-icons/gi';



const ServicePage = () => {
    return(
    <React.Fragment>
        <div className='services-div'>
            <h1 className='services-header'>Electrical Services</h1>
        <Container>
            <Row className='services-row'>
                <Col className="services-column" xs={6} md={4}>
                <Image className='services-logo img-responsive' src={plugLogo}></Image>
                {/* <ul className='press'> */}
               
               <p> <GiLightBulb/> Switch and outlet installation</p>
     
              

               <p> <GiLightBulb/>Electirical and wiring repair</p>
            
               <p> <GiLightBulb/>Remodeling</p>
             
               <span className='li-hide'>
               <p> <GiLightBulb/>Circuit breaker panel or fuse box installation</p>
              
               <p> <GiLightBulb/>Circuit breaker panel or fuse box repair</p>
               </span>
            
           {/* </ul> */}

                </Col>
                <Col className="services-column" xs={6} md={4}>
                <Image className='services-logo img-responsive' src={brokenCables}></Image>
                {/* <ul className='press'> */}
                <span className='li-hide'>
                <p> <GiLightBulb/> Renovations or additions Indoor or outdoor lighting</p>
                </span>
                <p><GiLightBulb/> Inspections</p>
                <p><GiLightBulb/> Wiring Repairs</p>
                <p><GiLightBulb/> Wiring installation</p>
               {/* </ul> */}
                </Col>
                <Col className="services-column" xs={6} md={4}>
                <Image className='services-logo img-responsive' src={multimeter}></Image>
                {/* <ul className='press'> */}
                <p><GiLightBulb/> Fan installation</p>
                <p><GiLightBulb/> Generator installation</p>
                <p><GiLightBulb/> Lighting installation</p>
                <p><GiLightBulb/> Switch and outlet repair</p>
               {/* </ul> */}
                </Col>
            </Row>
            {/* <Row className='list-column'>
            <Col className="services-column" xs={6} md={4}>
            <ul className='press'>
               
                <li className='li-show'>Switch and outlet installation</li>
                <span className='li-hide'>
                <li>Electirical and wiring repair</li>
                <li>Remodeling</li>
                <li>Circuit breaker panel or fuse box installation</li>
                <li>Circuit breaker panel or fuse box repair</li>
                </span>
            </ul>
               
                </Col>
                <Col className="services-column" xs={6} md={4}>
                <ul className='press'>
                <li className='li-show'>Renovations or additions Indoor or outdoor lighting</li>
            
                <li>Inspections</li>
                <li>Wiring Repairs</li>
                <li>Wiring installation</li>
               </ul>
                </Col>
                <Col className="services-column" xs={6} md={4}>
                <ul className='press'>
                <li className='li-show'>Fan installation</li>
                <li>Generator installation</li>
                <li>Lighting installation</li>
                <li>Switch and outlet repair</li>
               </ul>
                </Col>

            </Row> */}
         </Container>


        </div>

    </React.Fragment>
    )
}


export default ServicePage;
