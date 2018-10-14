import { combineReducers } from 'redux';
import { createTransform, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as artistsReducer } from './artists/reducer';
import { helpers } from './auth';
import { initialState, reducer as authReducer } from './auth/reducer';

import { spotifyApi } from './spotify';

const transformAuth = createTransform(
    inboundState => inboundState,

    outboundState => {
        console.log(helpers.isAuth(outboundState));

        spotifyApi.setAccessToken(outboundState.access_token);

        return helpers.notAuth(outboundState) ? initialState : outboundState;
    },
    { whitelist: ['auth'] }
);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
    transforms: [transformAuth],
};

const rootReducer = persistReducer(
    persistConfig,
    combineReducers({
        auth: authReducer,
        artists: artistsReducer,
    })
);

export { rootReducer };
