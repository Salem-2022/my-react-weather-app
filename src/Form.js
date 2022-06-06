import React from "react";
export default function Form() {
  return (
    <form className="search-form">
      <div className="row">
        <div className="col-9">
          <input
            type="text"
            className="form-control search-text-input"
            placeholder="Enter the city's name"
            autoComplete="off"
            autoFocus="on"
          />
        </div>
        <div className="col">
          <input
            type="submit"
            className="btn btn-primary searchButton"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
}
