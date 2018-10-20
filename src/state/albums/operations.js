import { spotifyApi } from '../spotify';
import { actions } from '.';
import { off } from 'rsvp';

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

const loadMore = () => (dispatch, getState) => {
    const {
        albums: { total, offset, items, artistId },
    } = getState();

    const currentAmount = items.length;

    if (offset + currentAmount >= total) {
        return Promise.resolve({ isError: true, error: 'No more results' });
    }

    const nextOffset = offset + currentAmount;

    return spotifyApi
        .getArtistAlbums(artistId, { ...albumSearchParams, offset: nextOffset })
        .then(res => {
            const { body } = res;

            dispatch(actions.searchMoreSuccess(body));
            return body;
        })
        .then(() => dispatch(loadMore()))
        .catch(error => {
            dispatch(actions.searchMoreFail(error.toString()));
            return { isError: true, error };
        });
};

export { search, loadMore };
