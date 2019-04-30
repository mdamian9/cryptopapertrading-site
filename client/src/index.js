import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage.js';
import UserHomePage from './components/UserHomePage';
import NewEntryTrade from './components/NewEntryTrade';
import NewExitTrade from './components/NewExitTrade';
import TradeLogPage from './components/TradeLogPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        {/* <Route exact path="/login" component={NewEntryTrade} />
        <Route exact path="/signup" component={NewEntryTrade} /> */}
        <Route exact path="/home" component={UserHomePage} />
        <Route exact path="/new-entry-trade" component={NewEntryTrade} />
        <Route exact path="/new-exit-trade" component={NewExitTrade} />
        <Route exact path="/trade-log" component={TradeLogPage} />
        <Route exact path="/user-entry-trades" component={NewEntryTrade} />
        <Route exact path="/uer-exit-trades" component={NewExitTrade} />
    </Router>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
