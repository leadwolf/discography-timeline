import './App.scss';
import React from 'react';

import { ThemeProvider } from './views/components/app/ThemeProvider';
import Navbar from './views/components/navigation/Navbar';
import Login from './views/pages/Login';

const App = () => (
    <ThemeProvider>
        <Navbar />
        <Login />
    </ThemeProvider>
);

export default App;
