import React from 'react';

function FilterBar({ filter, setFilter, searchQuery, setSearchQuery }) {
  return (
    <div className="filters-container">
      <div className="filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'lost' ? 'active' : ''} onClick={() => setFilter('lost')}>Lost</button>
        <button className={filter === 'found' ? 'active' : ''} onClick={() => setFilter('found')}>Found</button>
      </div>
      <div className="search-box">
        <input 
          type="text" 
          placeholder="🔍 Search items..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default FilterBar;
