import "./App.css";
import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/login";
import Index from "./views/index";
import AccountService from "./services/account.service";
import Splash from "./views/splash";
import Notifycation from "./views/notification";
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
      {currentUser ? (
        <Index></Index>
      ) : (
        <Router>
          <Route exact path="/" component={Login} />
          <Route
            exact
            path="/splash/:token"
            render={(props) => {
              return <Splash token={props.match.params.token} />;
            }}
          />
          <Route
            exact
            path="/notify/:data"
            render={(props) => {
              return <Notifycation data={props.match.params.data} />;
            }}
          />
        </Router>
      )}
      {/* <Router>
        <Route
          exact
          path="/splash/:token"
          render={(props) => {
            return <Splash id={props.match.params.token} />;
          }}
        />
      </Router> */}
    </div>
  );
}
export default App;
