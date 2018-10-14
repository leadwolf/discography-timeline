import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

const ThemeProvider = ({ children }) => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
    </MuiThemeProvider>
);

export { ThemeProvider };
