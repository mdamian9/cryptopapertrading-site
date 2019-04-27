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
                        <Col xs='7' className="w-outline text-center">
                            Welcome User!
                        </Col>
                        <Col xs={{ size: 4, offset: 1 }}>
                            <Row className="w-outline" >
                                <Col>
                                    Tweets Hashtaged #cryptocurrency
                                </Col>
                            </Row>
                            <Row className="w-outline">
                                <Col>
                                    Tweets Hashtaged #bitcoin
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};

export default UserHomePage;
