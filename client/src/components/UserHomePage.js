import React, { Component } from 'react';
import '../assets/css/UserHomePage.css';

class UserHomePage extends Component {
    render = () => {
        return (
            <div className="welcome d-flex align-items-center">
                <div className="mx-auto">
                    Welcome user!
                </div>
            </div>
        );
    };
};

export default UserHomePage;
