import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewEntryTradeForm extends Component {

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
        console.log(`${this.state.exchangeName} ${this.state.tradingPair}`)
        // ${this.state.totalInvestment} ${this.state.altName} ${this.state.altPrice}
        document.getElementById("new-entry-form").reset();
        // Reset state
        this.setState({
            exchangeName: '',
            tradingPair: ''
            // totalInvestment: '',
            // altName: '',
            // altPrice: ''
        });
    };

    render = () => {
        return (
            <Form id="new-entry-form" onSubmit={this.handleFormSubmit}>
                <FormGroup>
                    <Label for="exchange-name">Exchange:</Label>
                    <Input type="select" name="exchangeName" id="exchange-name"
                        placeholder="place" onChange={this.handleChange}>
                        <option disabled selected value> -- select an option -- </option>
                        <option>Binance</option>
                        <option>Coinbase</option>
                        <option>Robinhood</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="trading-pair">Trading Pair:</Label>
                    <Input type="select" name="tradingPair" id="trading-pair" onChange={this.handleChange}>
                        <option>USD</option>
                        <option>USDT</option>
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>BNB</option>
                    </Input>
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
        );
    };
};

export default NewEntryTradeForm;