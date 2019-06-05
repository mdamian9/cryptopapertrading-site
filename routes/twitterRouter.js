const express = require('express');
const router = express.Router();
const Twit = require('twit');

const Twitter = new Twit({
    consumer_key: '...',
    consumer_secret: '...',
    access_token: '...',
    access_token_secret: '...',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
});

router.get('/tweets/:hashtag', (req, res) => {
    res.send(`Tweets for ${req.params.hashtag}`);
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
