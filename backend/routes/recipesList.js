const express = require('express');
const { getRecipesListData, createRecipesListData } = require('../controllers/recipesList');
const router = express.Router();

router.get('/', getRecipesListData);

router.post('/', createRecipesListData);

module.exports = router;