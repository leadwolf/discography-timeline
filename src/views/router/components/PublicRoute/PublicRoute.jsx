import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { helpers } from '../../../../state/auth';

const PublicRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => (helpers.notAuth(auth) ? <Component {...props} /> : <Redirect to="/" />)}
    />
);

PublicRoute.propTypes = {
    auth: PropTypes.shape({
        access_token: PropTypes.string,
    }).isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

const ConnectedPublicRoute = connect(mapStateToProps)(PublicRoute);

export { ConnectedPublicRoute as PublicRoute };
