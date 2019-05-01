import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import NewEntryTradeForm from './NewEntryTradeForm';

class NewEntryTradePage extends Component {
    render = () => {
        return (
            <div>
                <Navbar />
                <br />
                <Container className="text-white w-outline">
                    <br />
                    <Row>
                        <Col>
                            <h1 className="text-center" style={{fontSize: '4vh' }}>
                                New Entry Trade
                            </h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs="6">
                            <NewEntryTradeForm />
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
        );
    };
};

export default NewEntryTradePage;
