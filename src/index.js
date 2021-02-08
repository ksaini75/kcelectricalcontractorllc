import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar'
import './App.scss';

import reportWebVitals from './reportWebVitals';

const routing= (
<Route>
<NavigationBar/>
        <Switch>
          {/* <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path="/about" exact component={About} /> */}
          </Switch>
</Route>

)


ReactDOM.render(
routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
