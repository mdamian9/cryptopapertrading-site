import React from 'react';
import Login from './Login';
import Signup from './Signup';
import '../assets/css/LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <Login />
            <div className="welcome d-flex align-items-center">
                <div className="mx-auto">
                    <h1 className="text-center" style={{ maxWidth: '75%', margin: '0 auto', fontSize: '2.5vw' }}>
                        Welcome to cryptopapertrading.com, where you can practice trading cryptocurrencies without
                        risking real capital.
                    </h1>
                    <br />
                    <h3 className="text-center" style={{ maxWidth: '75%', margin: '0 auto', fontSize: '1.8vw' }}>
                        Login or create a new account below!
                    </h3>
                    <br />
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
