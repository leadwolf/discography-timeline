import './track.scss';

import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MusicNote from '@material-ui/icons/MusicNote';
import PlayArrow from '@material-ui/icons/PlayArrow';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import { trackPropShape } from '../types';

const Track = ({ track_number, name, explicit, duration_ms, artists, hideArtist }) => {
    return (
        <Grid
            container
            spacing={16}
            classes={{
                container: 'album-track-root',
            }}
        >
            <Grid item>
                <Typography variant="subtitle1">
                    {track_number.toString().padStart(2, '0')}
                </Typography>
            </Grid>
            <Grid item>
                <PlayArrow className="at-play-icon" />
                <MusicNote className="at-music-icon" />
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                        <Typography variant="subtitle1">{name}</Typography>
                        <Grid container tem direction="row">
                            {explicit && (
                                <Typography variant="subtitle1" className="at-explicit">
                                    <Chip label="Explicit" />
                                </Typography>
                            )}
                            {artists.filter(artist => artist.id !== hideArtist).map(artist => (
                                <Typography
                                    key={artist.id}
                                    variant="subtitle1"
                                    className="at-artist"
                                >
                                    {artist.name}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">
                        {moment.duration(duration_ms, 'milliseconds').format()}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

Track.propTypes = { ...trackPropShape, hideArtist: PropTypes.string };

Track.defaultProps = {
    hideArtist: '',
};

export { Track };
