import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import NavbarComponent from './Navbar';

class FindPercentChangePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tradingPair: '',
            entryPrice: '0.0',
            exitPrice: '0.0',
            percentChange: '0.0'
        };
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const entryPrice = parseFloat(event.target.entryPrice.value);
        const exitPrice = parseFloat(event.target.exitPrice.value);
        const percentChange = ((exitPrice - entryPrice) / entryPrice) * 100;
        this.setState({
            tradingPair: event.target.tradingPair.value,
            entryPrice: event.target.entryPrice.value,
            exitPrice: event.target.exitPrice.value,
            percentChange: percentChange.toFixed(2)
        });
        event.target.reset();
    };

    render = () => {
        return (
            <div>
                <NavbarComponent />
                <br />
                <Container className="text-white" style={{ maxWidth: '60%' }}>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleFormSubmit} className="mx-auto w-outline" style={{ padding: '15px' }}>
                                <FormGroup>
                                    <Label for="trading-pair">Trading Pair:</Label>
                                    <Input type="select" name="tradingPair" id="trading-pair"
                                        defaultValue="-- select trading pair --">
                                        <option disabled>-- select trading pair --</option>
                                        <option>USD</option>
                                        <option>USDT</option>
                                        <option>BTC</option>
                                        <option>ETH</option>
                                        <option>BNB</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="entry-price">Entry price:</Label>
                                    <Input type="text" name="entryPrice" id="entry-price" placeholder="Enter entry price" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exit-price">Exit price:</Label>
                                    <Input type="text" name="exitPrice" id="exit-price" placeholder="Enter exit price" />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <br />
                <Container className="text-center text-white w-outline" style={{ maxWidth: '60%', padding: '15px' }}>
                    <Row>
                        <Col>
                            <h1 className="text-white" style={{ fontSize: '3vh' }}>Percent Change Calculation</h1>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    Entry price: {this.state.entryPrice} {this.state.tradingPair}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Exit price: {this.state.exitPrice} {this.state.tradingPair}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    Percent change: {this.state.percentChange}%
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default FindPercentChangePage;
