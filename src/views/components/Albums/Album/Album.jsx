import './album.scss';

import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import { albumType } from '../types';
import Chip from '@material-ui/core/Chip';

const Album = ({ album: { release_date, name, album_type }, showType }) => {
    return (
        <div className="album-timeline-container">
            <div className="album-timeline-title">{name}</div>
            <div className="album-timeline-date">{moment(release_date).format('LL')}</div>

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
