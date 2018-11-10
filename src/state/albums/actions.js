import { types } from '.';

const searchFail = error => ({ type: types.ARTIST_ALBUM_SEARCH_FAIL, payload: { error } });
const searchSuccess = result => ({
    type: types.ARTIST_ALBUM_SEARCH_SUCCESS,
    payload: { ...result },
});

const searchAllFail = error => ({ type: types.ARTIST_ALBUM_SEARCH_ALl_FAIL, payload: { error } });
const searchAllSuccess = result => ({
    type: types.ARTIST_ALBUM_SEARCH_ALL_SUCCESS,
    payload: { ...result },
});
const searchAllSuccessReset = result => ({
    type: types.ARTIST_ALBUM_SEARCH_ALL_SUCCESS_RESET,
    payload: { ...result },
});

const sortedAlbums = items => ({
    type: types.ARTIST_ALBUM_SORT,
    payload: { items },
});

const reversedAlbums = items => ({
    type: types.ARTIST_ALBUM_REVERSE,
    payload: { items },
});

const uniqueAlbums = transformedItems => ({
    type: types.ARTIST_ALBUM_UNIQUE_FILTER,
    payload: { transformedItems },
});

const setInitialized = initialized => ({
    type: types.ARTIST_ALBUM_SET_INITIALIZED,
    payload: { initialized },
});

const setFilteredAlbumsByType = filteredItems => ({
    type: types.ARTIST_ALBUM_SET_FILTERED_BY_TYPE,
    payload: {
        filteredItems,
    },
});

const searchSpecificAlbumSuccess = result => ({
    type: types.ARTIST_ALBUM__SPECIFIC_SEARCH_SUCCESS,
    payload: { ...result },
});

const searchSpecificAlbumFail = error => ({
    type: types.ARTIST_ALBUM__SPECIFIC_SEARCH_FAIL,
    payload: { ...error },
});

export {
    searchFail,
    searchSuccess,
    searchAllFail,
    searchAllSuccess,
    searchAllSuccessReset,
    sortedAlbums,
    reversedAlbums,
    uniqueAlbums,
    setInitialized,
    setFilteredAlbumsByType,
    searchSpecificAlbumSuccess,
    searchSpecificAlbumFail,
};
