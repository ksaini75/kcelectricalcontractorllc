import React, {Component} from 'react';
import { FaInstagram} from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (

        <div className = "footer_bg pt-5 pb-3  text-center" id = "footer">
            <Row>
                <Col md={6} className = "mr-auto">
                    <p> 
                    <a className = "insta-icon" href = "https://www.instagram.com/kcelectricalcontractorllc/?igshid=13e62ll0r2ahi" target = "_blank" rel = "noopener noreferrer">
                    <FaInstagram />
                    </a> 
                    </p> 
                </Col>

        <Col  md={6} className = "ml-auto">
            <p className = 'footer-email'> KCelectrialcontractorllc@gmail.com </p>
        </Col>

         </Row>


            <Row>
                <Col md={12}>
                    <span className = "text-center">
                    <p className = "copyright"> ©2021 by <br/>
                    <a href = "https://github.com/ksaini75"> Karishma Saini </a><br/>
                    <a href = "https://github.com/MrGDS2"> MrGDS2 </a>
                    </p>
                    </span> 
                </Col> 
            </Row>
        </div>
        )
    }
}

export default Footer;
