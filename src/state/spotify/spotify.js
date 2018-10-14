import SpotifyWebApi from 'spotify-web-api-node';

const queryString = require('query-string');

const devRedirectUri = 'http://localhost:3000/login/callback';
const prodRedirectUri = 'http://timeline.ccaroni.com/login/callback';

const redirectUri = process.env.NODE_ENV === 'development' ? devRedirectUri : prodRedirectUri;
const clientId = 'd77b2c91e2354ad4b65d4b62d7214631';
const state = 'discography-timeline-initial-state';

const spotifyApi = new SpotifyWebApi({
    redirectUri,
    clientId,
});

const params = {
    client_id: clientId,
    response_type: 'token',
    redirect_uri: redirectUri,
    state,
};

const query = queryString.stringify(params);

const authorizeURL = `https://accounts.spotify.com/authorize?${query}`;

export { authorizeURL, spotifyApi };
