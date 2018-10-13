import './login.scss';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const styles = {
    button: {},
    textBody: {
        textAlign: 'center',
    },
};

function Login({ classes }) {
    return (
        <div className="page-login--container">
            <div className="page-login--content-container">
                <Typography variant="h5">Please login with Spotify</Typography>

                <Typography className={classes.textBody}>
                    This application uses your Spotify account to search artists and albums
                </Typography>

                <Button variant="contained" color="primary" className={classes.button}>
                    Login
                </Button>
            </div>
        </div>
    );
}

export default withStyles(styles)(Login);
