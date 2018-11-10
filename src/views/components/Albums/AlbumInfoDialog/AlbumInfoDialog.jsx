import './albumInfoDialog.scss';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';

import { albumDetailsType } from '../types';

const AlbumInfoDialog = ({ handleClose, open, album: { name = '', tracks = { items: [] } } }) => {
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
    album: albumDetailsType,
};

AlbumInfoDialog.defaultProps = {
    open: false,
    album: {
        name: '',
        trackes: { items: [] },
    },
};

export { AlbumInfoDialog };
