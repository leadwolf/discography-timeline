import { spotifyApi } from '../spotify';
import { actions } from '.';
import { actions as authActions } from '../auth';

const debounce = require('lodash.debounce');

const search = query => dispatch => {
    if (!spotifyApi.getAccessToken()) {
        return dispatch(authActions.logout());
    }

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

const debouncedSearch = debounce(search);

export { search, debouncedSearch };
