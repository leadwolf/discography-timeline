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
const searchAll = (init = false, albumTypes) => (dispatch, getState) => {
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
            album_type: albumTypes.join(','),
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
        .then(() => dispatch(searchAll(false, albumTypes)))
        .catch(error => {
            dispatch(actions.searchAllFail(error.toString()));
            return Promise.resolve({ isError: true, error });
        });
};

const sortAlbums = (reverse = true) => (dispatch, getState) => {
    const {
        albums: { items },
    } = getState();

    const sortedItems = items.sort(reverse ? helpers.dateSorter : helpers.reverseDateSorter);

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

const filterUniqueAlbums = () => (dispatch, getState) => {
    const {
        albums: { items },
    } = getState();

    const uniqueItems = helpers.transformAlbums(items);

    dispatch(actions.uniqueAlbums(uniqueItems));
    return Promise.resolve(uniqueItems);
};

export { search, searchAll, sortAlbums, reverse, filterUniqueAlbums };
