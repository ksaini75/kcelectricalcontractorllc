import React from 'react';
import Electrican from '../../Images/lightbulbs_cut.png';

const LandingPage = () => {


    return (
        <React.Fragment>

            <div className="main-page mb-5" id="home">
             <img src={Electrican} height="420" alt="lamding"/>
              <div className="centered company-name">
              kcelectricalcontractorllc
              </div>
            </div>
    
        </React.Fragment>
    );

}
export default LandingPage;