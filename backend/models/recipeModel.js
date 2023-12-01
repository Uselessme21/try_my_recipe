const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeName: String,
  category: String,
  ingredients: String,
  instructions: String,
  price: Number,
},{versionkey:false});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
