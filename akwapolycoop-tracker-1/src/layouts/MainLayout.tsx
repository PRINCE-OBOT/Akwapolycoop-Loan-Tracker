import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './MainLayout.css';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="main-layout">
            <Header />
            <div className="layout-content">
                <Sidebar />
                <main className="content-area">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;