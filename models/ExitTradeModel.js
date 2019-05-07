const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const ExitTradeSchema = new Schema({
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
    coinName: {
        type: String,
        trim: true,
        required: true
    },
    totalCoins: {
        type: Number,
        required: true
    },
    coinSellPrice: {
        type: Number,
        required: true
    },
    totalDivestment: {
        type: Number,
        required: true
    },
    finalExitPrice: {
        type: Number,
        required: true
    },
    dateLogged: {
        type: String,
        trim: true,
        required: true
    }
});

const ExitTrade = mongoose.model('ExitTrade', ExitTradeSchema);

module.exports = ExitTrade;
