const express = require('express');
const router = express.Router();
const db_ExitTrades = require('../models/ExitTradeModel');

router.get('/', (req, res) => {
    db_ExitTrades.find().then(trades => {
        res.status(200).json(trades);
    }).catch(err => {
        console.log(err);
    });
});

router.post('/', (req, res) => {
    const newExitTrade = req.body;
    db_ExitTrades.create(newExitTrade).then(trade => {
        res.status(201).json({
            message: 'Successfully created new exit trade.',
            newTrade: trade
        });
    }).catch(err => {
        console.log(err);
    });
});

router.delete('/:tradeId', (req, res) => {
    db_ExitTrades.findByIdAndDelete(req.params.tradeId).then(trade => {
        res.status(200).json({
            message: 'Successfully deleted exit trade.',
            deletedTrade: trade
        });
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;
