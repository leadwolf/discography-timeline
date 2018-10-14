import moment from 'moment';

import * as actions from './actions';
import { spotifyApi } from '../spotify';

/* eslint camelcase: 0 */

const ERROR_DEFAULT = 'Unknown error';

const validateLogin = (
    access_token = '',
    token_type = '',
    expires_in = '',
    state = ''
) => dispatch => {
    if (!access_token) {
        dispatch(actions.loginFailure(ERROR_DEFAULT));
        return Promise.resolve({ error: ERROR_DEFAULT });
    }

    spotifyApi.setAccessToken(access_token);

    const expiration_date = moment()
        .add(expires_in, 'seconds')
        .toISOString();

    const result = { access_token, token_type, expires_in, state, expiration_date };

    dispatch(actions.loginSuccess(result));

    return Promise.resolve(result);
};

export { validateLogin };
