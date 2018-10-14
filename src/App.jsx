import './App.scss';

import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './state/store';
import { ThemeProvider } from './views/components/app/ThemeProvider';
import Navbar from './views/components/navigation/Navbar';
import { Router } from './views/router';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <ThemeProvider>
            <Navbar />
            <Router />
        </ThemeProvider>
    </Provider>
);

export default App;
