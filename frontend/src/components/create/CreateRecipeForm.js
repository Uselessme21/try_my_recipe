import React, { useState } from 'react';
import recipeService from '../../services/recipeService';

const CreateRecipeForm = () => {
  const [formData, setFormData] = useState({
    recipeName: '',
    category: '',
    ingredients: '',
    instructions: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await recipeService.createRecipe(formData);
      
      alert('Recipe created successfully!');
    } catch (error) {
      console.error(error);
      
      alert('Error creating recipe. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input
            type="text"
            name="recipeName"
            value={formData.recipeName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category:
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Starters">Starters</option>
            <option value="Main Course">Main Course</option>
            <option value="Desserts">Desserts</option>
          </select>
        </label>

        <label>
          Ingredients:
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Instructions:
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRecipeForm;
