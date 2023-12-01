const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const connection=require('./config/db');
const RecipeRoute=require('./routes/recipeRoute')




app.use('/api', RecipeRoute)

app.listen(PORT, async() => {
    await connection
  console.log(`Server is running on port ${PORT}`);
});
