import { Button } from 'reactstrap';
import React from 'react';
import Electrican from '../../Images/lightbulbs_cut_dark.png';
import './LandingPage.scss';

const LandingPage = () => {


    return (
        <React.Fragment>
          
                <div className="main-page mb-5" id="home">
                <img src={Electrican} alt="landing" className="main-img" />
                
            <div className="centered">
              <p className="company-name"> KCElectricalContractorLLC</p>
            
              <div className="centered-below">
             <p className="company-tag">Company is Insured</p> 
              <div>
                 <span> <button className="centered-btn company-btn">Request An Estimate</button> </span>
              </div>
              </div>
          </div>
           </div>
        </React.Fragment>
    );

}
export default LandingPage;