import './App.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { configureStore } from './state/store';
import { ThemeProvider } from './views/components/app/ThemeProvider';
import { Loading } from './views/pages';
import { Router } from './views/router';

const { store, persistor } = configureStore();
const App = () => (
    <Provider store={store}>
        <ThemeProvider>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <Router />
            </PersistGate>
        </ThemeProvider>
    </Provider>
);

export default App;
