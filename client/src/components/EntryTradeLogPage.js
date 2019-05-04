import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import UserEntryTrades from './UserEntryTrades';

const EntryTradeLogPage = () => {
    return (
        <div>
            <Navbar />
            <br />
            <Container className="text-white w-outline">
                <Row>
                    <Col>
                        <UserEntryTrades />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EntryTradeLogPage;
