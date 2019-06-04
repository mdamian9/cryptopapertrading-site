import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import NavbarComponent from './Navbar';

class CalcRoiPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tradingPair: '',
            investment: '0.0',
            divestment: '0.0',
            roi_x: '0.0',
            roi_percent: '0.0'
        };
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const investment = parseFloat(event.target.investment.value);
        const divestment = parseFloat(event.target.divestment.value);
        const roi_x = divestment / investment;
        const roi_percent = ((divestment / investment) - 1) * 100;
        this.setState({
            tradingPair: event.target.tradingPair.value,
            investment: event.target.investment.value,
            divestment: event.target.divestment.value,
            roi_x: roi_x.toFixed(2),
            roi_percent: roi_percent.toFixed(2)
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
                                    <Label for="init-investment">Initial investment:</Label>
                                    <Input type="text" name="investment" id="init-investment" placeholder="Enter initial investment" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="final-divestment">Final divestment:</Label>
                                    <Input type="text" name="divestment" id="final-divestment" placeholder="Enter final divestment" />
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
                            <h1 className="text-white" style={{ fontSize: '3vh' }}>Return of investment / ROI Calculation</h1>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    Initial investment: {this.state.investment} {this.state.tradingPair}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Final divestment: {this.state.divestment} {this.state.tradingPair}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    ROI (multiple): {this.state.roi_x}x
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    ROI (percentage): {this.state.roi_percent}%
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default CalcRoiPage;
