import { spotifyApi } from '../spotify';
import { actions } from '.';

const search = artistId => dispatch => {
    return spotifyApi
        .getArtistAlbums(artistId, { limit: 50, market: 'US' })
        .then(res => {
            const { body } = res;

            dispatch(actions.searchSuccess(body));
            return body;
        })
        .catch(error => {
            dispatch(actions.searchFail(error.toString()));
            return { isError: true, error };
        });
};

export { search };
