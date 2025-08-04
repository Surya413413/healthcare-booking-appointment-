import React from 'react';
import { useAppContext } from '../../context/AppContext';

const SearchBar: React.FC = () => {
  const { searchTerm, setSearchTerm } = useAppContext();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search doctors by name or specialization..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="search-icon">🔍</div>
    </div>
  );
};

export default SearchBar;
