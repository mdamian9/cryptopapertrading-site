import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
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
        const promises = [axios.delete(`/exit-trades/${tradeId}`), axios.get('/exit-trades')];
        Promise.all(promises).then(values => {
            console.log(values[0].data);
            this.setState({
                trades: values[1].data
            });
        }).catch(err => {
            console.log(err);
        });
    };

    render = () => {
        return (
            <div>
                <Modal isOpen={this.state.deleteModal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
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
