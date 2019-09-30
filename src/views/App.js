/**
 * Name: App.js
 * Description: This will be the router that handles the views that the user sees
 *
 * @author Justin Yau
 */
import React from 'react';
import '../styles/App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./Home.js";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}></Route>
        </Switch>
    </Router>
  );
}

export default App;
