import React, { useState } from 'react';
import recipeService from '../../services/recipeService';

const FilterAndSort = ({ recipes, setFilteredRecipes }) => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFilter = async () => {
    try {
      const filteredData = await recipeService.filterByCategory(categoryFilter);
      setFilteredRecipes(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSort = async () => {
    try {
      const sortedData = await recipeService.sortByPrice(sortOrder);
      setFilteredRecipes(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label>
        Filter by Category:
        <input
          type="text"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </label>

      <label>
        Sort by Price:
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button onClick={handleSort}>Sort</button>
      </label>
    </div>
  );
};

export default FilterAndSort;
