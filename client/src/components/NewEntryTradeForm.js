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
            totalInvestment: '',
            coinName: '',
            coinBuyPrice: ''
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
        let tradeFee = 0;
        if (this.state.exchangeName === 'Binance') {
            tradeFee = .001;
        } else if (this.state.exchangeName === 'Coinbase') {
            tradeFee = .04;
        };
        const totalCoins = (parseFloat(this.state.totalInvestment) - (parseFloat(this.state.totalInvestment) * tradeFee)) / parseFloat(this.state.coinBuyPrice);
        const finalEntryPrice = parseFloat(this.state.totalInvestment) / totalCoins;
        axios.post('/entry-trades', {
            exchange: this.state.exchangeName,
            tradingPair: this.state.tradingPair,
            totalInvestment: parseFloat(this.state.totalInvestment),
            coinName: this.state.coinName,
            coinBuyPrice: parseFloat(this.state.coinBuyPrice),
            totalCoins: totalCoins.toFixed(8),
            finalEntryPrice: finalEntryPrice.toFixed(8),
            dateLogged: moment().format('MMMM Do YYYY, h:mm:ss a')
        }).then(res => {
            console.log(res.data);
            alert(res.data);
        }).catch(err => {
            console.log(err);
        });
        // Clear form fields
        event.target.reset();
        // Reset state
        this.setState({
            exchangeName: '-- select exchange --',
            tradingPair: '-- select trading pair --',
            totalInvestment: '',
            coinName: '',
            coinBuyPrice: ''
        });
    };

    render = () => {
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label for="exchange-name">Exchange:</Label>
                    <Input type="select" name="exchangeName" id="exchange-name"
                        defaultValue={this.state.exchangeName} onChange={this.handleChange} required>
                        <option disabled>-- select exchange --</option>
                        <option>Binance</option>
                        <option>Coinbase</option>
                        <option>Robinhood</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="trading-pair">Trading Pair:</Label>
                    <Input type="select" name="tradingPair" id="trading-pair"
                        defaultValue={this.state.tradingPair} onChange={this.handleChange} required>
                        <option disabled>-- select trading pair --</option>
                        <option>USD</option>
                        <option>USDT</option>
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>BNB</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="total-investment">Total investment:</Label>
                    <Input type="text" name="totalInvestment" id="total-investment"
                        placeholder="Enter total investment" onChange={this.handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="coin-name">Coin name:</Label>
                    <Input type="text" name="coinName" id="coin-name"
                        placeholder="Enter name of coin bought" onChange={this.handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label for="coin-buy-price">Coin price:</Label>
                    <Input type="text" name="coinBuyPrice" id="coin-buy-price"
                        placeholder="Enter price coin was bought" onChange={this.handleChange} required />
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
        );
    };
    
};

export default NewEntryTradeForm;
