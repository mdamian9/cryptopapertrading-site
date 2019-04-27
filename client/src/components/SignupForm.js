import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class SignupForm extends Component {

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
        document.getElementById("signup-form").reset();
        // Reset state
        this.setState({
            email: '',
            password: ''
        });
    };

    render = () => {
        return (
            <div>
                <form id="signup-form" onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="signup-email">Email:</label>&ensp;
                        <input className="form-control"
                            placeholder="Enter your email"
                            name="email"
                            type="email"
                            id="signup-email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="signup-pwd">Password:</label>&ensp;
                        <input className="form-control"
                            placeholder="Create your password"
                            name="password"
                            type="password"
                            id="signup-pwd"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="btn btn-secondary">
                        Sign Up
                    </button>
                </form>
            </div>
        );
    };
};

export default SignupForm;
