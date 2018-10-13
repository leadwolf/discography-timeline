import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

const ThemeProvider = ({ children }) => (
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export { ThemeProvider };
