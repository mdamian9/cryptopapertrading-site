import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import NavbarComponent from './Navbar';

class GetTargetPricePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tradingPair: '',
            entryPrice: '0.0',
            percentGain: '0.0',
            targetPrice: '0.0'
        };
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const tradingPair = event.target.tradingPair.value;
        const entryPrice = parseFloat(event.target.entryPrice.value);
        const percentGain = parseFloat(event.target.percentGain.value) / 100;
        let targetPrice = (entryPrice * percentGain) + entryPrice;
        if (tradingPair === 'BTC' || tradingPair === 'ETH' || tradingPair === 'BNB') {
            targetPrice = targetPrice.toFixed(8);
        } else if (tradingPair === 'USD' || tradingPair === 'USDT') {
            targetPrice = targetPrice.toFixed(7);
        };
        this.setState({
            tradingPair: tradingPair,
            entryPrice: event.target.entryPrice.value,
            percentGain: event.target.percentGain.value,
            targetPrice: targetPrice
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
                                    <Label for="percent-gain">Desired percentage (%) gain:</Label>
                                    <Input type="text" name="percentGain" id="percent-gain" placeholder="Enter desired gain (%)" />
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
                            <h1 className="text-white" style={{ fontSize: '3vh' }}>Target Price Calculation</h1>
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
                                    Desired percentage (%) gain: {this.state.percentGain}%
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    Target price: {this.state.targetPrice} {this.state.tradingPair}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default GetTargetPricePage;
