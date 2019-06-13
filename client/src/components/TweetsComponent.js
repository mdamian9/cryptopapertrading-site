import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

const TweetsComponent = ({ keyphrase, tweets }) => {
    let test;
    if (tweets) {
        test = tweets[0].text;
    } else {
        test = 'null';
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        Hashtag(s): {keyphrase}
                        <br />
                        Tweets: {test}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TweetsComponent;
