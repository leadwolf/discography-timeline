import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as authReducer } from './auth/reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const rootReducer = persistReducer(
    persistConfig,
    combineReducers({
        auth: authReducer,
    })
);

export { rootReducer };
