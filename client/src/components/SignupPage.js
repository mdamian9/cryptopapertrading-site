import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import LogoNavbar from './LogoNavbar';
import SignupForm from './SignupForm';

const SignupPage = () => {
    return (
        <div>
            <LogoNavbar />
            <div className="div-90vh d-flex align-items-center text-white">
                <div className="mx-auto" style={{ width: '30%' }}>
                    <Container style={{ width: '100%' }}>
                        <Row>
                            <Col>
                                <h1 className="text-center" style={{ fontSize: '4vh' }}>Create a new account</h1>
                                <hr />
                                <SignupForm />
                                <hr />
                                <p className="text-center">
                                    Already have an account? Log in <Link to="/login">here</Link>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div >
        </div>
    );
};

export default SignupPage;
