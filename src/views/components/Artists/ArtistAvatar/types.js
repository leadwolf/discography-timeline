import { PropTypes } from 'prop-types';

const artistItemPropType = PropTypes.shape({
    external_urls: PropTypes.shape({
        spotify: PropTypes.string,
    }),
    followers: PropTypes.shape({
        href: PropTypes.string,
        total: PropTypes.number,
    }),
    genres: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
            url: PropTypes.string,
        })
    ),
    name: PropTypes.string,
    popularity: PropTypes.number,
    type: PropTypes.string,
    uri: PropTypes.string,
});

export { artistItemPropType };
