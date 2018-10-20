import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import { ALBUM_GROUP_TYPES } from '../../../../utils/albumUtils';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = ALBUM_GROUP_TYPES;

const AlbumTypeFilter = ({ classes, theme, filter, handleChange, handleRemove }) => (
    <FormControl className={classes.formControl}>
        <InputLabel htmlFor="album_types">Chip</InputLabel>
        <Select
            multiple
            value={filter}
            onChange={handleChange}
            input={<Input name="album_types" id="album_types" />}
            renderValue={selected => (
                <div className={classes.chips}>
                    {selected.map(value => (
                        <Chip
                            key={value}
                            label={value}
                            className={classes.chip}
                            onDelete={filter.length > 1 ? () => handleRemove(value) : undefined}
                        />
                    ))}
                </div>
            )}
            MenuProps={MenuProps}
        >
            {names.map(name => (
                <MenuItem
                    key={name}
                    value={name}
                    style={{
                        fontWeight:
                            filter.indexOf(name) === -1
                                ? theme.typography.fontWeightRegular
                                : theme.typography.fontWeightMedium,
                    }}
                >
                    {name}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

AlbumTypeFilter.propTypes = {
    classes: PropTypes.object.isRequired,
    filter: PropTypes.arrayOf(PropTypes.string),
    handleChange: PropTypes.func,
    handleRemove: PropTypes.func,
};

AlbumTypeFilter.defaultProps = {
    filter: [''],
    handleChange: () => undefined,
    handleRemove: () => undefined,
};

const StyledAlbumTypeFilter = withStyles(styles, { withTheme: true })(AlbumTypeFilter);

export { StyledAlbumTypeFilter as AlbumTypeFilter };
