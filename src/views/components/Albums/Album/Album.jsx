import React from 'react';
import { albumType } from '../types';

const Album = ({ album: { release_date, release_date_precision, name } }) => {
    return (
        <div className="album-container">
            <span>{name}</span>
            <span>{release_date}</span>
            <span>{release_date_precision}</span>
        </div>
    );
};

Album.propTypes = {
    album: albumType.isRequired,
};

export { Album };
