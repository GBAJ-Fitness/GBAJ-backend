'use strict'
require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const mongoDB = process.env.Database;
const PORT = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/', (request, response) => {
    response.send('Our Server is working');
}); 

app.listen(3002, () => {
    console.log(`Starting my port on ${3002}`);
});
