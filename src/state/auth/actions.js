import * as types from './types';

const loginFailure = error => ({ type: types.LOGIN_FAILURE, payload: { error } });

const loginSuccess = result => ({ type: types.LOGIN_SUCCESS, payload: { ...result } });

export { loginFailure, loginSuccess };
