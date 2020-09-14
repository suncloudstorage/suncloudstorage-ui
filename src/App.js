import React from 'react';
import './App.css';
import history from './utils/history';
import {Route, Router, Switch} from "react-router-dom"
import Main from "./components/main";
import Profile from "./components/profile";
import Registration from "./components/registration";
import Login from "./components/login";
import Disk from "./components/disk";
import NotFound from "./components/notFound";

function App() {
    return (
        <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/profile" component={Profile}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={Login}/>
            <Route path="/disk" component={Disk}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    );
}

export default App;
