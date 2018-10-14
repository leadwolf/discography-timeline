import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import { operations } from '../../../state/auth';

const queryString = require('query-string');

/* eslint camelcase: 0 */

class LoginResult extends Component {
    state = {
        loading: false,
    };

    componentDidMount() {
        const { location, validateLogin } = this.props;

        const {
            access_token = '',
            token_type = '',
            expires_in = '',
            state = '',
        } = queryString.parse(location.hash);
        validateLogin(access_token, token_type, expires_in, state);
    }

    render() {
        return <div>todo</div>;
    }
}

LoginResult.propTypes = {
    location: ReactRouterPropTypes.location.isRequired,
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        validateLogin: (code, state, error) =>
            dispatch(operations.validateLogin(code, state, error)),
    };
};

const ConnectedLoginResult = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(LoginResult)
);

export { ConnectedLoginResult as LoginResult };
