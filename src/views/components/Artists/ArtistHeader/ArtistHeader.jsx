import './artistHeader.scss';

import React from 'react';
import Typography from '@material-ui/core/Typography';

import { artistType } from '../types';

const ArtistHeader = ({ artist: { name, images } }) => {
    const headerStyles = {};

    if (images.length && images[0].url) headerStyles.backgroundImage = `url("${images[0].url}")`;

    return (
        <div className="artist-header-container" style={headerStyles}>
            <Typography variant="h2" className="name">
                {name}
            </Typography>
        </div>
    );
};

ArtistHeader.propTypes = {
    artist: artistType.isRequired,
};

export { ArtistHeader };
