import React, { Component } from 'react';
import NavbarComponent from './Navbar';
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

class TradeLogPage extends Component {
    render = () => {
        return (
            <div>
                <NavbarComponent />
                <Trades />
            </div>
        );
    };
};

export default TradeLogPage;
