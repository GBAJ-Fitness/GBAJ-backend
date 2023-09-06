'use strict'
require("dotenv").config();
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Our Server is working');
}); 

app.listen(3002, () => {
    console.log(`Starting my port on ${3002}`);
});
