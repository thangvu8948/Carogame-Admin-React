import React, { Component } from "react";
import Navbar from "../components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Users from "./user";
import Battles from "./battle";
import UserInfo from "./userInfo";
function Main() {
  return (
    <div className="main-panel">
      <Navbar />
      <Switch>
        <Route exact path="/users" component={Users} />
        <Route path="/battles" component={Battles} />
        <Route
          path="/users/:id"
          render={(props) => {
            return <UserInfo id={props.match.params.id} />;
          }}
        />
        {/* <Redirect from="*" to="/users" /> */}
      </Switch>
    </div>
  );
}

export default Main;
