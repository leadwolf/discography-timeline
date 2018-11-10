import './albumInfoDialog.scss';

import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';

import { albumDetailsType } from '../types';

const AlbumInfoDialog = ({
    handleClose,
    open,
    loading,
    data: { name = '', tracks = { items: [] } },
}) => {
    if (loading)
        return (
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>{name}</DialogTitle>
                <CircularProgress size={50} />
                Loading...
            </Dialog>
        );

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{name}</DialogTitle>
            <div>
                {tracks.items.map(track => (
                    <div key={track.id} className="track-item">
                        <div>{track.track_number}</div>
                        <div>{track.name}</div>
                    </div>
                ))}
            </div>
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
