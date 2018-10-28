import './albumList.scss';
import 'react-vertical-timeline-component/style.min.css';

import CircularProgress from '@material-ui/core/CircularProgress';
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

    return (
        <div className="album-list-container">
            <VerticalTimeline animate={false}>
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
