const express = require('express');
const router = express.Router();
const db_EntryTrades = require('../models/EntryTradeModel');

router.get('/', (req, res) => {
    db_EntryTrades.find().then(trades => {
        res.status(200).json(trades);
    }).catch(err => {
        console.log(err);
    });
});

router.post('/', (req, res) => {
    const newEntryTrade = req.body;
    db_EntryTrades.create(newEntryTrade).then(trade => {
        res.status(201).json({
            message: 'Successfully created new entry trade.',
            newTrade: trade
        });
    }).catch(err => {
        console.log(err);
    });
});

router.delete('/:tradeId', (req, res) => {
    db_EntryTrades.findByIdAndDelete(req.params.tradeId).then(trade => {
        res.status(200).json({
            message: 'Successfully deleted entry trade.',
            deletedTrade: trade
        });
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;
