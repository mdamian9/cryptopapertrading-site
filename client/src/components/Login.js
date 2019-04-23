import React, { Component } from 'react';

class Login extends Component {

    handleChange = event => {
        // Extract name & value from event target and set to state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // Clear form fields
        document.getElementById("login-form").reset();
        // Reset state
        this.setState({
            email: '',
            password: ''
        });
    };

    render = () => {
        return (
            <div>
                <form id="login-form" onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="login-email">Email:</label>&ensp;
                        <input className="form-control"
                            placeholder="Enter your email"
                            name="email"
                            type="email"
                            id="login-email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-pwd">Password:</label>&ensp;
                        <input className="form-control"
                            placeholder="Enter your password"
                            name="password"
                            type="password"
                            id="login-pwd"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="btn btn-primary">
                        Log In
                    </button>
                </form>
            </div>
        );
    };
};

export default Login;
