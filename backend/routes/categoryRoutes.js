const express = require('express');
const { getCategoryData, createCategoryData } = require('../controllers/categoryController');
const router = express.Router();

router.get('/', getCategoryData);

router.post('/', createCategoryData);

module.exports = router;