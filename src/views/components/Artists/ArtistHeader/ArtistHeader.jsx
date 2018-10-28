import './artistHeader.scss';

import React from 'react';
import Typography from '@material-ui/core/Typography';

import { artistType } from '../types';

const ArtistHeader = ({ artist: { name } }) => {
    return (
        <div className="artist-header-container">
            <Typography variant="h2">{name}</Typography>
        </div>
    );
};

ArtistHeader.propTypes = {
    artist: artistType.isRequired,
};

export { ArtistHeader };
