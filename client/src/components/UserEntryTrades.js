import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

class UserEntryTrades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entryTrades: null
        };
    };

    renderEntryTrades = () => {
        return (
            <tbody>
                <tr>
                    <th scope="row">05/12/19</th>
                    <td>Binance</td>
                    <td>TRX/BTC</td>
                    <td>0.015030000 BTC</td>
                    <td>0.00000120 BTC</td>
                    <td>12,512.475 TRX</td>
                    <td>0.00000120 BTC</td>
                </tr>
                <tr>
                    <th scope="row">05/13/19</th>
                    <td>Binance</td>
                    <td>ETH/BTC</td>
                    <td>0.35756005 BTC</td>
                    <td>0.02851025 BTC</td>
                    <td>12.5289147 ETH</td>
                    <td>0.02853879 BTC</td>
                </tr>
                <tr>
                    <th scope="row">05/14/19</th>
                    <td>Binance</td>
                    <td>ADA/BTC</td>
                    <td>0.23050000 BTC</td>
                    <td>0.00000986 BTC</td>
                    <td>23,353.905 ADA</td>
                    <td>0.00000987 BTC</td>
                </tr>
            </tbody>
        );
    };

    render() {
        return (
            <div>
                <h1 className="text-center" style={{ margin: "15px", fontSize: "4.5vh" }}>
                    Entry Trades
                </h1>
                <hr />
                <Table dark striped>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Exchange</th>
                            <th>Coin Name</th>
                            <th>Total Investment</th>
                            <th>Buy Price</th>
                            <th>Total Coins</th>
                            <th>Final Entry Price</th>
                        </tr>
                    </thead>
                    {this.renderEntryTrades()}
                </Table>
            </div>
        );
    };
};

export default UserEntryTrades;
