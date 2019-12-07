import React from 'react';
import './App.css';
import { Header } from './Header';
import { Feed } from './Feed'
import { CssBaseline } from '@material-ui/core';

const App: React.FC = () => {
    return (
        <main>
            <CssBaseline />
            <Header />
            <Feed />
        </main>
    );
}

export default App;
