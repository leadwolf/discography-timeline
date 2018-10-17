import { spotifyApi } from '../spotify';
import { actions } from '.';
import { actions as authActions } from '../auth';

const debounce = require('lodash.debounce');

const search = query => (dispatch, getState) => {
    if (!spotifyApi.getAccessToken()) {
        dispatch(authActions.logout());
        return { isError: 'true', error: new Error('Not logged in') };
    }

    const {
        artists: { query: prevQuery },
    } = getState();

    if (prevQuery !== query) dispatch(actions.setQuery(query));

    return spotifyApi
        .searchArtists(query)
        .then(res => {
            const {
                body: { artists },
            } = res;

            dispatch(actions.searchSuccess(artists));
            return artists;
        })
        .catch(error => {
            dispatch(actions.searchFail(error.toString()));
            return { isError: true, error };
        });
};

const loadMore = () => (dispatch, getState) => {
    const {
        artists: { offset, items, total, query },
    } = getState();
    const currentEnd = offset + items.length;
    const nextOffset = currentEnd + 1 < total ? currentEnd + 1 : currentEnd;

    return spotifyApi
        .searchArtists(query, { offset: nextOffset })
        .then(res => {
            const {
                body: { artists },
            } = res;

            dispatch(actions.searchAddSuccess(artists));
            return artists;
        })
        .catch(error => {
            dispatch(actions.searchFail(error.toString()));
            return { isError: true, error };
        });
};

const getSingleArtist = id => dispatch => {
    return spotifyApi
        .getArtist(id)
        .then(res => {
            dispatch(actions.searchSingleSuccess(res.body));
            return res.body;
        })
        .catch(error => {
            dispatch(actions.searchSingleFail(error.toString()));
            return { isError: true, error };
        });
};

const debouncedSearch = debounce(search);

export { search, debouncedSearch, loadMore, getSingleArtist };
