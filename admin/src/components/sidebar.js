import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="logo">
          <Link to="/users" className="simple-text">
            Simple Caro
          </Link>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">
              <i className="nc-icon nc-chart-pie-35"></i>
              <p>USERS</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/battles">
              <i className="nc-icon nc-circle-09"></i>
              <p>BATTLES</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
