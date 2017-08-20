import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import uiView from './ui.js';
import activeUser from './user.js';

const rootReducer = combineReducers({
    uiView,
    activeUser,
    routing: routerReducer
});

export default rootReducer;