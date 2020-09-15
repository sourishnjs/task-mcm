import React from "react";
import { withRouter } from "react-router-dom";
import "./Search.css";

const Search = (props) => {
  console.log(props);

  return (
    <input
      className="search-bar"
      type="search"
      value={props.search}
      placeholder="Search for applicant"
      onChange={props.handleSearch}
    />
  );
};

export default withRouter(Search);
