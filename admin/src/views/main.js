import React, { Component } from "react";
import Navbar from "../components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Users from "./user";
import Battles from "./battle";
import UserInfo from "./userInfo";
import BattleChat from "./battleChat";
function Main() {
  return (
    <div className="main-panel">
      <Navbar />
      <Switch>
        <Route exact path="/users" component={Users} />
        <Route exact path="/battles" component={Battles} />
        <Route
          exact
          path="/users/:id"
          render={(props) => {
            return <UserInfo id={props.match.params.id} />;
          }}
        />
        <Route
          exact
          path="/battles/:id"
          render={(props) => {
            return <BattleChat id={props.match.params.id} />;
          }}
        />
        <Route
          exact
          path="/users/:id/battles"
          render={(props) => {
            return <Battles userid={props.match.params.id} />;
          }}
        />
        <Redirect from="*" to="/users" />
      </Switch>
    </div>
  );
}

export default Main;
