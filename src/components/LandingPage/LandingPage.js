import React from 'react';
import AboutPage from '../AboutPage/AboutPage';
import ServicePage from '../ServicePage/ServicePage';
import './LandingPage.scss';

const LandingPage = () => {


    return (
        <React.Fragment>

            <div className="main-img mb-5" id="home">
              <div className="container text-center">
                    <p className="company-name text-center">KCElectricalContractorLLC</p>
                    <p className="company-tag">Company is Insured</p>
                    <button className=" company-btn">Request An Estimate</button>
                </div>

            </div>  
            
            <ServicePage/>
            <AboutPage />
            

        </React.Fragment>

    );

}
export default LandingPage;