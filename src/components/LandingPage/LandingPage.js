import React from 'react';
import { useHistory } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage';
import ServicePage from '../ServicePage/ServicePage';
import './LandingPage.scss';

const LandingPage = () => {

    let history = useHistory();

    const onBtnClick = () => {
        history.push('/Contact');
    }

    return (
        <React.Fragment>

            <div className="main-img mb-5" id="home">
                <div className="container text-center">
                    <p className="company-name text-center">KCElectricalContractorLLC</p>
                    <p className="company-tag">Company is Insured</p>
                    <button className="company-btn" onClick={onBtnClick}>Request An Estimate</button>
                </div>

            </div>

            <ServicePage />
            <AboutPage />


        </React.Fragment>

    );

}
export default LandingPage;