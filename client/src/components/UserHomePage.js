import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavbarComponent from './Navbar';
import '../assets/css/UserHomePage.css';

class UserHomePage extends Component {
    render = () => {
        return (
            <div style={{ color: 'white' }} className="full-div">
                <NavbarComponent />
                <Container style={{ marginTop: '10px' }}>
                    <Row>
                        <Col xs='12' className="w-outline text-center">
                            Welcome User!
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={{size: 5, offset: 1}} className="w-outline">
                            Tweets Hashtaged #cryptocurrency
                        </Col>
                        &ensp;
                        <Col xs='5' className="w-outline">
                            Tweets Hashtaged #bitcoin
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};

export default UserHomePage;
