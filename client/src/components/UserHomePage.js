import React, { Component } from 'react';
import Navbar from './Navbar';
import '../assets/css/UserHomePage.css';

class UserHomePage extends Component {
    render = () => {
        return (
            <div style={{ color: 'white' }}>
                <Navbar />
                <div className="full-div d-flex align-items-center">
                    <div className="mx-auto">
                        Welcome user!
                    </div>
                </div>
            </div>
        );
    };
};

export default UserHomePage;
