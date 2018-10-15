import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import { operations } from '../../../state/auth';
import { isAuth } from '../../../state/auth/helpers';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    logout: {
        display: 'flex',
    },
});

const Navbar = ({ history, logout, classes, auth }) => (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Button
                    color="inherit"
                    href="/"
                    onClick={e => {
                        e.preventDefault();
                        history.push('/');
                    }}
                >
                    <Typography variant="h6" color="inherit">
                        Artist discography timeline
                    </Typography>
                </Button>

                {isAuth(auth) && (
                    <React.Fragment>
                        <div className={classes.root} />

                        <Button color="inherit" onClick={() => logout()} className={classes.logout}>
                            Logout
                        </Button>
                    </React.Fragment>
                )}
            </Toolbar>
        </AppBar>
    </div>
);

Navbar.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    logout: PropTypes.func.isRequired,
    classes: PropTypes.object,
    auth: PropTypes.shape({
        access_token: PropTypes.string.isRequired,
        expiration_date: PropTypes.string,
    }).isRequired,
};

const mapStateToProps = state => ({ auth: state.auth });

const mapDispatchToProps = dispatch => ({ logout: () => dispatch(operations.logout()) });

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withStyles(styles)(Navbar))
);
