const mongoose = require('mongoose');
const schema = mongoose.Schema;

const recipeListSchema = new schema({
    name: String,
    categoryId: Number,
    recipeId: Number,
    imageUrl: String
});

const recipeListModel = mongoose.model('recipesList', recipeListSchema);

module.exports = recipeListModel;