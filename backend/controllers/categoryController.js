const categoryModel = require('../models/Category');

const getCategoryData = (req, res) => {
    categoryModel.find().then((result) => {
        res.send(result);
    })
};

const createCategoryData = (req, res) => {
    const categoryData = new categoryModel(req.body);
    categoryData.save().then((result) => {
        res.send(result);
    });
};

module.exports = { getCategoryData, createCategoryData };