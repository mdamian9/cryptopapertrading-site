const express = require('express');
const router = express.Router();

// ExitTrade instance to read and write database records in MongoDB
const ExitTrade = require('../models/ExitTradeModel');

router.get('/', (req, res) => {
    ExitTrade.find().then(trades => {
        res.status(200).json(trades);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res) => {
    const newExitTrade = req.body;
    ExitTrade.create(newExitTrade).then(trade => {
        res.status(201).json({
            message: 'Successfully created new exit trade.',
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
    ExitTrade.findByIdAndDelete(req.params.tradeId).then(trade => {
        res.status(200).json({
            message: 'Successfully deleted exit trade.',
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
