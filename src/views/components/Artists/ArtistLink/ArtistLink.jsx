import './artistLink.scss';

import React from 'react';
import { artistType } from '../types';

const ArtistLink = ({ artist: { name } }) => {
    return <div className="artist-name-link-container">{name}</div>;
};

ArtistLink.propTypes = {
    artist: artistType.isRequired,
};

export { ArtistLink };
