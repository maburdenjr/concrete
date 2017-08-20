import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router'

import App from './containers/App';
import Library from './containers/Library';
import Login from './containers/Login';
import Network from './containers/Network';
import Profile from './containers/Profile';

import configureStore from './store/configureStore';


function initView () {
    console.log('Initializing UI View');
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path='/' component={App} />
            <Route path='/library' component={Library} />
            <Route path='/login' component={Login} />
            <Route path='/network' component={Network} />
            <Route path='/profile' component={Profile} />
        </Router>    ,
        document.getElementById('root')
);
}

initView();
