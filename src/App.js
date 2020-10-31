import React from 'react';
import './App.css';
import history from './utils/history';
import {Route, Router, Switch} from "react-router-dom"
import Main from "./components/Main";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import MyDisk from "./components/MyDisk";

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={Main} exact/>
                <Route path="/profile" component={Profile}/>
                <Route path="/myDisk" component={MyDisk}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
