import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import NewExitTradeForm from './NewExitTradeForm';

const NewExitTradePage = () => {
    return (
        <div>
            <Navbar />
            <div className="div-90vh d-flex align-items-center text-white">
                <Container className="w-outline">
                    <br />
                    <Row>
                        <Col>
                            <h1 className="text-center" style={{ fontSize: '4vh' }}>
                                New Exit Trade
                            </h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs="6">
                            <NewExitTradeForm />
                        </Col>
                    </Row>
                    <br />
                </Container>
            </div>
        </div>
    );
};

export default NewExitTradePage;