import { types } from '.';
import { authorizeURL } from './spotify';

const initialState = {
    authorizeURL,

    access_token: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state };
        case types.LOGIN_FAILURE:
            return { ...initialState };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
    }
};

export { reducer };
