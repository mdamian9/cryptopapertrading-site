const express = require('express');
const router = express.Router();
const db_EntryTrades = require('../models/EntryTradeModel');

router.get('/entry-trades', (req, res) => {
    db_EntryTrades.find().then(trades => {
        res.send(trades);
    });
});

router.post('/entry-trades', (req, res) => {
    res.send(req.body);
});

router.put('/entry-trades', (req, res) => {
    res.send('Put not supported');
});

router.delete('/entry-trades', (req, res) => {
    res.send('Delete');
});


module.exports = router;
