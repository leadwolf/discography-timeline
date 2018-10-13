import './App.scss';

import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './state/store';
import { ThemeProvider } from './views/components/app/ThemeProvider';
import Navbar from './views/components/navigation/Navbar';
import Login from './views/pages/Login';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <ThemeProvider>
            <Navbar />
            <Login />
        </ThemeProvider>
    </Provider>
);

export default App;
