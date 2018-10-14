import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});

const BaseSearch = ({ classes, value, handleChange }) => (
    <FormControl fullWidth className={classes.margin}>
        <Input value={value} onChange={handleChange} />
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
