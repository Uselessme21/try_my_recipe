import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/create">Create Recipe</Link>
        </li>
        <li>
          <Link to="/">Browse Recipes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
