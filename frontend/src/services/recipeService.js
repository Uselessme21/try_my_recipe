import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090/api/recipe';

const recipeService = {

  createRecipe: async (recipeData) => {
    try {
      const response = await axios.post(API_BASE_URL, recipeData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getAllRecipes: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  deleteRecipe: async (recipeId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${recipeId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },


  filterByCategory: async (category) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/filter/${category}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },


  sortByPrice: async (order) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/sort/${order}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default recipeService;
