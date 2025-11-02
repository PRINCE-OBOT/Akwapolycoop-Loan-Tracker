import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import loanIcon from '../assets/icons/loan.svg';
import './Loans.css'; // Assuming you will create a separate CSS file for Loans page styles

const Loans: React.FC = () => {
    return (
        <div className="loans-page">
            <header className="loans-header">
                <h1>Loan Applications</h1>
                <Button className="apply-button">Apply for a Loan</Button>
            </header>
            <section className="loans-list">
                <Card className="loan-card">
                    <Icon src={loanIcon} alt="Loan Icon" />
                    <div className="loan-details">
                        <h2>Personal Loan</h2>
                        <p>Amount: $5,000</p>
                        <p>Status: Approved</p>
                    </div>
                </Card>
                <Card className="loan-card">
                    <Icon src={loanIcon} alt="Loan Icon" />
                    <div className="loan-details">
                        <h2>Home Loan</h2>
                        <p>Amount: $150,000</p>
                        <p>Status: Pending</p>
                    </div>
                </Card>
                {/* Add more loan cards as needed */}
            </section>
        </div>
    );
};

export default Loans;