const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/checkAuth');

// EntryTrade instance to read and write database records in MongoDB
const EntryTrade = require('../models/EntryTradeModel');

router.get('/', (req, res, next) => {
    EntryTrade.find().then(trades => {
        res.status(200).json(trades);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', checkAuth, (req, res, next) => {
    const newEntryTrade = new EntryTrade({
        _id: new mongoose.Types.ObjectId(),
        exchange: req.body.exchange,
        tradingPair: req.body.tradingPair,
        totalInvestment: req.body.totalInvestment,
        coinName: req.body.coinName,
        coinBuyPrice: req.body.coinBuyPrice,
        totalCoins: req.body.totalCoins,
        finalEntryPrice: req.body.finalEntryPrice,
        dateLogged: req.body.dateLogged
    });
    newEntryTrade.save().then(trade => {
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

router.delete('/:tradeId', checkAuth, (req, res, next) => {
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
