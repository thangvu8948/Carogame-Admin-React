import React from "react";

const Square = (props) => (
  <button className={`square square-${props.value}`}>{props.value}</button>
);

export default Square;
