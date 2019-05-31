import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import NavbarComponent from './Navbar';

class CalcRoiPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roi_percent: '0.0',
            roi_x: '0'
        };
    };

    render = () => {
        return (
            <div>
                <NavbarComponent />
                <br />
                <Container>
                    <Row>
                        <Col>
                            <Form className="w-outline" style={{ padding: '15px' }}>
                                <FormGroup>
                                    <Label for="init-investment">Email</Label>
                                    <Input type="text" name="investment" id="init-investment" placeholder="Enter initial investment" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="final-divestment">Password</Label>
                                    <Input type="text" name="divestment" id="final-divestment" placeholder="Enter final divestment" />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <br />
                <Container>
                    <Row className="text-center">
                        <Col>
                            Col 1
                        </Col>
                        <Col>
                            Col 2
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default CalcRoiPage;
