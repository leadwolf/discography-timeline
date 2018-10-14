import React from 'react';
import { Redirect, Router as ReactRouter, Switch } from 'react-router-dom';

import { history } from '../../state/history';
import { Home, Login, LoginResult } from '../pages';
import { PrivateRoute, PublicRoute } from './components';

const Router = () => (
    <ReactRouter history={history}>
        <Switch>
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/login/callback" component={LoginResult} />

            <PrivateRoute exact path="/" component={Home} />

            <Redirect to="/" />
        </Switch>
    </ReactRouter>
);

export { Router };
