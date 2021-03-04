import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Images/ken-logo.png';


const NavigationBar = () => (

    <Navbar expand="lg" bg="dark" className="nav">
        <img className='ken-logo' src={logo} />
        <Navbar.Brand className="nav-title" href="/">KCElectricalcontractorLLC</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggler-icon' />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Services">Services</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Contact">Contact</Nav.Link></Nav.Item>

            </Nav>
        </Navbar.Collapse>
    </Navbar>

)


export default NavigationBar;