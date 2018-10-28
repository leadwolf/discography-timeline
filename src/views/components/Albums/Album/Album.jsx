import './album.scss';

import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { ArtistLink } from '../../Artists/ArtistLink';
import { AlbumLink } from '../AlbumLink';
import { albumType } from '../types';

const Album = ({
    album: { name, album_type, total_tracks, artists },
    showType,
    album,
    match: {
        params: { id: currentArtistId },
    },
}) => {
    return (
        <div className="album-timeline-container">
            <div className="album-timeline-title">{name}</div>

            {artists.map(
                artist =>
                    artist.id !== currentArtistId && <ArtistLink key={artist.id} artist={artist} />
            )}

            <div className="album-timeline-track-count">{total_tracks} tracks</div>

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

const ConnectedALbum = withRouter(Album);

export { ConnectedALbum as Album };
