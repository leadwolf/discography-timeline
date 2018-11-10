import './albumInfoDialog.scss';

import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';

import { albumDetailsType } from '../types';

const AlbumInfoDialog = ({ handleClose, open, loading, data }) => {
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
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{name}</DialogTitle>
            <DialogContent>
                {tracks.items.map(track => (
                    <div key={track.id} className="track-item">
                        <div>{track.track_number}</div>
                        <div>{track.name}</div>
                    </div>
                ))}
            </DialogContent>
        </Dialog>
    );
};

AlbumInfoDialog.propTypes = {
    open: PropTypes.bool,
    data: albumDetailsType,
};

AlbumInfoDialog.defaultProps = {
    open: false,
    data: {
        name: '',
        trackes: { items: [] },
    },
};

export { AlbumInfoDialog };
