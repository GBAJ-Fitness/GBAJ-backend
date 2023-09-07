require('dotenv').config();
const mongoose = require('mongoose');
const Subscription = require('./subscription');


const url = process.env.MONGODB_URI;


main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(url);
  console.log('mongoose is connected');

  let s1 = await Subscription.create({
    Title: "Subscription",
    Nutrition: "Banana",
    Days: "3"

  });

  console.log(s1);
  await mongoose.disconnect()
}