import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar'
import LandingPage from './components/LandingPage/LandingPage';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './App.scss';

import reportWebVitals from './reportWebVitals';
import AboutPage from './components/AboutPage/AboutPage';


const routing= (
<Route>
<NavigationBar/>
<LandingPage/>
<AboutPage/>
        <Switch>
           <Route path='/' exact component={LandingPage} /> 
        </Switch>
</Route>

)


ReactDOM.render(
routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
