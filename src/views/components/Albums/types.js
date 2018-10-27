import PropTypes from 'prop-types';

const albumType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    release_date_precision: PropTypes.string.isRequired,
    album_type: PropTypes.string.isRequired, // from searching from artist
    type: PropTypes.string.isRequired,
});

export { albumType };
