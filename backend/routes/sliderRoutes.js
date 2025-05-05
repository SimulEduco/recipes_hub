const express = require('express');
const { getSliderData, createSliderData } = require('../controllers/sliderController');
const router = express.Router();

router.get('/', getSliderData);

router.post('/', createSliderData);

module.exports = router;