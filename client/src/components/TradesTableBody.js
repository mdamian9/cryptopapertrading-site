import React from 'react';

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
            </tr>
    };

    return row;

};

const TradesTableBody = ({ trades, tradesType }) => {
    const tradesTable = trades.map(trade => {
        return <TradesTableRow key={trade._id} trade={trade} tradeType={tradesType} />
    });
    return tradesTable;
};


export default TradesTableBody;
