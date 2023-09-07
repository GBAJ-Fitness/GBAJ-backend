const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    Title: {
        type: String, 
    },
    Nutrition: {
        type: String,
    }, 
    Days:{
        type: String,
    },
});

const subscription = mongoose.model('subscription', Schema);


module.exports = subscription;