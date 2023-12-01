import React, { useState, useEffect } from 'react';
import RecipeCard from '../common/RecipeCard';
import FilterAndSort from './FilterAndSort';
import recipeService from '../../services/recipeService';

const BrowseRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    
    const fetchRecipes = async () => {
      try {
        const data = await recipeService.getAllRecipes();
        setRecipes(data);
        setFilteredRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);

  const handleDelete = async (recipeId) => {
    try {
      await recipeService.deleteRecipe(recipeId);
      setRecipes(recipes.filter((recipe) => recipe._id !== recipeId));
      setFilteredRecipes(filteredRecipes.filter((recipe) => recipe._id !== recipeId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <FilterAndSort recipes={recipes} setFilteredRecipes={setFilteredRecipes} />
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BrowseRecipes;
