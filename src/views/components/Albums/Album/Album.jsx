import './album.scss';

import React from 'react';
import { albumType } from '../types';

import moment from 'moment';

const Album = ({ album: { release_date, name } }) => {
    return (
        <div className="album-timeline-container">
            <div className="album-timeline-title">{name}</div>
            <div className="album-timeline-date">{moment(release_date).format('LL')}</div>
        </div>
    );
};

Album.propTypes = {
    album: albumType.isRequired,
};

export { Album };
