import { spotifyApi } from '../spotify';
import { actions, helpers } from '.';

const albumSearchParams = { limit: 50, market: 'US' };

const search = artistId => dispatch => {
    return spotifyApi
        .getArtistAlbums(artistId, { ...albumSearchParams })
        .then(res => {
            const { body } = res;

            dispatch(actions.searchSuccess({ ...body, artistId }));
            return Promise.resolve(body);
        })
        .catch(error => {
            dispatch(actions.searchFail(error.toString()));
            return Promise.resolve({ isError: true, error });
        });
};

/**
 *
 * @param {Boolean} init - If should run the query, even there are no previous items and total
 */
const searchAll = (init = false) => (dispatch, getState) => {
    const {
        albums: { total, items },
        artists: {
            selectedArtist: { id: artistId },
        },
    } = getState();

    if (!artistId) {
        const err = { isError: true, error: 'No artist id specified' };
        dispatch(actions.searchAllFail(err.error.toString()));
        return Promise.resolve(err);
    }

    if (items.length >= total && !init) {
        const err = { isError: true, error: 'No more results' };
        dispatch(actions.searchAllFail(err.error.toString()));
        return Promise.resolve(err);
    }

    return spotifyApi
        .getArtistAlbums(artistId, {
            ...albumSearchParams,
            offset: init ? 0 : items.length,
        })
        .then(res => {
            const { body } = res;

            if (init) {
                dispatch(actions.searchAllSuccessReset(body));
            } else {
                dispatch(actions.searchAllSuccess(body));
            }

            return body;
        })
        .then(() => dispatch(searchAll(false)))
        .catch(error => {
            dispatch(actions.searchAllFail(error.toString()));
            return Promise.resolve({ isError: true, error });
        });
};

const sortAlbums = (reverseOrder = true) => (dispatch, getState) => {
    const {
        albums: { items },
    } = getState();

    const sortedItems = items.sort(reverseOrder ? helpers.dateSorter : helpers.reverseDateSorter);

    dispatch(actions.sortedAlbums(sortedItems));
    return Promise.resolve(sortedItems);
};

const reverse = () => (dispatch, getState) => {
    const {
        albums: { items },
    } = getState();

    const reversedItems = items.reverse();

    dispatch(actions.reversedAlbums(reversedItems));
    return Promise.resolve(reversedItems);
};

const filterUniqueAlbums = (reverseOrder = true) => (dispatch, getState) => {
    const {
        albums: { items },
    } = getState();

    const uniqueItems = helpers.transformAlbums(items);
    const reSortedItems = uniqueItems.sort(
        reverseOrder ? helpers.dateSorter : helpers.reverseDateSorter
    );

    dispatch(actions.uniqueAlbums(reSortedItems));
    return Promise.resolve(reSortedItems);
};

const filterAlbumsByType = albumTypes => (dispatch, getState) => {
    const {
        albums: { transformedItems },
    } = getState();

    const filteredAlbums = transformedItems.filter(item => albumTypes.includes(item.album_group));

    dispatch(actions.setFilteredAlbumsByType(filteredAlbums));
    return Promise.resolve(filteredAlbums);
};

const getAlbumDetails = id => (dispatch, getState) =>
    spotifyApi
        .getAlbum(id, { market: 'US' })
        .then(res => {
            const { body } = res;

            dispatch(actions.searchSpecificAlbumSuccess({ ...body }));
            return Promise.resolve(body);
        })
        .catch(error => {
            dispatch(actions.searchSpecificAlbumFail(error.toString()));
            return Promise.resolve({ isError: true, error });
        });

export {
    search,
    searchAll,
    sortAlbums,
    reverse,
    filterUniqueAlbums,
    filterAlbumsByType,
    getAlbumDetails,
};
