const mongoose = require('mongoose');
const schema = mongoose.Schema;

const sliderSchema = new schema({
    name: String,
    sliderId: Number,
    imageUrl: String
});

const sliderModel = mongoose.model('slider', sliderSchema);

module.exports = sliderModel;