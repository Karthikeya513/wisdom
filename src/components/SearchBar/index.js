import React from 'react';
import './index.css';

const SearchBar = ({ searchValue, onSearchChange }) => {
  return (
    <div className='search'>
    <input
      type="text"
      className="search-bar"
      placeholder="Search by name"
      value={searchValue}
      onChange={(e) => onSearchChange(e.target.value)}
    />
    </div>
  );
};

export default SearchBar;
