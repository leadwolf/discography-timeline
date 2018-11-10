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

const albumDetailsType = PropTypes.shape({
    album_type: PropTypes.string,
    artists: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
        })
    ),
    available_markets: PropTypes.arrayOf(PropTypes.string),
    copyrights: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            type: PropTypes.string,
        })
    ),
    external_ids: PropTypes.object,

    external_urls: PropTypes.shape({
        spotify: PropTypes.string.isRequired,
    }),
    genres: PropTypes.arrayOf(PropTypes.string),
    href: PropTypes.string,
    id: PropTypes.string,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            height: PropTypes.number,
            width: PropTypes.number,
            url: PropTypes.string,
        })
    ),
    label: PropTypes.string,
    name: PropTypes.string,
    popularity: PropTypes.number,
    release_date: PropTypes.string,
    release_date_precision: PropTypes.string,
    tracks: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                artists: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.string,
                        name: PropTypes.string,
                    })
                ),
            })
        ),
        available_markets: PropTypes.arrayOf(PropTypes.string),
        disc_number: PropTypes.number,
        duration_ms: PropTypes.number,
        explicit: PropTypes.bool,
        external_urls: PropTypes.shape({
            spotify: PropTypes.string.isRequired,
        }),
        href: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        preview_url: PropTypes.string,
        track_number: PropTypes.number,
        type: PropTypes.string,
        uri: PropTypes.string,
    }),
    type: PropTypes.string,
    uri: PropTypes.string,
});

export { albumType, albumDetailsType };
