import { spotifyApi } from '../spotify';
import { actions } from '.';
import { actions as authActions } from '../auth';

const debounce = require('lodash.debounce');

const search = query => dispatch => {
    if (!spotifyApi.getAccessToken()) {
        return dispatch(authActions.logout());
    }

    spotifyApi.searchArtists(query).then(res => {
        return dispatch(actions.searchSuccess(res));
    });
};

const debouncedSearch = debounce(search);

export { search, debouncedSearch };
