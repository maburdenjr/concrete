import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import uiView from './ui.js';

const rootReducer = combineReducers({
    uiView,
    routing: routerReducer
});

export default rootReducer;