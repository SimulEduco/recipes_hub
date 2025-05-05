import React, { useState ,useEffect} from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
// import recipesList from '../../data/recipesList.json';
import './RecipeDetails.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';


export default function RecipeDetails() {
    const { recipeId } = useParams();
    const [recipesData, setRecipesData] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3500/recipeslist").then((response) => {
            setRecipesData(response.data);
        });
    }, []);

    let recipeDetailsArray = recipesData.filter((recipe) => recipe.recipeId == recipeId);
    let recipeDetails = recipeDetailsArray[0] || {};

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='container mt-5'>
                <div className='bg-dark d-flex'>
                    <div className='p-2'>
                        <img src={recipeDetails.imageUrl} alt={recipeDetails.name} width="500" />
                    </div>
                    <div className='m-5 flex-grow-1 text-light'>
                        <div className='fs-4 fw-bold'>
                            {recipeDetails.name}
                        </div>
                        <hr />
                        <div className='fw-bold fs-5'>
                            <div>
                                Servings : {recipeDetails.servings}
                            </div>
                            <div className='my-2'>
                                Ready In Minutes : {recipeDetails.ReadyInMintues}
                            </div>
                            <div>
                                Healthscore  : {recipeDetails.Healthscore}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="ingredients-tab" data-bs-toggle="tab" data-bs-target="#ingredients" type="button" role="tab" aria-controls="ingredients" aria-selected="true">Ingredients</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="summary-tab" data-bs-toggle="tab" data-bs-target="#summary" type="button" role="tab" aria-controls="summary" aria-selected="false">Summary</button>
                        </li>
                    </ul>
                    <div className="tab-content mt-3" id="myTabContent">
                        <div className="tab-pane fade show active" id="ingredients" role="tabpanel" aria-labelledby="ingredients-tab">
                            {
                                recipeDetails?.ingredients ?  recipeDetails.ingredients.map((ingredient, index) => {
                                    return (
                                        <div className='fs-5'>
                                            {index + 1}.{ingredient}
                                        </div>
                                    );
                                }) : ''
                            }
                        </div>
                        <div className="tab-pane fade" id="summary" role="tabpanel" aria-labelledby="summary-tab">
                            <div className='fs-5'>
                                {recipeDetails.summary}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 text-center'>
                    <div className='fs-4 fw-bold'>
                        Recipe Nutrition
                    </div>
                    <div className='mt-4 d-flex justify-content-center'>
                        <div style={{ width: 100, height: 100 }} className='me-4'>
                            <CircularProgressbar value={recipeDetails?.recipeNutrition?.Calories || 0} text={`${recipeDetails?.recipeNutrition?.Calories || 0}%`} />
                            <div className='fw-bold fs-5'>Calories</div>
                        </div>
                        <div style={{ width: 100, height: 100 }} className='me-4'>
                            <CircularProgressbar value={recipeDetails?.recipeNutrition?.Fat || 0} text={`${recipeDetails?.recipeNutrition?.Fat || 0}%`} />
                            <div className='fw-bold fs-5'>Fat</div>
                        </div>
                        <div style={{ width: 100, height: 100 }} className='me-4'>
                            <CircularProgressbar value={recipeDetails?.recipeNutrition?.Protein || 0} text={`${recipeDetails?.recipeNutrition?.Protein || 0}%`} />
                            <div className='fw-bold fs-5'>Protien</div>
                        </div>
                        <div style={{ width: 100, height: 100 }} className='me-4'>
                            <CircularProgressbar value={recipeDetails?.recipeNutrition?.Manganese || 0} text={`${recipeDetails?.recipeNutrition?.Manganese || 0}%`} />
                            <div className='fw-bold fs-5'>Manganese</div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed fs-4 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Step By Step Recipe Process
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    {
                                        recipeDetails?.steps ? recipeDetails.steps.map((step, index) => {
                                            return (
                                                <div className='fs-5'>
                                                    {index + 1}.{step}
                                                </div>
                                            );
                                        }) : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-4'>
                <Footer />
            </div>
        </div>
    )
}
