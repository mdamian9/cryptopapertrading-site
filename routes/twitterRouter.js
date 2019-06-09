const express = require('express');
const router = express.Router();
const Twit = require('twit');
const apiKeys = require('../apiKeys');

const Twitter = new Twit({
    consumer_key: apiKeys.consumerKey,
    consumer_secret: apiKeys.consumerSecret,
    access_token: apiKeys.accessToken,
    access_token_secret: apiKeys.accessTokenSecret,
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
});

router.get('/tweets/:hashtag', (req, res) => {
    Twitter.get('search/tweets', { q: `${req.params.hashtag} since:2018-07-11`, count: 10 }, (err, data, res) => {
        console.log(data.statuses);
    });
    res.send('Tweets');
});

router.post('/tweets/:hashtag', (req, res) => {
    res.send(`POST not supported for /tweets/:hashtag`);
});

router.put('/tweets/:hashtag', (req, res) => {
    res.send(`PUT not supported for /tweets/:hashtag`);
});

router.delete('/tweets/:hashtag', (req, res) => {
    res.send(`DELETE not supported for /tweets/:hashtag`);
});

module.exports = router;
