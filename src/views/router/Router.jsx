import React from 'react';
import { Redirect, Route, Router as ReactRouter, Switch } from 'react-router-dom';

import { history } from '../../state/history';
import { Login, LoginResult, Home } from '../pages';

const Router = () => (
    <ReactRouter history={history}>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/login/callback" component={LoginResult} />

            <Route exact path="/" component={Home} />

            <Redirect to="/login" component={Login} />
        </Switch>
    </ReactRouter>
);

export { Router };
