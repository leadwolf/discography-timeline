import SpotifyWebApi from 'spotify-web-api-node';

const queryString = require('query-string');

const redirectUri = 'http://localhost:3000/login/callback';
const clientId = 'd77b2c91e2354ad4b65d4b62d7214631';
const state = 'discography-timeline-initial-state';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
const spotifyApi = new SpotifyWebApi({
    redirectUri,
    clientId,
});

// Create the authorization URL

const params = {
    client_id: clientId,
    response_type: 'token',
    redirect_uri: redirectUri,
    state,
};

const query = queryString.stringify(params);

const authorizeURL = `https://accounts.spotify.com/authorize?${query}`;

export { authorizeURL, spotifyApi };
