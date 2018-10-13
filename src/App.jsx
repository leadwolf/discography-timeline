import './App.scss';
import React from 'react';

import { ThemeProvider } from './views/components/app/ThemeProvider';
import Navbar from './views/components/navigation/Navbar';

const App = () => (
    <ThemeProvider>
        <Navbar />
    </ThemeProvider>
);

export default App;
