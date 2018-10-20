import PropTypes from 'prop-types';
import React from 'react';

import { Album } from '../Album';
import { albumType } from '../types';

const AlbumList = ({ albums }) => {
    return (
        <div className="album-list-container">
            {albums.map(album => (
                <Album key={album.id} album={album} />
            ))}
        </div>
    );
};

AlbumList.propTypes = {
    albums: PropTypes.arrayOf(albumType).isRequired,
};

export { AlbumList };
