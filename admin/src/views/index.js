import React, { Component } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Main from "./main";
import Splash from "./splash";
function Index() {
  return (
    <div className="wrapper">
      <Router>
        <Sidebar />
        <Route path="/" component={Main} />
      </Router>
    </div>
  );
}

export default Index;
