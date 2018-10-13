import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const configureStore = () => createStore(rootReducer, applyMiddleware(...middlewares));

export { configureStore };
