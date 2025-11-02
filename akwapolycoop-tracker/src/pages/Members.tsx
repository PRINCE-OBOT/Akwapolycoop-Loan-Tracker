import React from 'react';
import './Members.css'; // Assuming you will create a separate CSS file for Members page styles
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Card } from '../components/Card';

const Members = () => {
    return (
        <div className="members-page">
            <Header />
            <div className="members-layout">
                <Sidebar />
                <main className="members-content">
                    <h1 className="members-title">Members</h1>
                    <div className="members-list">
                        {/* Example of a member card */}
                        <Card>
                            <h2 className="member-name">John Doe</h2>
                            <p className="member-info">Member since: January 2021</p>
                        </Card>
                        <Card>
                            <h2 className="member-name">Jane Smith</h2>
                            <p className="member-info">Member since: March 2020</p>
                        </Card>
                        {/* Add more member cards as needed */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Members;