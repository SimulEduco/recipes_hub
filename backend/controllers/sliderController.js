const sliderModel = require('../models/Slider');

const getSliderData = (req, res) => {
    sliderModel.find().then((result) => {
        res.send(result);
    })
};

const createSliderData = (req, res) => {
    const sliderData = new sliderModel(req.body);
    sliderData.save().then((result) => {
        res.send(result);
    });
};

module.exports = { getSliderData, createSliderData };