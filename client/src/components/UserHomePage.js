import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import NavbarComponent from './Navbar';
import TweetsComponent from './TweetsComponent';

class UserHomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cryptoTweets: [],
            bitcoinTweets: [],
            keyphrase: null,
            searchTweets: null
        };
    };

    componentDidMount = () => {
        console.log('home page mounted');
        Promise.all([axios.get('/api/tweets/cryptocurrency'), axios.get('/api/tweets/bitcoin')]).then(values => {
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
        const keyphrase = event.target.searchTweets.value;
        axios.get(`/api/tweets/${keyphrase}`).then(res => {
            this.setState({
                keyphrase: keyphrase,
                searchTweets: res.data
            });
        }).catch(err => {
            console.log(err);
        });
        event.target.reset();
    };

    render = () => {
        console.log(this.state);
        return (
            <div style={{ color: 'white' }} className="full-div">
                <NavbarComponent />
                <br />
                <Container>
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
                    <Row className="text-center mx-auto" style={{ marginBottom: '5px', width: '30%', color: 'black' }}>
                        <Col>
                            <Card style={{ backgroundColor: 'lightgray', paddingTop: '5px' }}>
                                <h4>
                                    <i className="fa fa-twitter" style={{ color: '#1ab2e8' }} /> Twitter News <i className="fa fa-twitter" style={{ color: '#1ab2e8' }} />
                                </h4>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs="5" className="w-outline" style={{ maxHeight: '40vh', overflowY: 'scroll' }}>
                            <TweetsComponent keyphrase='bitcoin' tweets={this.state.bitcoinTweets} />
                        </Col>
                        &ensp;
                        <Col xs='5' className="w-outline" style={{ maxHeight: '40vh', overflowY: 'scroll' }}>
                            <TweetsComponent keyphrase='cryptocurrency' tweets={this.state.cryptoTweets} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs="6" className="w-outline mx-auto" style={{ maxHeight: '40vh', overflowY: 'scroll' }}>
                            <div>
                                <Form inline style={{ padding: '10px' }} onSubmit={this.searchTweets}>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Label for="search-tweets" className="mr-sm-2">Search tweets:</Label>
                                        <Input type="text" name="searchTweets" id="search-tweets" placeholder="Enter keyword(s)" required />
                                    </FormGroup>
                                    <Button>Search</Button>
                                </Form>
                            </div>
                            <hr />
                            <TweetsComponent keyphrase={this.state.keyphrase} tweets={this.state.searchTweets} />
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
        );
    };

};

export default UserHomePage;
