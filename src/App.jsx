import './App.scss';
import React from 'react';

import { ThemeProvider } from './components/app/ThemeProvider';
import Navbar from './components/navigation/Navbar';

const App = () => (
    <ThemeProvider>
        <Navbar />
    </ThemeProvider>
);

export default App;
