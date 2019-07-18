const express = require('express');
const router = express.Router();

// EntryTrade instance to read and write database records in MongoDB
const EntryTrade = require('../models/EntryTradeModel');

router.get('/', (req, res) => {
    EntryTrade.find().then(trades => {
        res.status(200).json(trades);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res) => {
    const newEntryTrade = req.body;
    EntryTrade.create(newEntryTrade).then(trade => {
        res.status(201).json({
            message: 'Successfully created new entry trade.',
            newTrade: trade
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/:tradeId', (req, res) => {
    EntryTrade.findByIdAndDelete(req.params.tradeId).then(trade => {
        res.status(200).json({
            message: 'Successfully deleted entry trade.',
            deletedTrade: trade
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;
