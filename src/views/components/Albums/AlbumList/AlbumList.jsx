import 'react-vertical-timeline-component/style.min.css';

import PropTypes from 'prop-types';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { Album } from '../Album';
import { AlbumDate } from '../AlbumDate';
import { AlbumIcon } from '../AlbumIcon';
import { albumType } from '../types';

const AlbumList = ({ albums }) => {
    return (
        <div className="album-list-container">
            <VerticalTimeline>
                {albums.map(album => (
                    <VerticalTimelineElement
                        key={album.id}
                        icon={<AlbumIcon album={album} />}
                        date={<AlbumDate album={album} />}
                    >
                        <Album album={album} />
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
    albums: PropTypes.arrayOf(albumType).isRequired,
};

export { AlbumList };
