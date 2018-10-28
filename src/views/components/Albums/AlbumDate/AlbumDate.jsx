import './albumDate.scss';

import React from 'react';

import { getMomentFromReleaseDate } from '../../../../state/albums/helpers';
import { albumType } from '../types';

const AlbumDate = ({ album: { release_date, release_date_precision } }) => {
    return (
        <div className="album-timeline-date-info">
            {getMomentFromReleaseDate(release_date, release_date_precision).format('LL')}
        </div>
    );
};

AlbumDate.propTypes = {
    album: albumType.isRequired,
};

export { AlbumDate };
