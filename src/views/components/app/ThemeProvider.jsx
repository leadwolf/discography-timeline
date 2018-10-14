import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        main: '#3f51b5',
        type: 'dark',
    },
});

const ThemeProvider = ({ children }) => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
    </MuiThemeProvider>
);

export { ThemeProvider };
