import { spotifyApi } from '../spotify';
import { actions } from '.';
import { actions as authActions } from '../auth';

const debounce = require('lodash.debounce');

const search = query => (dispatch, getState) => {
    if (!spotifyApi.getAccessToken()) {
        return dispatch(authActions.logout());
    }

    const {
        artists: { query: prevQuery },
    } = getState();

    if (prevQuery !== query) dispatch(actions.setQuery(query));

    spotifyApi
        .searchArtists(query)
        .then(res => {
            const {
                body: { artists },
            } = res;

            return dispatch(actions.searchSuccess(artists));
        })
        .catch(err => {
            return dispatch(actions.searchFail(err.toString()));
        });
};

const loadMore = () => (dispatch, getState) => {
    const {
        artists: { offset, items, total, query },
    } = getState();
    const currentEnd = offset + items.length;
    const nextOffset = currentEnd + 1 < total ? currentEnd + 1 : currentEnd;

    spotifyApi
        .searchArtists(query, { offset: nextOffset })
        .then(res => {
            const {
                body: { artists },
            } = res;

            return dispatch(actions.searchAddSuccess(artists));
        })
        .catch(err => {
            return dispatch(actions.searchFail(err.toString()));
        });
};

const debouncedSearch = debounce(search);

export { search, debouncedSearch, loadMore };
