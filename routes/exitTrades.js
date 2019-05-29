const express = require('express');
const router = express.Router();
const db_ExitTrades = require('../models/ExitTradeModel');

router.get('/exit-trades', (req, res) => {
    db_ExitTrades.find().then(trades => {
        res.statusCode = 200;
        res.send(trades);
    }).catch(err => {
        console.log(err);
    });
});

router.post('/exit-trades', (req, res) => {
    const newExitTrade = req.body;
    db_ExitTrades.create(newExitTrade).then(trade => {
        res.statusCode = 201;
        res.send(`Created new exit trade: ${trade}`);
    }).catch(err => {
        console.log(err);
    });
});

router.put('/exit-trades', (req, res) => {
    res.send('exit PUT');
});

router.delete('/exit-trades', (req, res) => {
    res.send('exit DELETE');
});

module.exports = router;

