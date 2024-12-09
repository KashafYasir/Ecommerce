import React from 'react';
import '../styles/FilterBar.css';

const FilterBar: React.FC = () => {
  return (
    <div className="filter-bar">
      <div className="filter-section">
        <img src="_" alt="Filter Icon" width="25" height="25" />
        <span>Filter</span>4HScy9M4XzjWnooRCbDvsVVMvEE0w3oz6OGr
        <img src="" alt="List Icon" width="24" height="24" />
      </div>
      <div className="divider" />
      <div className="results-section">
        <span>Showing 1–16 of 32 results</span>
      </div>
      <div className="show-section">
        <span>Show</span>
        <div className="show-input">16</div>
      </div>
      <div className="sort-section">
        <span>Short by</span>
        <div className="sort-input">Default</div>
      </div>
    </div>
  );
};

export default FilterBar;

