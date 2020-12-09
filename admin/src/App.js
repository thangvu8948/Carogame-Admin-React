import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./views/login";
import Index from "./views/index";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/caro' component={Index} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
