import { spotifyApi } from '../spotify';
import { actions } from '.';

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

const loadMore = (init = false) => (dispatch, getState) => {
    const {
        albums: { total, items },
        artists: {
            selectedArtist: { id: artistId },
        },
    } = getState();

    if (!artistId) {
        const err = { isError: true, error: 'No artist id specified' };
        dispatch(actions.searchMoreFail(err.error.toString()));
        return Promise.resolve(err);
    }

    if (items.length >= total && !init) {
        const err = { isError: true, error: 'No more results' };
        dispatch(actions.searchMoreFail(err.error.toString()));
        return Promise.resolve(err);
    }

    return spotifyApi
        .getArtistAlbums(artistId, { ...albumSearchParams, offset: items.length })
        .then(res => {
            const { body } = res;

            dispatch(actions.searchMoreSuccess(body));
            return body;
        })
        .then(() => dispatch(loadMore()))
        .catch(error => {
            dispatch(actions.searchMoreFail(error.toString()));
            return Promise.resolve({ isError: true, error });
        });
};

export { search, loadMore };
