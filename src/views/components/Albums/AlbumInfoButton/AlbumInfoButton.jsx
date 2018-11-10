import './albumInfoButton.scss';

import Button from '@material-ui/core/Button';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import PropTypes from 'prop-types';
import React from 'react';

const AlbumInfoButton = ({ onClick }) => (
    <div className="album-info-button">
        <Button variant="outlined" color="primary" size="small" onClick={onClick}>
            Show album info
            <InfoOutlined className="album-info-button-icon" />
        </Button>
    </div>
);

AlbumInfoButton.propTypes = {
    onClick: PropTypes.func,
};

AlbumInfoButton.defaultProps = {
    onClick: () => undefined,
};

export { AlbumInfoButton };
