import React from 'react';
import './Transactions.css'; // Import the CSS file for styling
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import transactionsIcon from '../assets/icons/transactions.svg';

const Transactions = () => {
    return (
        <div className="transactions-container">
            <header className="transactions-header">
                <h1 className="transactions-title">
                    <Icon src={transactionsIcon} alt="Transactions Icon" />
                    Transactions
                </h1>
                <Button className="add-transaction-button">Add Transaction</Button>
            </header>
            <div className="transactions-list">
                {/* Sample transaction card */}
                <Card className="transaction-card">
                    <div className="transaction-details">
                        <p className="transaction-description">Loan Payment</p>
                        <p className="transaction-amount">$500</p>
                    </div>
                    <p className="transaction-date">Date: 2023-10-01</p>
                </Card>
                {/* Repeat Card components for other transactions */}
            </div>
        </div>
    );
};

export default Transactions;