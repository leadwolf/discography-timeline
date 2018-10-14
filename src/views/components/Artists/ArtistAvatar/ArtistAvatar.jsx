import './artistAvatar.scss';

import Typography from '@material-ui/core/Typography';
import React from 'react';
import Avatar from 'react-avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { withStyles } from '@material-ui/core/styles';
import { artistItemPropType } from './types';

const avatarProps = {
    round: true,
    textSizeRatio: 2,
    size: '15vw',
    initials: name => name,
};

const styles = theme => ({
    name: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
});

const ArtistAvatar = ({ classes, artist: { name, images } }) => {
    const avatar = () => {
        if (images.length > 0) return <Avatar {...avatarProps} src={images[0].url} />;

        return <Avatar {...avatarProps} name={name} />;
    };

    return (
        <div className="artist-avatar-container">
            {avatar()}
            <div className="artist-avatar-name-container">
                <Tooltip title={name}>
                    <div className="artist-avatar-name">
                        <Typography className={classes.name}>{name}</Typography>
                    </div>
                </Tooltip>
            </div>
        </div>
    );
};

ArtistAvatar.propTypes = {
    artist: artistItemPropType.isRequired,
};

const StyledAvatar = withStyles(styles)(ArtistAvatar);

export { StyledAvatar as ArtistAvatar };
