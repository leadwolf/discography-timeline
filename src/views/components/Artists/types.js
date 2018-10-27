import PropTypes from 'prop-types';

const artistType = PropTypes.shape({
    external_urls: PropTypes.shape({
        spotify: PropTypes.string.isRequired,
    }).isRequired,
    href: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
});

export { artistType };
