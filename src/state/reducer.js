import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
});

export { rootReducer };
