import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import axios from 'axios';

const TradesTableRow = ({ trade, toggleModal }) => {
    return (
        <tr>
            <th scope="row">{trade.dateLogged}</th>
            <td>{trade.exchange}</td>
            <td>{trade.coinName}/{trade.tradingPair}</td>
            <td>{trade.totalInvestment} {trade.tradingPair}</td>
            <td>{trade.coinBuyPrice} {trade.tradingPair}</td>
            <td>{trade.totalCoins} {trade.coinName}</td>
            <td>{trade.finalEntryPrice} {trade.tradingPair}</td>
            <td>
                <Button onClick={() => { toggleModal(trade); }} color='danger'>Delete</Button>
            </td>
        </tr >
    );
};

const TradesTableBody = ({ trades, toggleModal }) => {
    const tradesTable = trades.map(trade => {
        return <TradesTableRow key={trade._id} trade={trade} toggleModal={toggleModal} />
    });
    return tradesTable;
};

class UserEntryTrades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trades: [],
            deleteModal: false,
            deleteTrade: ''
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.deleteTrade = this.deleteTrade.bind(this);
    };

    componentDidMount = () => {
        axios.get('/entry-trades').then(res => {
            this.setState({
                trades: res.data
            });
        }).catch(err => {
            console.log(err);
        });
    };

    toggleModal = trade => {
        if (this.state.deleteModal === true) {
            trade = '';
        };
        this.setState(prevState => ({
            deleteModal: !prevState.deleteModal,
            deleteTrade: trade
        }));
    };

    deleteTrade = () => {
        const promises = [axios.delete(`/entry-trades/${this.state.deleteTrade._id}`), axios.get('/entry-trades')];
        Promise.all(promises).then(values => {
            console.log(values[0].data);
            this.setState(prevState => ({
                trades: values[1].data,
                deleteModal: !prevState.deleteModal,
                deleteTrade: ''
            }));
        }).catch(err => {
            console.log(err);
        });
    };

    render = () => {

        return (
            <div>
                <Modal isOpen={this.state.deleteModal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}>Confirm Delete</ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete this trade?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.deleteTrade}>Delete</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <h1 className="text-center" style={{ margin: "15px", fontSize: "4.5vh" }}>
                    Entry Trade Log
                </h1>
                <hr />
                <Table dark striped>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Exchange</th>
                            <th>Pair Traded</th>
                            <th>Total Investment</th>
                            <th>Buy Price</th>
                            <th>Total Coins</th>
                            <th>Final Entry Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TradesTableBody trades={this.state.trades} toggleModal={this.toggleModal} />
                    </tbody>
                </Table>
            </div>
        );
    };
    
};

export default UserEntryTrades;
