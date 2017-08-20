import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunkMiddleware, createLogger()];

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares))
);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;