const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sliderRouter = require('./routes/sliderRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const recipesListRouter = require('./routes/recipesList');

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://simuleduco:Simuleduco9110@simuleduco.m3mkzoy.mongodb.net/recipes_hub?retryWrites=true&w=majority&appName=SImuleduco").then(() => {
    console.log("Db Connected Successfully");
});

app.listen(3500, () => {
    console.log("Server Running Peacefully");
});

app.use('/slider', sliderRouter);

app.use('/category', categoryRouter);

app.use('/recipeslist', recipesListRouter);

