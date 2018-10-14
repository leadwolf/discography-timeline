import React from 'react';
import Avatar from 'react-avatar';

import { artistItemPropType } from './types';

const avatarProps = {
    round: true,
    textSizeRatio: 2,
    size: '200px',
    initials: name => name,
};

const ArtistAvatar = ({ artist: { name, images } }) => {
    if (images.length > 0) return <Avatar {...avatarProps} src={images[0].url} />;

    return <Avatar {...avatarProps} name={name} />;
};

ArtistAvatar.propTypes = {
    artist: artistItemPropType.isRequired,
};

export { ArtistAvatar };
