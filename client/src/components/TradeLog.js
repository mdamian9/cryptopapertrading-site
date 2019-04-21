import React, { Component } from 'react';
import UserEntryTrades from './UserEntryTrades';
import UserExitTrades from './UserEntryTrades';

let flag;
let Trades;

if (flag === "entries") {
    Trades = UserEntryTrades;
} else if (flag === "exits") {
    Trades = UserExitTrades;
} else {
    Trades = () => {
        return (
            <div>Empty Trades</div>
        );
    };
};

class TradeLog extends Component {
    render = () => {
        return (
            <Trades />
        );
    };
};

export default TradeLog;
