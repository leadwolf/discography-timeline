import './albumLink.scss';

import Button from '@material-ui/core/Button';
import OpenInNew from '@material-ui/icons/OpenInNew';
import React from 'react';

import { albumType } from '../types';

const AlbumLink = ({
    album: {
        external_urls: { spotify },
    },
}) => {
    if (!spotify) return null;

    return (
        <div className="album-timeline-link">
            <Button variant="outlined" color="primary" size="small" href={spotify} target="_blank">
                See on Spotify
                <OpenInNew />
            </Button>
        </div>
    );
};

AlbumLink.propTypes = {
    album: albumType.isRequired,
};

export { AlbumLink };
