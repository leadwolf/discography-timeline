import React from 'react';
import Avatar from 'react-avatar';

import { artistItemPropType } from './types';

const ArtistAvatar = ({ artist: { name, images } }) => {
    if (images.length > 0) return <Avatar src={images[0]} />;

    return <Avatar name={name} />;
};

ArtistAvatar.propTypes = {
    artist: artistItemPropType.isRequired,
};

export { ArtistAvatar };
