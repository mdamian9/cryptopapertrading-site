import React from 'react';
import TradesTableRow from './TradesTableRow';

const TradesTableBody = ({ trades, tradesType }) => {
    const tradesTable = trades.map(trade => {
        return <TradesTableRow key={trade._id} trade={trade} tradeType={tradesType} />
    });
    return tradesTable;
};

export default TradesTableBody;
