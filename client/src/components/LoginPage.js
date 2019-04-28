import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LoginForm from './LoginForm';
import '../assets/css/LoginPage.css';
import Login from './Login';

const LoginPage = () => {
    return (
        <div className="full-div d-flex align-items-center">
            <div className="mx-auto" style={{ maxWidth: '100%' }}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center" style={{ fontSize: '4vh' }}>Log in to your account</h1>
                            <hr />
                            <LoginForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default LoginPage;
