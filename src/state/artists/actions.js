import { types } from '.';

const searchFail = error => ({ type: types.ARTISTS_SEARCH_FAIL, payload: { error } });

const searchSuccess = result => ({ type: types.ARTISTS_SEARCH_SUCCESS, payload: { ...result } });

const searchAddSuccess = result => ({ type: types.ARTISTS_SEARCH_ADD, payload: { ...result } });

const setQuery = query => ({ type: types.ARTISTS_SEARCH_SET_QUERY, payload: { query } });

const clearSearch = () => ({ type: types.ARTISTS_SEARCH_CLEAR });

const searchSingleFail = error => ({ type: types.ARTISTS_SEARCH_SINGLE_FAIL, payload: { error } });
const searchSingleSuccess = result => ({
    type: types.ARTISTS_SEARCH_SINGLE_SUCCESS,
    payload: { ...result },
});

export {
    searchFail,
    searchSuccess,
    setQuery,
    searchAddSuccess,
    clearSearch,
    searchSingleFail,
    searchSingleSuccess,
};
