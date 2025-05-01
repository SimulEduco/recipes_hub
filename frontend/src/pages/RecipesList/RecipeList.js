import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header';
import RecipeSlider from '../../components/RecipeSlider/RecipeSlider';
import categoriesList from '../../data/Categories.json';
import recipesList from '../../data/recipesList.json';
import Footer from '../../components/Footer/Footer';

export default function RecipeList() {
    const { categoryId } = useParams();
    const navigate = useNavigate();

    let categoryDetails = categoriesList.filter((category) => category.id == categoryId);
    let recipesListByCategory = recipesList.filter((recipe) => recipe.categoryId == categoryId);

    const handleClick = (id) => {
        navigate(`/recipe/${id}`);
    }

  return (
      <div>
          <div>
              <Header />
          </div>
          <div className='mt-5'>
              <RecipeSlider />
          </div>
          <div className='container mt-5'>
              <div className='fs-4 fw-bold'>
                  {categoryDetails[0].name} Category Recipes
              </div>
              <div className='row'>
                  {
                      recipesListByCategory.map((recipe) => {
                          return <div className='col-md-3'>
                              <div className='card shadow mt-3'>
                                  <img src={recipe.imageUrl} alt={recipe.name} width="100%" height="200" />
                                  <div className='text-center my-3'>
                                      <span className='fs-5 fw-bold'>{recipe.name}</span>
                                  </div>
                                  <div className='container mb-2'>
                                      <button onClick={() => handleClick(recipe.id)} className='btn btn-outline-success w-100'>Get Recipe</button>
                                  </div>
                              </div>
                          </div>
                      })
                  }
              </div>
          </div>
          <div className='mt-3'>
              <Footer/>
          </div>
     </div>

  )
}
