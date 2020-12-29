import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountService from "../services/account.service";
function Navbar() {
  const logout = () => {
    AccountService.logout();
    window.location.href = "/";
  };
  return (
    <nav className="navbar navbar-expand-lg " color-on-scroll="500">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Dashboard
        </a>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navigation"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={logout}>
                <span className="no-icon">Log out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
