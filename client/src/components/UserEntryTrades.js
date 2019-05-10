import React, { Component } from 'react';
import { Table } from 'reactstrap';
import TradesTableBody from './TradesTableBody';
import axios from 'axios';

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
                    Entry Trade Log
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
                        <TradesTableBody trades={this.state.trades} tradesType='buy' />
                    </tbody>
                </Table>
            </div>
        );
    };
};

export default UserEntryTrades;
