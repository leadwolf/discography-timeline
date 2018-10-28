import './artistAvatar.scss';

import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { artistItemPropType } from './types';
import PersonOutline from '@material-ui/icons/PersonOutline';

const styles = theme => ({
    name: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
});

const ArtistAvatar = ({ classes, artist: { id, name, images }, history }) => {
    const artistLink = `/artist/${id}`;

    const avatar = () => {
        if (images.length > 0)
            return (
                <Link to={artistLink} className="artist-avatar-img-container">
                    <img className="artist-avatar-img" alt={name} src={images[0].url} />
                </Link>
            );

        return (
            <Link to={artistLink} className="artist-avatar-img artist-avatar-text-container">
                <PersonOutline className="artist-avatar-person-icon override" />
            </Link>
        );
    };

    return (
        <div className="artist-avatar-container">
            <div className="artist-avatar-img-container">{avatar()}</div>
            <div className="artist-avatar-name-container">
                <Tooltip title={name}>
                    <Link to={artistLink} className="artist-avatar-name">
                        <Typography className={classes.name}>{name}</Typography>
                    </Link>
                </Tooltip>
            </div>
        </div>
    );
};

ArtistAvatar.propTypes = {
    artist: artistItemPropType.isRequired,
};

const StyledAvatar = withRouter(withStyles(styles)(ArtistAvatar));

export { StyledAvatar as ArtistAvatar };
