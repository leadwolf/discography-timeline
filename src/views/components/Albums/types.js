import PropTypes from 'prop-types';

const albumType = PropTypes.shape({
    external_urls: PropTypes.shape({
        spotify: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    release_date_precision: PropTypes.string.isRequired,
    album_group: PropTypes.string.isRequired, // "album" , "single" , "compilation" or "appears_on"
    album_type: PropTypes.string.isRequired, // The type of the album: one of "album" , "single" , or "compilation"
    type: PropTypes.string.isRequired, // is 'album'
});

export { albumType };
