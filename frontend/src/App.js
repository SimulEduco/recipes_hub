import React from 'react';
import Home from './pages/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeList from './pages/RecipesList/RecipeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes-list/:categoryId" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
      
      
   </div>
  )
}
