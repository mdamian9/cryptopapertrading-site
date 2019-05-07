import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

const RenderEntryTrade = ({ trade }) => {
    return (
        <tr>
            <th scope="row">{trade.dateLogged}</th>
            <td>{trade.exchange}</td>
            <td>{trade.coinName}/{trade.tradingPair}</td>
            <td>{trade.totalInvestment} {trade.tradingPair}</td>
            <td>{trade.coinBuyPrice} {trade.tradingPair}</td>
            <td>{trade.totalCoins} {trade.coinName}</td>
            <td>{trade.finalEntryPrice} {trade.tradingPair}</td>
        </tr>
    );
};

const TradesTableBody = ({ trades }) => {
    const tradesTable = trades.map(trade => {
        return <RenderEntryTrade trade={trade} />
    });
    return tradesTable;
};

class UserEntryTrades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trades: []
        };
    };

    componentDidMount = () => {
        axios.get('/entry-trades').then(res => {
            this.setState({
                trades: res.data
            });
        });
    };

    render = () => {
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
                    <tbody>
                        <TradesTableBody trades={this.state.trades} />
                    </tbody>
                </Table>
            </div>
        );
    };
};

export default UserEntryTrades;
