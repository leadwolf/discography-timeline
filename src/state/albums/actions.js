import { types } from '.';

const searchFail = error => ({ type: types.ARTIST_ALBUM_SEARCH_FAIL, payload: { error } });
const searchSuccess = result => ({
    type: types.ARTIST_ALBUM_SEARCH_SUCCESS,
    payload: { ...result },
});

const searchMoreFail = error => ({ type: types.ARTIST_ALBUM_SEARCH_MORE_FAIL, payload: { error } });
const searchMoreSuccess = result => ({
    type: types.ARTIST_ALBUM_SEARCH_MORE_SUCCESS,
    payload: { ...result },
});

export { searchFail, searchSuccess, searchMoreFail, searchMoreSuccess };
