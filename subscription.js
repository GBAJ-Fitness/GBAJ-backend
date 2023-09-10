const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    Name: {
        type: String, 
    },
    Nutrition: {
        type: String,
    }, 
    Days:{
        type: String,
    },
    Email:{
        type: String,
    },
});

const subscription = mongoose.model('subscription', Schema);


module.exports = subscription;