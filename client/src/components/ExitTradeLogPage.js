import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from './Navbar';
import UserExitTrades from './UserExitTrades';

const ExitTradeLogPage = () => {
    return (
        <div>
            <Navbar />
            <br />
            <Container className="text-white w-outline">
                <Row>
                    <Col>
                        <UserExitTrades />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExitTradeLogPage;
