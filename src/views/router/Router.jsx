import React from 'react';
import { Redirect, Route, Router as ReactRouter, Switch } from 'react-router-dom';

import { history } from '../../state/history';
import Login from '../pages/Login';

const Router = () => (
    <ReactRouter history={history}>
        <Switch>
            <Route exact path="/login" component={Login} />

            <Redirect to="/login" component={Login} />
        </Switch>
    </ReactRouter>
);

export { Router };
