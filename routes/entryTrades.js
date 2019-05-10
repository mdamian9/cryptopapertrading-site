const express = require('express');
const router = express.Router();
const db_EntryTrades = require('../models/EntryTradeModel');

router.get('/entry-trades', (req, res) => {
    db_EntryTrades.find().then(trades => {
        res.statusCode = 200;
        res.send(trades);
    });
});

router.post('/entry-trades', (req, res) => {
    const newEntryTrade = req.body;
    db_EntryTrades.create(newEntryTrade).then(trade => {
        res.statusCode = 201;
        res.send(`Created new entry trade: ${trade}`);
    });
});

router.put('/entry-trades', (req, res) => {
    res.send('Put not supported');
});

router.delete('/entry-trades/:tradeId', (req, res) => {
    db_EntryTrades.findById(req.params.tradeId).then(trade => {
        res.json(trade);
    });
});


module.exports = router;
