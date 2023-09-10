'use strict'
require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors")
const mongoDB = process.env.DATABASE;
const PORT = process.env.PORT || 3002;
const app = express();

const subscription = require("./subscription");

app.use(cors());
app.use(express.json());

const url = process.env.MONGODB_URI;

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(url);
    console.log('mongoose is connected');
}

app.post('/subscriptions', async (request, response) => {
    try {
        console.log(request.body);
        const newSubscription = await subscription.create(request.body);
        response.status(200).send(newSubscription);

    } catch (error) {
        console.error(error)
        response.status(500).send('Error creating Subscription');
    }
});

app.get('/', (request, response) => {
    response.send('Our Server is working');
});

app.get('/subscriptions', async (request, response) => {
    try {
        const plans = await subscription.find({});
        response.status(200).send(plans);
    } catch (error) {
        console.error(error);
        response.status(404).send(`error occured`);
    }
});

app.delete('/subscriptions/:id', async (request, response) => {
    const id = request.params.id;

    try {
        await subscription.findByIdAndDelete(id);
        response.status(204).send('success');
    } catch (error) {
        console.error(error);
        response.status(404).send(`Unable to delete subscription with id ${id}`)
    }
});

app.put('/subscriptions/:id', async (request, response) => {
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




