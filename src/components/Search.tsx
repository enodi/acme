import React from "react";

const Search: React.FC<{ filterByFullname: any }> = ({ filterByFullname }) => (
  <input
    placeholder="Search for a new chat..."
    className="search"
    onChange={filterByFullname}
  />
);

export default Search;
