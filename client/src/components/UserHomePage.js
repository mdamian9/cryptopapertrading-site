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

    componentDidMount = () => {
        console.log('home page mounted');
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
                                    <h2 style={{ fontSize: '6vh' }}>
                                        Welcome User!
                                    </h2>
                                </Col>
                            </Row>
                            <br />
                            <Row className="justify-content-center">
                                <Col xs="2"><Button color="success" href="/new-entry-trade">New Entry Trade</Button></Col>
                                <Col xs="2"><Button color="danger" href="/new-exit-trade">New Exit Trade</Button></Col>
                                <Col xs="2"><Button color="primary" href="/entry-trades">View Entry Trades</Button></Col>
                                <Col xs="2"><Button color="secondary" href="/exit-trades">View Exit Trades</Button></Col>
                            </Row>
                            <hr />
                            <Row className="justify-content-center">
                                <Col xs='2'><Button color='light' href='/find-percent-change'>Find % Change</Button></Col>
                                <Col xs='2'><Button color='dark' href='/get-target-price'>Get Target Price</Button></Col>
                                <Col xs='2'><Button color='warning' href='/calculate-roi'>Calculate ROI</Button></Col>
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
