import React from 'react';
import Login from './Login';
import Signup from './Signup';
import '../assets/css/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="welcome d-flex align-items-center">
            <div style={{ margin: '0 auto' }}>
                <h1 className="text-center" style={{maxWidth: '75%', margin: '0 auto', fontSize: '2.5vw'}}>
                    Welcome to cryptopapertrading.com, where you can practice trading cryptocurrencies without
                    risking real capital.
                </h1>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                    <Login /> &ensp;&ensp;&ensp; <h3><i>or</i></h3> &ensp;&ensp;&ensp; <Signup />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
