import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '/Users/karishmas/Documents/Github/KCElectricalContractorLLC/kcelectricalcontractorllc/src/Images/ken-logo.png';




const NavigationBar = () => (
   
        <Navbar expand="lg" bg="dark" className="nav">
         <Image className='ken-logo' src='
https://firebasestorage.googleapis.com/v0/b/kcelectricalcontractorll.appspot.com/o/Photos%2Flogo-clear.png?alt=media&token=ffb29dbe-5bd2-4c9e-acf5-c029e857c456'/>
            <Navbar.Brand className="nav-title" href="/home">KCElectricalcontractorLLC</Navbar.Brand>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggler-icon'/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className ="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Services</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
              
            </Nav>
    </Navbar.Collapse>
        </Navbar>

)


export default NavigationBar;