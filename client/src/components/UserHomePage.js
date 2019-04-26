import React, { Component } from 'react';
import NavbarComponent from './Navbar';
import '../assets/css/UserHomePage.css';

class UserHomePage extends Component {
    render = () => {
        return (
            <div style={{ color: 'white' }}>
                <NavbarComponent />
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
