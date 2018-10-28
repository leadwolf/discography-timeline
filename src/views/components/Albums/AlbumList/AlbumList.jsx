import './albumList.scss';
import 'react-vertical-timeline-component/style.min.css';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { Album } from '../Album';
import { AlbumDate } from '../AlbumDate';
import { AlbumIcon } from '../AlbumIcon';
import { albumType } from '../types';

const AlbumList = ({ albums: { total, items, transformedItems, initialized }, showType }) => {
    let progress = 0;
    if (!initialized && total > 0) progress = (items.length / total) * 100;

    if (!initialized) {
        return (
            <div className="album-list-loader-container">
                <CircularProgress variant="determinate" value={progress} size={60} />
            </div>
        );
    }

    if (!transformedItems.length) {
        return (
            <div className="album-list-no-results-container">
                <div className="message">No albums found</div>
            </div>
        );
    }

    return (
        <div className="album-list-container">
            <div className="results-info">
                <Typography>{`${items.length} album${
                    items.length > 1 ? 's' : ''
                } found`}</Typography>
                <Typography>{`${transformedItems.length} unique album${
                    transformedItems.length > 1 ? 's' : ''
                } found`}</Typography>
            </div>
            <VerticalTimeline animate={false} className="app override">
                {transformedItems.map(album => (
                    <VerticalTimelineElement
                        key={album.id}
                        icon={<AlbumIcon album={album} />}
                        date={<AlbumDate album={album} />}
                    >
                        <Album album={album} showType={showType} />
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            {/* {albums.map(album => (
                <Album key={album.id} album={album} />
            ))} */}
        </div>
    );
};

AlbumList.propTypes = {
    albums: PropTypes.shape({
        items: PropTypes.arrayOf(albumType).isRequired,
        initialized: PropTypes.bool.isRequired,
    }).isRequired,
    showType: PropTypes.bool.isRequired,
};

export { AlbumList };
