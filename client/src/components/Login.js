import React, { Component } from 'react';

class Login extends Component {
    render = () => {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>&ensp;
                        <input className="form-control"
                            placeholder="Enter your email..."
                            name="email"
                            type="email"
                            id="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>&ensp;
                        <input className="form-control"
                            placeholder="Enter your password..."
                            name="password"
                            type="password"
                            id="pwd"
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
