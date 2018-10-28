import './album.scss';

import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { ArtistLink } from '../../Artists/ArtistLink';
import { AlbumLink } from '../AlbumLink';
import { albumType } from '../types';

const styles = theme => ({
    expansionPanel: {
        backgroundColor: '#ffffff',
    },
    expandIcon: {
        color: '#000000',
    },
});

const Album = ({
    album: { name, album_type, total_tracks, artists, alternatives = [] },
    showType,
    album,
    mini,
    hideArtistName,
    match: { params: { id: currentArtistId } } = {
        params: {
            id: '',
        },
    },
    classes,
}) => {
    return (
        <div className="album-timeline-container">
            <div className={`title ${mini ? 'mini' : ''}`}>{name}</div>

            {artists.map(
                artist =>
                    artist.id !== currentArtistId &&
                    !hideArtistName && <ArtistLink key={artist.id} artist={artist} />
            )}

            <div className="track-count">{`${total_tracks} track${
                total_tracks > 1 ? 's' : ''
            }`}</div>

            <AlbumLink album={album} />

            {showType && (
                <div className="type">
                    <Chip label={album_type} color="primary" />
                </div>
            )}

            {alternatives.length > 0 && (
                <div className="alternatives-container">
                    <ExpansionPanel classes={{ root: classes.expansionPanel }}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon classes={{ root: classes.expandIcon }} />}
                        >
                            <Typography>
                                {`${alternatives.length} alternative version${
                                    alternatives.length > 1 ? 's' : ''
                                }  (explicit, deluxe...)`}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails classes={{ root: 'content-container' }}>
                            {alternatives.map((alt, index) => (
                                <React.Fragment key={alt.id}>
                                    <Album album={alt} showType={showType} mini hideArtistName />
                                    {index < alternatives.length - 1 && (
                                        <Divider classes={{ root: 'divider' }} />
                                    )}
                                </React.Fragment>
                            ))}
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            )}
        </div>
    );
};

Album.propTypes = {
    album: albumType.isRequired,
    showType: PropTypes.bool.isRequired,
    mini: PropTypes.bool,
    hideArtistName: PropTypes.bool,
};

Album.defaultProps = {
    mini: false,
    hideArtistName: false,
};

const ConnectedALbum = withRouter(withStyles(styles)(Album));

export { ConnectedALbum as Album };
