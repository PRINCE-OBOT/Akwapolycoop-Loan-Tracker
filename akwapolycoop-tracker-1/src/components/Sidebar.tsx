import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import './Sidebar.css'; // Assuming you will create a separate CSS file for Sidebar styles

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src="/assets/svg/logo.svg" alt="Akwapolycoop Tracker Logo" />
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <Link to="/dashboard" className="sidebar-link">
                            <Icon name="dashboard" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/transactions" className="sidebar-link">
                            <Icon name="transactions" />
                            Transactions
                        </Link>
                    </li>
                    <li>
                        <Link to="/members" className="sidebar-link">
                            <Icon name="users" />
                            Members
                        </Link>
                    </li>
                    <li>
                        <Link to="/loans" className="sidebar-link">
                            <Icon name="loan" />
                            Loans
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;