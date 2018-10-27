import './album.scss';

import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import React from 'react';

import { albumType } from '../types';
import { AlbumLink } from '../AlbumLink';

const Album = ({ album: { name, album_type }, showType, album }) => {
    return (
        <div className="album-timeline-container">
            <div className="album-timeline-title">{name}</div>

            <AlbumLink album={album} />

            {showType && (
                <div className="album-timeline-type">
                    <Chip label={album_type} color="primary" />
                </div>
            )}
        </div>
    );
};

Album.propTypes = {
    album: albumType.isRequired,
    showType: PropTypes.bool.isRequired,
};

export { Album };
