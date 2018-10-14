import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { helpers } from '../../../../state/auth';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            helpers.isAuth(auth) ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);

PrivateRoute.propTypes = {
    auth: PropTypes.shape({
        access_token: PropTypes.string,
    }).isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);

export { ConnectedPrivateRoute as PrivateRoute };
