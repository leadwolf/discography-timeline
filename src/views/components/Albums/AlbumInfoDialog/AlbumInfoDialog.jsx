import './albumInfoDialog.scss';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';

const AlbumInfoDialog = ({ handleClose, open, album }) => {
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Album info</DialogTitle>
            <div>content</div>
        </Dialog>
    );
};

AlbumInfoDialog.propTypes = {
    open: PropTypes.bool,
};

AlbumInfoDialog.defaultProps = {
    open: false,
};

export { AlbumInfoDialog };
