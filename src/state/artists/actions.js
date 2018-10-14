import { types } from '.';

const searchFail = error => ({ type: types.ARTISTS_SEARCH, payload: { error } });

const searchSuccess = result => ({ type: types.ARTISTS_SEARCH_SUCCESS, payload: { ...result } });

const setQuery = query => ({ type: types.ARTISTS_SEARCH_SET_QUERY, payload: { query } });

export { searchFail, searchSuccess, setQuery };
