import React, { Component } from "react";

function UserInfo(props) {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">{props.id}</div>
      </div>
    </div>
  );
}

export default UserInfo;
