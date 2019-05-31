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
import TutorialPage from './components/TutorialPage';
import NewEntryTradePage from './components/NewEntryTradePage';
import NewExitTradePage from './components/NewExitTradePage';
import EntryTradeLogPage from './components/EntryTradeLogPage';
import ExitTradeLogPage from './components/ExitTradeLogPage';
import CalcRoiPage from './components/CalcRoiPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home" component={UserHomePage} />
        <Route exact path="/tutorial" component={TutorialPage} />
        <Route exact path="/new-entry-trade" component={NewEntryTradePage} />
        <Route exact path="/new-exit-trade" component={NewExitTradePage} />
        <Route exact path="/entry-trades" component={EntryTradeLogPage} />
        <Route exact path="/exit-trades" component={ExitTradeLogPage} />
        <Route exact path="/calc-roi" component={CalcRoiPage} />
    </Router>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
