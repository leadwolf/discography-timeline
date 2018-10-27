import './albumDate.scss';

import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';

const AlbumDate = ({ album: { release_date } }) => {
    return <div className="album-timeline-date-info">{moment(release_date).format('LL')}</div>;
};

AlbumDate.propTypes = {
    album: PropTypes.shape({
        release_date: PropTypes.string.isRequired,
    }).isRequired,
};

export { AlbumDate };
