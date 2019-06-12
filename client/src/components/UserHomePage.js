import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import NavbarComponent from './Navbar';

class UserHomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cryptoTweets: [],
            bitcoinTweets: [],
            searchTag: '',
            searchTweets: []
        };
    };

    componentDidMount = () => {
        console.log('home page mounted');
        Promise.all([axios.get('/tweets/cryptocurrency'), axios.get('/tweets/bitcoin')]).then(values => {
            this.setState({
                cryptoTweets: values[0].data,
                bitcoinTweets: values[1].data
            });
        }).catch(err => {
            console.log(err);
        });
    };

    searchTweets = event => {
        event.preventDefault();
        // axios.get(`/tweets/${this.state.searchTag}`).then(res => {
        //     console.log(res.data);
        //     // this.setState({
        //     //     searchTweets: res.data
        //     // });
        // });
        console.log('search tweets');
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
                            <Form inline style={{ padding: '10px' }} onSubmit={this.searchTweets}>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="search-tweets" className="mr-sm-2">Search tweets:</Label>
                                    <Input type="text" name="searchTweets" id="search-tweets" placeholder="Enter keyword(s)" />
                                </FormGroup>
                                <Button>Search</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};

export default UserHomePage;
