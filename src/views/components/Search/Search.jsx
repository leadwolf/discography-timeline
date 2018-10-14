import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
    root: {
        margin: 0,
        padding: '20px',
        backgroundColor: '#282828',
    },
});

const BaseSearch = ({ classes, value, handleChange }) => (
    <FormControl fullWidth className={classes.root}>
        <InputBase
            value={value}
            onChange={handleChange}
            placeholder="Search for an artist..."
            autoFocus
        />
    </FormControl>
);

BaseSearch.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
};

BaseSearch.defaultProps = {
    value: '',
    handleChange: () => undefined,
};

const Search = withStyles(styles)(BaseSearch);

export { Search };
