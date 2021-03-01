import React, {Component} from 'react';
import { FaInstagram} from 'react-icons/fa';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (

        <div className = "footer_bg pt-5 pb-3  text-center" id = "footer">
            <div className = "row">
                <div className = " col-md-6  mr-auto">
                    <p> <a className = "insta-icon"
                    href = "https://www.instagram.com/kcelectricalcontractorllc/?igshid=13e62ll0r2ahi"
                    target = "_blank"
                    rel = "noopener noreferrer">
                    <FaInstagram />
                    </a> </p> 
                </div>

        <div className = "col-md-6 ml-auto">
            <p className = 'footer-email'> KCelectrialcontractorllc @gmail.com </p>
        </div>

         </div>
            <div className = "row">
                <div className = "col-md-12">
                    <span className = "text-center">
                    <p className = "copyright"> ©2021 by <br/>
                    <a href = "https://github.com/ksaini75"> Karishma Saini </a><br/>
                    <a href = "https://github.com/MrGDS2"> MrGDS2 </a>
                    </p>
                    </span> 
                </div> 
            </div>
        </div>
        )
    }
}

export default Footer;
