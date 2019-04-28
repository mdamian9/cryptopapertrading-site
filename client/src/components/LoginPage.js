import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import LoginForm from './LoginForm';
import Logo from './Logo';

const LoginPage = () => {
    return (
        <div>
            <div className="centered-nav text-center">
                <Navbar color="light" light expand="md">
                    <NavbarBrand>
                        <Logo />
                    </NavbarBrand>
                </Navbar>
            </div>
            <div className="div-90vh d-flex align-items-center text-white">
                <div className="mx-auto" style={{ width: '30%' }}>
                    <Container style={{ width: '100%' }}>
                        <Row>
                            <Col>
                                <h1 className="text-center" style={{ fontSize: '4vh' }}>Log in to your account</h1>
                                <hr />
                                <LoginForm />
                                <hr />
                                <p className="text-center">
                                    Don't have an account? Sign up <Link to="/signup">here</Link>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div >
        </div>
    );
};

export default LoginPage;
