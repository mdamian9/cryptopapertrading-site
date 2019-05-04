import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import NavbarComponent from './Navbar';

class UserHomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cryptoTweets: [],
            bitcoinTweets: []
        };
    };

    render = () => {
        return (
            <div style={{ color: 'white' }} className="full-div">
                <NavbarComponent />
                <Container style={{ marginTop: '10px' }}>
                    <Row>
                        <Col xs="12" className="w-outline text-center">
                            <br />
                            <Row>
                                <Col>
                                    Welcome User!
                                </Col>
                            </Row>
                            <br />
                            <Row className="justify-content-center">
                                <Col xs="2"><Button color="success" href="/new-entry-trade">New Entry Trade</Button></Col>
                                <Col xs="2"><Button color="danger" href="/new-exit-trade">New Exit Trade</Button></Col>
                                <Col xs="2"><Button color="primary" href="/trade-log">Trade Log</Button></Col>
                            </Row>
                            <br />
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-center text-center">
                        <Col xs="5" className="w-outline">
                            Tweets Hashtaged #cryptocurrency
                        </Col>
                        &ensp;
                        <Col xs='5' className="w-outline">
                            Tweets Hashtaged #bitcoin
                        </Col>
                    </Row>
                    <br />
                    <Row className="text-center">
                        <Col xs="6" className="w-outline mx-auto">
                            Search tweets by hashtag
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};

export default UserHomePage;
