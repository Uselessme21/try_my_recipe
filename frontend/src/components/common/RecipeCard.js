import React from 'react';

const RecipeCard = ({ recipe, onDelete }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.recipeName}</h3>
      <p>Category: {recipe.category}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
      <p>Price: {recipe.price}</p>
      <button onClick={() => onDelete(recipe._id)}>Delete</button>
    </div>
  );
};

export default RecipeCard;
