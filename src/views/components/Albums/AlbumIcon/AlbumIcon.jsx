import './albumIcon.scss';

import React from 'react';
import PropTypes from 'prop-types';

const AlbumIcon = ({ album: { images, name } }) => {
    if (!images || !images.length) return null;

    return <img className="album-timeline-icon" alt={name} src={images[images.length - 1].url} />;
};

AlbumIcon.propTypes = {
    album: PropTypes.shape({
        images: PropTypes.arrayOf(
            PropTypes.shape({
                height: PropTypes.number.isRequired,
                width: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export { AlbumIcon };
