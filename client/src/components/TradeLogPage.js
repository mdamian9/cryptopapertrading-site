import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavbarComponent from './Navbar';
import UserEntryTrades from './UserEntryTrades';
import UserExitTrades from './UserExitTrades';

const TradeLogPage = () => {
    return (
        <div>
            <NavbarComponent />
            <br />
            <Container className="text-white" style={{ width: "100%" }}>
                <Row className="justify-content-center">
                    <Col className="w-outline">
                            <UserEntryTrades />
                    </Col>
                    <Col className="w-outline" >
                        <UserExitTrades />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TradeLogPage;
