import React from 'react';
import './App.css';
import history from './utils/history';
import {Route, Router, Switch} from "react-router-dom"
import Main from "./components/main";
import Profile from "./components/profile";
import Registration from "./components/registration";
import Login from "./components/login";
import NotFound from "./components/notFound";

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={Main} exact/>
                <Route path="/profile" component={Profile}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/login" component={Login}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
