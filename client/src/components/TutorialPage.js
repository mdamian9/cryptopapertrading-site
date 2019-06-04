import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavbarComponent from './Navbar';

const TutorialPage = () => {
    return (
        <div>
            <NavbarComponent />
            <br />
            <Container>
                <Row>
                    <Col>
                        Tutorial Page
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TutorialPage;
