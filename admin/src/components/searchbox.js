import React, { Component } from "react";

function Searchbox({ keyword, setKeyword }) {
  return (
    <div class="row">
      <div class="input-group">
        <input
          class="form-control py-2 border-right-0 border"
          type="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <span class="input-group-append">
          <div class="input-group-text bg-transparent">
            <i class="fa fa-search"></i>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Searchbox;
