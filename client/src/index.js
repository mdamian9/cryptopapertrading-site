import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import NewEntryTrade from './components/NewEntryTrade';
import NewExitTrade from './components/NewExitTrade';
import TradesLog from './components/TradesLog';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/new-entry-trade" component={NewEntryTrade} />
        <Route exact path="/new-exit-trade" component={NewExitTrade} />
        <Route exact path ="/trades-log" component={TradesLog} />
    </Router>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
