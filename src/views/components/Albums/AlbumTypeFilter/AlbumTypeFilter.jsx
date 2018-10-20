import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

const AlbumTypeFilter = ({ classes, filter, handleChange }) => {
    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="album_types">Album Type</InputLabel>
            <Select
                multiple
                value={filter}
                onChange={handleChange}
                inputProps={{ name: 'album_types', id: 'album_types' }}
            >
                <MenuItem value="album">Album</MenuItem>
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="appears_on">Appears on</MenuItem>
                <MenuItem value="compilation">Compilation</MenuItem>
            </Select>
        </FormControl>
    );
};

AlbumTypeFilter.propTypes = {
    classes: PropTypes.object.isRequired,
    filter: PropTypes.arrayOf(PropTypes.string),
    handleChange: PropTypes.func,
};

AlbumTypeFilter.defaultProps = {
    filter: [''],
    handleChange: () => undefined,
};

const StyledAlbumTypeFilter = withStyles(styles)(AlbumTypeFilter);

export { StyledAlbumTypeFilter as AlbumTypeFilter };
