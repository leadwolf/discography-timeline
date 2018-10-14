import React from 'react';
import { Redirect, Route, Router as ReactRouter, Switch } from 'react-router-dom';

import { history } from '../../state/history';
import { Home, Login, LoginResult } from '../pages';
import { PrivateRoute } from './components';

const Router = () => (
    <ReactRouter history={history}>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/login/callback" component={LoginResult} />

            <PrivateRoute exact path="/" component={Home} />

            <Redirect to="/" />
        </Switch>
    </ReactRouter>
);

export { Router };
