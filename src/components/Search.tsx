import React from "react";

interface SearchProps {
  filterByFullname: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ filterByFullname }) => (
  <input
    placeholder="Search for a new chat..."
    className="search"
    onChange={filterByFullname}
  />
);

export default Search;
