import React from 'react';
import plugLogo from '../../Images/plug.png';
import brokenCables from '../../Images/broken-cable.png';
import multimeter from '../../Images/multimeter.png';
import { GiLightBulb } from 'react-icons/gi';
import './ServicePage.scss';


const ServicePage = () => {
    return (
        <React.Fragment>
            <div className='services-div container mt-5'>
                <h1 className='services-header text-center'>Electrical Services</h1>
                <div className="container">
                    <div className='row mb-5'>

                        <div className="col-md-5" id="kc-icons">
                            <img className='services-logo icons' src={plugLogo} />

                        </div>
                        <div className="col-md-5" id="kc-icons">
                            <img className='services-logo icons' src={brokenCables} />
                        </div>
                        <div className="col-md-2" id="kc-icons">
                            <img className='services-logo icons' src={multimeter} />
                        </div>
                    </div>

                    <div className='row mb-5 ' >

                        <div className="col-md-5 service-text" id="kc-text">
                            <p> <GiLightBulb /> Switch and outlet installation</p>
                            <p> <GiLightBulb />Electirical and wiring repair</p>
                            <p> <GiLightBulb />Remodeling</p>
                            <p> <GiLightBulb />Circuit breaker panel or fuse box installation/repair</p>

                        </div>
                        <div className="col-md-5 service-text" id="kc-text">

                            <p> <GiLightBulb /> Renovations or additions Indoor or outdoor lighting</p>
                            <p><GiLightBulb /> Inspections</p>
                            <p><GiLightBulb /> Wiring installation/Wiring Repairs</p>
                        </div>
                        <div className="col-md-2 service-text" id="kc-text">
                            <p><GiLightBulb /> Fan installation</p>
                            <p><GiLightBulb /> Lighting installation</p>
                            <p><GiLightBulb /> Switch and outlet repair</p>
                            <p><GiLightBulb /> Generator installation</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}


export default ServicePage;
