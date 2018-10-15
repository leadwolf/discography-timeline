import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { withRouter } from 'react-router-dom';

const Navbar = ({ history }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                <Button
                    color="inherit"
                    href="/"
                    onClick={e => {
                        e.preventDefault();
                        history.push('/');
                    }}
                >
                    Artist discography timeline
                </Button>
            </Typography>
        </Toolbar>
    </AppBar>
);

export default withRouter(Navbar);
