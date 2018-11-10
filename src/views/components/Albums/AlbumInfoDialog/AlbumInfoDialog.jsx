import './albumInfoDialog.scss';

import AppBar from '@material-ui/core/AppBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
    if (loading) {
        return (
            <Dialog onClose={handleClose} open={open}>
                <DialogContent>
                    <CircularProgress size={50} />
                    <DialogContentText>Loading...</DialogContentText>
                </DialogContent>
            </Dialog>
        );
    }

    if (!data) {
        return (
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>No album found</DialogTitle>
            </Dialog>
        );
    }

    const { name = '', tracks = { items: [] } } = data;

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
                    <Typography variant="h6" color="inherit">
                        {name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <DialogContent>
                <Typography variant="h6" className="aid-track-list-title">
                    Track list
                </Typography>

                {tracks.items.map(track => (
                    <Track key={track.id} {...track} hideArtist={currentArtistId} />
                ))}
            </DialogContent>
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
