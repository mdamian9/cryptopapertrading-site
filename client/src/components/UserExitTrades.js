import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import axios from 'axios';

const TradesTableRow = ({ trade, tradeId, deleteTrade }) => {
    return (
        <tr>
            <th scope='row'>{trade.dateLogged}</th>
            <td>{trade.exchange}</td>
            <td>{trade.coinName}/{trade.tradingPair}</td>
            <td>{trade.totalCoins} {trade.coinName}</td>
            <td>{trade.coinSellPrice} {trade.tradingPair}</td>
            <td>{trade.totalDivestment} {trade.tradingPair}</td>
            <td>{trade.finalExitPrice} {trade.tradingPair}</td>
            <td>
                <Button onClick={() => { deleteTrade(tradeId) }} color='danger'>Delete</Button>
            </td>
        </tr>
    );
};

const TradesTableBody = ({ trades, deleteTrade }) => {
    const tradesTable = trades.map(trade => {
        return <TradesTableRow key={trade._id} trade={trade} tradeId={trade._id} deleteTrade={deleteTrade} />
    });
    return tradesTable;
};

class UserExitTrades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trades: []
        };
    };

    componentDidMount = () => {
        axios.get('/exit-trades').then(res => {
            this.setState({
                trades: res.data
            });
        }).catch(err => {
            console.log(err);
        });
    };

    componentDidUpdate = () => {
        console.log('updated UserExitTrades');
    };

    deleteTrade = (tradeId) => {
        axios.delete(`/exit-trades/${tradeId}`).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    };

    render = () => {
        return (
            <div>
                <h1 className="text-center" style={{ margin: "15px", fontSize: "4.5vh" }}>
                    Exit Trade Log
                </h1>
                <hr />
                <Table dark striped>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Exchange</th>
                            <th>Pair Traded</th>
                            <th>Total Coins Sold</th>
                            <th>Sell Price</th>
                            <th>Total Divestment</th>
                            <th>Final Exit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TradesTableBody trades={this.state.trades} deleteTrade={this.deleteTrade} />
                    </tbody>
                </Table>
            </div>
        );
    };
};

export default UserExitTrades;
