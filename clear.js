const mongoose = require("mongoose");
const subscription = require("./subscription");
require("dotenv").config();


async function clear() {
    try {
        await subscription.deleteMany({});