import moment from 'moment';

import { types } from '.';

const initialState = {
    access_token: '',
    expiration_date: moment(0).toISOString(),
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case types.LOGIN_FAILURE:
            return { ...initialState };
        case types.LOGIN_SUCCESS:
            return { ...state, ...action.payload };
        case types.LOGOUT:
            return { ...initialState };
    }
};

export { reducer, initialState };
