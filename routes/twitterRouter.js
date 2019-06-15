const express = require('express');
const router = express.Router();
const Twit = require('twit');

const Twitter = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
});

router.get('/tweets/:hashtag', (req, res) => {
    const query = {
        q: `${req.params.hashtag} since:2016-07-11`,
        lang: 'en',
        result_type: 'popular',
        count: 100
    };
    Twitter.get('search/tweets', query, (err, data, resp) => {
        let tweets = [];
        data.statuses.forEach(tweet => {
            tweets.push({
                id: tweet.id_str,
                text: tweet.text,
                author: tweet.user.name,
                twitterHandle: tweet.user.screen_name,
                profileLink: `https://twitter.com/${tweet.user.screen_name}`,
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
