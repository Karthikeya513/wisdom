import React from 'react';
import './index.css';

const SortOptions = ({ onSortChange }) => {
  return (
    <div className="sort-options">
      <button onClick={() => onSortChange('asc')}>Sort A-Z</button>
      <button onClick={() => onSortChange('desc')}>Sort Z-A</button>
    </div>
  );
};

export default SortOptions;
