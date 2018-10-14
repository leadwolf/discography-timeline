import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
    input: {
        margin: theme.spacing.unit,
        padding: '20px',
    },
});

const BaseSearch = ({ classes, value, handleChange }) => (
    <FormControl fullWidth className={classes.input}>
        <InputBase value={value} onChange={handleChange} placeholder="Search for an artist" />
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
