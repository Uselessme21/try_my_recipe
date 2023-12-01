const Recipe = require('../models/recipeModel');


const createRecipe = async (req, res) => {
  try {
    const {recipeName}=req.body;
    const recipeExists=await Recipe.findOne({recipeName})
    
    if(recipeExists){
        return res.status(400).send({message:"recipe already exists"})
    }
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).send(recipe);
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: 'Failed to create recipe' });
  }
};


const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
};


const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      res.status(404).send({ error: 'Recipe not found' });
    }
    res.send(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
};


const filterByCategory = async (req, res) => {
  try {
    const categoryFilter = new RegExp(req.params.category, 'i'); // 'i' for case-insensitive
    const recipes = await Recipe.find({ category: categoryFilter });
    res.send(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
};

const sortByPrice = async (req, res) => {
  try {
    let order = 1;
    if (req.params.order === 'desc') {
      order = -1; 
    } else if (req.params.order !== 'asc') {
      return res.status(400).send({ error: 'Invalid sorting order' });
    }

    const recipes = await Recipe.find().sort({ price: order });
    res.send(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
};


module.exports = {
  createRecipe,
  getAllRecipes,
  deleteRecipe,
  filterByCategory,
  sortByPrice,
};
