import './albumInfoDialog.scss';

import AppBar from '@material-ui/core/AppBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import React from 'react';

import { Track } from '../Track';
import { albumDetailsType } from '../types';

const AlbumInfoDialog = ({ handleClose, open, loading, data, currentArtistId, fullScreen }) => {
    const getContent = () => {
        if (loading) {
            return (
                <Grid
                    container
                    item
                    direction="column"
                    justify="center"
                    alignItems="center"
                    classes={{ container: 'aid-content-loading' }}
                >
                    <CircularProgress size={50} />
                    <DialogContentText classes={{ root: 'aid-content-loading-text' }}>
                        Loading album...
                    </DialogContentText>
                </Grid>
            );
        }

        if (!data) {
            return (
                <DialogContent>
                    <DialogContentText>No album found</DialogContentText>
                </DialogContent>
            );
        }

        const { tracks = { items: [] } } = data;
        return (
            <DialogContent>
                <Typography variant="h6" className="aid-track-list-title">
                    Track list
                </Typography>

                {tracks.items.map(track => (
                    <Track key={track.id} {...track} hideArtist={currentArtistId} />
                ))}
            </DialogContent>
        );
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            classes={{ paper: 'album-info-dialog-root override' }}
            fullScreen={fullScreen}
        >
            <AppBar className="aid-app-bar">
                <Toolbar>
                    <IconButton color="inherit" onClick={handleClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    {data && (
                        <Typography variant="h6" color="inherit">
                            {data.name}
                        </Typography>
                    )}
                </Toolbar>
            </AppBar>
            {getContent()}
        </Dialog>
    );
};

AlbumInfoDialog.propTypes = {
    open: PropTypes.bool,
    data: albumDetailsType,
    currentArtistId: PropTypes.string,
    fullScreen: PropTypes.bool, // from withMobileDialog
};

AlbumInfoDialog.defaultProps = {
    open: false,
    data: {
        name: '',
        tracks: { items: [] },
    },
    currentArtistId: '',
    fullScreen: false,
};

const ResponsiveAlbumInfoDialog = withMobileDialog()(AlbumInfoDialog);

export { ResponsiveAlbumInfoDialog as AlbumInfoDialog };
