import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewEntryTradeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exchangeName: '-- select exchange --',
            tradingPair: '-- select trading pair --',
            totalInvestment: '',
            altName: '',
            altPrice: ''
        };
    };

    handleChange = event => {
        // Extract name & value from event target and set to state
        console.log(event.target.name);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // Clear form fields
        console.log(`Submitted:\n${this.state.exchangeName} ${this.state.tradingPair} ${this.state.totalInvestment} ${this.state.altName} ${this.state.altPrice}`);
        document.getElementById("new-entry-form").reset();
        // Reset state
        this.setState({
            exchangeName: '-- select exchange --',
            tradingPair: '-- select trading pair --',
            totalInvestment: '',
            altName: '',
            altPrice: ''
        });
    };

    render = () => {
        console.log(`Rendered:\n${this.state.exchangeName} ${this.state.tradingPair} ${this.state.totalInvestment} ${this.state.altName} ${this.state.altPrice}`);
        return (
            <Form id="new-entry-form" onSubmit={this.handleFormSubmit}>
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
                    <Label for="total-investment">Total investment:</Label>
                    <Input type="text" name="totalInvestment" id="total-investment"
                        placeholder="Enter total investment" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="alt-name">Altcoin name:</Label>
                    <Input type="text" name="altName" id="alt-name"
                        placeholder="Enter name of altcoin bought" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="alt-price">Altcoin price:</Label>
                    <Input type="text" name="altPrice" id="alt-price"
                        placeholder="Enter price of altcoin" onChange={this.handleChange}/>
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
        );
    };
};

export default NewEntryTradeForm;