import "./App.css";
import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/login";
import Index from "./views/index";
import AccountService from "./services/account.service";
function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AccountService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return (
    <div className="App">
      {/* <Router>
        <Route exact path="/" component={currentUser ? Index : Login} />
      </Router> */}
      {currentUser ? <Index></Index> : <Login></Login>}
    </div>
  );
}
export default App;
