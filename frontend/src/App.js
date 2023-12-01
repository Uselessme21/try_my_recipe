import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import CreateRecipeForm from './components/create/CreateRecipeForm';
import BrowseRecipes from './components/browse/BrowseRecipes';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/create" element={<CreateRecipeForm />} />
        <Route path="/browse" element={<BrowseRecipes />} />
      </Routes>
      
    </Router>
  );
};

export default App;
