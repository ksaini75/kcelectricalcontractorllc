import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaInstagram } from 'react-icons/fa';
import './Footer.scss';



class Footer extends Component{
    render(){
        return(

<div className="footer_bg pt-5 pb-3  text-center" id="footer">
  <div className="container">
     <div className="row">
        
        <div className=" col-md-2">
        <p> <FaInstagram className="insta-icon" /> <a className="icon-color" href="https://www.linkedin.com/in/erika-moya-82a608165/" target = "_blank" rel = "noopener noreferrer" >
        </a>
                 </p> 
           
        
            
            </div>
            
            <div className='col-md-8'>
      
                 </div>


            <div className="col-md-2  ">
            <p classname='footer-email'>KCelectrialcontractorllc@gmail.com</p></div>

             </div>

        <div className="row">
            <div className="col-md-12 mt-4">
            <span className="text-center">
            <p className="copyright"> ©2021 by 
            <br/>
            <a href="https://github.com/ksaini75">Karishma Saini</a> 
            <br/>

            <a href="https://github.com/MrGDS2">MrGDS2</a>
            
            </p>

            </span>
            </div>
            </div>
            </div>
        </div>
        )
    }
}

export default Footer;
