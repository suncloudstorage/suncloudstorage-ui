import React from 'react';
import './app.css';
import history from '../../utils/history';
import {Route, Router, Switch} from "react-router-dom"
import Profile from "../profile/profile";
import NotFound from "../not-found/not-found";
import MyDisk from "../my-disk/my-disk";
import Main from '../main';

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
