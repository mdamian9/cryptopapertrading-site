const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntryTradeSchema = new Schema({
    exchange: {
        type: String,
        trim: true,
        required: true
    },
    tradingPair: {
        type: String,
        trim: true,
        required: true
    },
    totalInvestment: {
        type: Number,
        required: true
    },
    coinName: {
        type: String,
        trim: true,
        required: true
    },
    coinBuyPrice: {
        type: Number,
        required: true
    },
    totalCoins: {
        type: Number,
        required: true
    },
    finalEntryPrice: {
        type: Number,
        required: true
    },
    dateLogged: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('EntryTrade', EntryTradeSchema);
