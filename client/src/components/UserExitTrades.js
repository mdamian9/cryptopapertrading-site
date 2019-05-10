import React, { Component } from 'react';
import { Table } from 'reactstrap';
import TradesTableBody from './TradesTableBody';
import axios from 'axios';

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
                            <th>Coin Name</th>
                            <th>Total Coins Sold</th>
                            <th>Sell Price</th>
                            <th>Total Divestment</th>
                            <th>Final Exit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TradesTableBody trades={this.state.trades} tradesType='sell' />
                    </tbody>
                </Table>
            </div>
        );
    };
};

export default UserExitTrades;
