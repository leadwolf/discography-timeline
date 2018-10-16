import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';

const theme = createMuiTheme({
    palette: {
        main: '#3f51b5',
        type: 'dark',
    },
    typography: {
        useNextVariants: true,
    },
});

const ThemeProvider = ({ children }) => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
    </MuiThemeProvider>
);

export { ThemeProvider };
