import React, { Component } from 'react';
import { Table } from 'reactstrap';

class UserExitTrades extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center" style={{ margin: "15px", fontSize: "4.5vh" }}>
                    Exit Trades
                </h1>
                <hr />
                <Table dark striped>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Exchange</th>
                            <th>Coin Name</th>
                            <th>Total Coins Sold</th>
                            <th>Sell Price</th>
                            <th>Total Divestment</th>
                            <th>Final Exit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">05/12/19</th>
                            <td>Binance</td>
                            <td>TRX/BTC</td>
                            <td>12,512.475 TRX</td>
                            <td>0.00001500 BTC</td>
                            <td>0.18749943 BTC</td>
                            <td>0.00001498 BTC</td>
                        </tr>
                        <tr>
                            <th scope="row">05/13/19</th>
                            <td>Binance</td>
                            <td>ETH/BTC</td>
                            <td>12.5289147 ETH</td>
                            <td>0.15750000 BTC</td>
                            <td>1.97133077 BTC</td>
                            <td>0.15734250 BTC</td>
                        </tr>
                        <tr>
                            <th scope="row">05/14/19</th>
                            <td>Binance</td>
                            <td>ADA/BTC</td>
                            <td>23,353.905 ADA</td>
                            <td>0.00003500 BTC</td>
                            <td>0.81655929 BTC</td>
                            <td>0.00003497 BTC</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    };
};

export default UserExitTrades;
