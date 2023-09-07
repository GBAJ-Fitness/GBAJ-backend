'use strict'
require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const mongoDB = process.env.Database;
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3002;
const app = express();

const subscription = require("./subscription");

app.use(cors());
app.use(bodyParser.json());  // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));  // for parsing application/x-www-form-urlencoded


mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}

app.get('/', (request, response) => {
    response.send('Our Server is working');
});

app.delete('./subcriptions:id', async (request, response) => {
    const id = request.params.id;

    try {
        await subscription.findByIdAndDelete(id);
        response.status(204).send('success');
    } catch (error) {
        console.error(error);
        response.status(404).send(`Unable to delete subscription with id ${id}`)
    }
});

app.put('.subcriptions/:id', async (request, response) => {
    try {
        const subId = request.params.id;
        const updatedSubscriptionData = request.body;
        const updatedSubscription = await subscription.findByIdAndUpdate(subId, updatedSubscriptionData, {
            new: true, 
        });
        if (!updatedSubscription) {
            response.status(404).json({ error: 'Member not found' });
            return;
        }
        response.json(updatedSubscription);
    } catch (err) {
        response.status(500).json({ error: "Server Error" });
    }
});

app.listen(3002, () => {
    console.log(`Starting my port on ${3002}`);
});




