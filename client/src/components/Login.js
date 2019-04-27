import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="login-email" className="mr-sm-2">Email:</Label>
                    <Input type="email" name="email" id="login-email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="login-password" className="mr-sm-2">Password:</Label>
                    <Input type="password" name="password" id="login-password" placeholder="Enter your password" />
                </FormGroup>
                <Button>Log In</Button>
            </Form>
            // <div>
            //     <form id="login-form" onSubmit={this.handleFormSubmit}>
            //         <div className="form-group">
            //             <label htmlFor="login-email">Email:</label>&ensp;
            //             <input className="form-control"
            //                 placeholder="Enter your email"
            //                 name="email"
            //                 type="email"
            //                 id="login-email"
            //                 onChange={this.handleChange}
            //             />
            //         </div>
            //         <div className="form-group">
            //             <label htmlFor="login-pwd">Password:</label>&ensp;
            //             <input className="form-control"
            //                 placeholder="Enter your password"
            //                 name="password"
            //                 type="password"
            //                 id="login-pwd"
            //                 onChange={this.handleChange}
            //             />
            //         </div>
            //         <button className="btn btn-primary">
            //             Log In
            //         </button>
            //     </form>
            // </div>
        );
    };
};

export default Login;
