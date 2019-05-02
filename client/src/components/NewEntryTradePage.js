import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import NewEntryTradeForm from './NewEntryTradeForm';

const NewEntryTradePage = () => {
    return (
        <div>
            <Navbar />
            <div className="div-90vh d-flex align-items-center text-white">
                <Container className="w-outline">
                    <br />
                    <Row>
                        <Col>
                            <h1 className="text-center" style={{ fontSize: '4vh' }}>
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
        </div>
    );
};

export default NewEntryTradePage;
