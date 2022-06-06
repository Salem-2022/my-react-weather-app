import React from "react";
export default function Form() {
  return (
    <form id="search-form">
      <div className="row">
        <div className="col-9">
          <input
            type="text"
            className="form-control"
            placeHolder="Enter the city's name"
            autoComplete="off"
            autoFocus="on"
            id="search-text-input"
          />
        </div>
        <div className="col">
          <input
            type="submit"
            className="btn btn-primary"
            id="searchButton"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
}
