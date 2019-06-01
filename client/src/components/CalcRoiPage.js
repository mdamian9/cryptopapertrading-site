import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import NavbarComponent from './Navbar';

class CalcRoiPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            investment: '0.0',
            divestment: '0.0',
            roi_x: '0.0',
            roi_percent: '0.0'
        };
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event.target.investment.value);
        console.log(event.target.divestment.value);

        const investment = event.target.investment.value;
        const divestment = event.target.divestment.value;
        const roi_x = divestment / investment;
        const roi_percent = ((divestment / investment) - 1) * 100;

        this.setState({
            investment: event.target.investment.value,
            divestment: event.target.divestment.value,
            roi_x: roi_x.toFixed(2),
            roi_percent: roi_percent.toFixed(2)
        });
    };

    render = () => {
        return (
            <div>
                <NavbarComponent />
                <br />
                <Container style={{ maxWidth: '60%' }}>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleFormSubmit} className="mx-auto w-outline" style={{ padding: '15px' }}>
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
                <Container className="text-center w-outline" style={{ maxWidth: '60%' }}>
                    <Row>
                        {/* Render this.state in these columns, test refresh when submit */}
                        <Col>
                            <Row>
                                <Col>
                                    Initial investment: {this.state.investment}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Final divestment: {this.state.divestment}
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
