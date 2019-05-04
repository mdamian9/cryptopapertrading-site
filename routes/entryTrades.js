const express = require('express');
const router = express.Router();
const db_EntryTrades = require('../models/EntryTradeModel');

router.get('/entry-trades', (req, res) => {
    db_EntryTrades.find().then(trades => {
        res.send(trades);
    });
});

router.post('/entry-trades', (req, res) => {
    const newEntryTrade = req.body;
    db_EntryTrades.create(newEntryTrade).then(trade => {
        res.send(`Created new entry trade: ${trade}`);
    });
});

router.put('/entry-trades', (req, res) => {
    res.send('Put not supported');
});

router.delete('/entry-trades', (req, res) => {
    res.send('Delete');
});


module.exports = router;
