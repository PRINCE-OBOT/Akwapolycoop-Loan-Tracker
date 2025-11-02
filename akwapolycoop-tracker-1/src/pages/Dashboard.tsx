import React from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import '../styles/globals.css';
import '../styles/theme.css';
import '../styles/animations.css';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <Header />
            <div className="dashboard-content">
                <Sidebar />
                <main className="main-content">
                    <h1 className="dashboard-title">Dashboard</h1>
                    <div className="cards-container">
                        <Card title="Total Transactions" icon={<Icon src="/assets/icons/transactions.svg" />} />
                        <Card title="Total Users" icon={<Icon src="/assets/icons/users.svg" />} />
                        <Card title="Total Loans" icon={<Icon src="/assets/icons/loan.svg" />} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;