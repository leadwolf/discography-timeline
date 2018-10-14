import './login.scss';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const styles = {
    button: {},
    textBody: {
        textAlign: 'center',
    },
};

function Login({ classes, auth: { authorizeURL } }) {
    return (
        <div className="page-login--container">
            <div className="page-login--content-container">
                <Typography variant="h5">Please login with Spotify</Typography>

                <Typography className={classes.textBody}>
                    This application uses your Spotify account to search artists and albums
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    href={authorizeURL}
                >
                    Login
                </Button>
            </div>
        </div>
    );
}

Login.propTypes = {
    auth: PropTypes.shape({
        authorizeURL: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = {};

const ConnectedLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Login));

export { ConnectedLogin as Login };
