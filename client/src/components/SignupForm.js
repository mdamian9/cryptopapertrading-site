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
            <Form id="signup-form" onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label for="signup-email">Email:</Label>
                    <Input type="email" name="email" id="signup-email"
                        placeholder="Enter your email" onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="signup-password">Password:</Label>
                    <Input type="password" name="password" id="signup-password"
                        placeholder="Enter your password" onChange={this.handleChange}
                    />
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
        );
    };
};

export default SignupForm;
