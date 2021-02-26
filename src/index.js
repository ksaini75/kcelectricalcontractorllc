import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import LandingPage from './components/LandingPage/LandingPage';
import ServicePage from './components/ServicePage/ServicePage';
import AboutPage from './components/AboutPage/AboutPage';
import './App.scss';

import reportWebVitals from './reportWebVitals';

const routing= (
<Router>
<NavigationBar/>
        <Switch>
           <Route path='/' exact component={LandingPage}/> 
        </Switch>
</Router>

)


ReactDOM.render(
routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
