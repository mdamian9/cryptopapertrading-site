import React from 'react';
import { Button } from 'reactstrap';

const TradesTableRow = ({ trade, tradeType }) => {

    let row;

    if (tradeType === 'buy') {
        row =
            <tr>
                <th scope="row">{trade.dateLogged}</th>
                <td>{trade.exchange}</td>
                <td>{trade.coinName}/{trade.tradingPair}</td>
                <td>{trade.totalInvestment} {trade.tradingPair}</td>
                <td>{trade.coinBuyPrice} {trade.tradingPair}</td>
                <td>{trade.totalCoins} {trade.coinName}</td>
                <td>{trade.finalEntryPrice} {trade.tradingPair}</td>
                <td><Button color='danger'>Delete</Button></td>
            </tr>
    } else {
        row =
            <tr>
                <th scope='row'>{trade.dateLogged}</th>
                <td>{trade.exchange}</td>
                <td>{trade.coinName}/{trade.tradingPair}</td>
                <td>{trade.totalCoins} {trade.coinName}</td>
                <td>{trade.coinSellPrice} {trade.tradingPair}</td>
                <td>{trade.totalDivestment} {trade.tradingPair}</td>
                <td>{trade.finalExitPrice} {trade.tradingPair}</td>
                <td><Button color='danger'>Delete</Button></td>
            </tr>
    };

    return row;

};

export default TradesTableRow;
