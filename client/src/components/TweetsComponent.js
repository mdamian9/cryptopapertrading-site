import React from 'react';
import {
    Card, CardText, CardBody, CardTitle,
    CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const RenderTweet = ({ tweet }) => {
    return (
        <div>
            <Card style={{ color: 'black', marginBottom: '5px', backgroundColor: 'lightblue' }}>
                <CardBody>
                    <CardTitle><img src={tweet.profilePic} alt='profilePic' />&ensp;<b>{tweet.author}</b></CardTitle>
                    <CardSubtitle>
                        <i><a href={tweet.profileLink} target='_blank' rel='noopener noreferrer'>
                            @{tweet.twitterHandle}
                        </a></i>
                    </CardSubtitle>
                    <CardText>{tweet.text}</CardText>
                    <Button color='primary' href={tweet.link} target="_blank">Link</Button>
                </CardBody>
            </Card>
        </div>
    );
};

const TweetsComponent = ({ keyphrase, tweets }) => {
    let header, displayTweets;
    if (!tweets) {
        header = 'No tweets yet'
        displayTweets = <div></div>;
    } else {
        header = `Tweets for '${keyphrase}':`
        displayTweets = tweets.map(tweet => {
            return (
                <RenderTweet key={tweet.id} tweet={tweet} />
            );
        });
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h5 className="text-center" style={{ marginTop: '15px' }}>
                            {header}
                        </h5>
                        <hr />
                        {displayTweets}
                        <br />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TweetsComponent;
