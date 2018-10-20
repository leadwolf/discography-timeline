import PropTypes from 'prop-types';

const albumType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    release_date_precision: PropTypes.string.isRequired,
});

export { albumType };
