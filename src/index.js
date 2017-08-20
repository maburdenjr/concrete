import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
//import configureStore, {history} from './store/configureStore';
import 'babel-polyfill';

function initView () {
    console.log('Initializing UI View');
    ReactDOM.render(
    <div>Test</div>,
        document.getElementById('root')
);
}

initView();
