import { types } from '.';

const searchFail = error => ({ type: types.ARTISTS_SEARCH, payload: { error } });

const searchSuccess = result => ({ type: types.ARTISTS_SEARCH_SUCCESS, payload: { ...result } });

const searchAddSuccess = result => ({ type: types.ARTISTS_SEARCH_ADD, payload: { ...result } });

const setQuery = query => ({ type: types.ARTISTS_SEARCH_SET_QUERY, payload: { query } });

const clearSearch = () => ({ type: types.ARTISTS_SEARCH_CLEAR });

export { searchFail, searchSuccess, setQuery, searchAddSuccess, clearSearch };
