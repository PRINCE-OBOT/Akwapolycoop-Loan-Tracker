import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css';
import './styles/theme.css';
import './styles/animations.css';
import MainLayout from './layouts/MainLayout';

const App = () => {
    return (
        <MainLayout>
            {/* Add your main application components here */}
        </MainLayout>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));