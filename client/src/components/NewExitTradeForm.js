import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import moment from 'moment';

class NewEntryTradeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exchangeName: '-- select exchange --',
            tradingPair: '-- select trading pair --',
            coinName: '',
            numCoinsSold: '',
            coinSellPrice: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    };

    handleChange = event => {
        // Extract name & value from event target and set to state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`Submitted:\n${this.state.exchangeName} ${this.state.tradingPair} ${this.state.coinName} ${this.state.numCoinsSold} ${this.state.coinSellPrice}`);

        //==========================================================================

        let tradeFee = 0;
        if (this.state.exchangeName === 'Binance') {
            tradeFee = .001;
        } else if (this.state.exchangeName === 'Coinbase') {
            tradeFee = .04;
        };

        // axios.post('/exit-trades', {

        // }).then(res => {
        //     console.log(res.data);
        // }).catch(err => {
        //     console.log(err);
        // });

        //==========================================================================

        // Clear form fields
        event.target.reset();
        // Reset state
        this.setState({
            exchangeName: '-- select exchange --',
            tradingPair: '-- select trading pair --',
            coinName: '',
            numCoinsSold: '',
            coinSellPrice: ''
        });
    };

    render = () => {
        console.log(`Rendered:\n${this.state.exchangeName} ${this.state.tradingPair} ${this.state.coinName} ${this.state.numCoinsSold} ${this.state.coinSellPrice}`);
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label for="exchange-name">Exchange:</Label>
                    <Input type="select" name="exchangeName" id="exchange-name"
                        defaultValue={this.state.exchangeName} onChange={this.handleChange}>
                        <option disabled>-- select exchange --</option>
                        <option>Binance</option>
                        <option>Coinbase</option>
                        <option>Robinhood</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="trading-pair">Trading Pair:</Label>
                    <Input type="select" name="tradingPair" id="trading-pair"
                        defaultValue={this.state.tradingPair} onChange={this.handleChange}>
                        <option disabled>-- select trading pair --</option>
                        <option>USD</option>
                        <option>USDT</option>
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>BNB</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="coin-name">Coin name:</Label>
                    <Input type="text" name="coinName" id="coin-name"
                        placeholder="Enter name of coin sold" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="num-coins-sold">Number of coins / tokens sold:</Label>
                    <Input type="text" name="numCoinsSold" id="num-coins-sold"
                        placeholder="Enter number of coins / tokens sold" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="coin-sell-price">Coin price:</Label>
                    <Input type="text" name="coinSellPrice" id="coin-sell-price"
                        placeholder="Enter price coin was sold" onChange={this.handleChange} />
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
        );
    };
};

export default NewEntryTradeForm;