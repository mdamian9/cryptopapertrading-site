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
    const query = {
        q: `${req.params.hashtag} since:2018-07-11`,
        lang: 'en',
        result_type: 'popular',
        count: 10
    };
    Twitter.get('search/tweets', query, (err, data, resp) => {
        let tweets = [];
        data.statuses.forEach(tweet => {
            tweets.push({
                text: tweet.text,
                author: tweet.user.name,
                twitterHandle: tweet.user.screen_name,
                profilePic: tweet.user.profile_image_url_https,
                date: tweet.created_at,
                link: `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
            });
        });
        res.statusCode = 200;
        res.json(tweets);
    });
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
