import { spotifyApi } from '../spotify';
import { actions } from '.';

const debounce = require('lodash.debounce');

const search = query => dispatch => {
    spotifyApi.searchArtists(query).then(res => {
        return dispatch(actions.searchSuccess(res));
    });
};

const debouncedSearch = debounce(search);

export { search, debouncedSearch };
