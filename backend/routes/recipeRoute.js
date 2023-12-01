const express = require('express');
const {
  createRecipe,
  getAllRecipes,
  deleteRecipe,
  filterByCategory,
  sortByPrice,
} = require('../controller/recipeController');

const router = express.Router();

router.post('/recipe', createRecipe);
router.get('/recipe', getAllRecipes);
router.delete('/recipe/:id', deleteRecipe);
router.get('/recipe/filter/:category', filterByCategory);
router.get('/recipe/sort/:order', sortByPrice);

module.exports = router;
