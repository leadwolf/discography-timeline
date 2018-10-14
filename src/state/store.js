import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducer';
import { persistStore } from 'redux-persist';

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(...middlewares));
    const persistor = persistStore(store);

    return { store, persistor };
};

export { configureStore };
