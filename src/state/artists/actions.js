import { types } from '.';

const searchFail = error => ({ type: types.ARTISTS_SEARCH, payload: { error } });

const searchSuccess = result => ({ type: types.ARTISTS_SEARCH_SUCCESS, payload: { ...result } });

export { searchFail, searchSuccess };
