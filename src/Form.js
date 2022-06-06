import React from "react";
export default function Form() {
  return (
    <form id="search-form">
      <div className="row">
        <div className="col-9">
          <input
            type="text"
            class="form-control"
            placeholder="Enter the city's name"
            autocomplete="off"
            autofocus="on"
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
