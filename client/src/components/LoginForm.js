import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends Component {
    
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
        console.log(`${this.state.email} ${this.state.password}`)
        document.getElementById("signup-form").reset();
        // Reset state
        this.setState({
            email: '',
            password: ''
        });
    };

    render = () => {
        return (
            <Form id="login-form" onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label for="login-email">Email:</Label>
                    <Input type="email" name="email" id="login-email"
                        placeholder="Enter your email" onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="login-password">Password:</Label>
                    <Input type="password" name="password" id="login-password"
                        placeholder="Enter your password" onChange={this.handleChange}
                    />
                </FormGroup>
                <Button color="primary">Log In</Button>
            </Form>
        );
    };

};

export default LoginForm;
