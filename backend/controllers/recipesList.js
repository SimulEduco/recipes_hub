const recipesListModel = require('../models/RecipesList');

const getRecipesListData = (req, res) => {
    recipesListModel.find().then((result) => {
        res.send(result);
    })
};

const createRecipesListData = (req, res) => {
    const recipesListData = new recipesListModel(req.body);
    recipesListData.save().then((result) => {
        res.send(result);
    });
};

module.exports = { getRecipesListData, createRecipesListData };