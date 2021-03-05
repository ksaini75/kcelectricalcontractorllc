import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/FooterPage/Footer';
import './App.scss';

import reportWebVitals from './reportWebVitals';
import ContactPage from './components/ContactPage/ContactPage';
import AboutPage from './components/AboutPage/AboutPage'
import ServicePage from './components/ServicePage/ServicePage';

const routing = (
        <Router>
                <NavigationBar />
                <Switch>
                        <Route path='/' exact component={LandingPage} />
                        <Route path='/About' exact component={AboutPage} />
                        <Route path='/Services' exact component={ServicePage} />
                        <Route path='/Contact' exact component={ContactPage} />
                </Switch>
        </Router>

)


ReactDOM.render(
        routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
