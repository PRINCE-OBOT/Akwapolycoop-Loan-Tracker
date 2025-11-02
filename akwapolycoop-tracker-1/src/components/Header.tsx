import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';
import brandMark from '../assets/svg/brand-mark.svg';
import './Header.css'; // Assuming you will create a Header.css for additional styles

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Akwapolycoop Tracker Logo" className="header__logo-img" />
                <img src={brandMark} alt="Brand Mark" className="header__brand-mark" />
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to="/dashboard" className="header__nav-link">Dashboard</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/transactions" className="header__nav-link">Transactions</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/members" className="header__nav-link">Members</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/loans" className="header__nav-link">Loans</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;