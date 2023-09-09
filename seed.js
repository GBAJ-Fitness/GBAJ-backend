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

  await Subscription.create({
    Title: "Nutrition",
    Nutrition: "wholegrain breads and cereals, leafy green vegetables, fruit, lean meat, and low-fat dairy products ",
    Days: "5"

  });

  console.log('Read Nutrition');

  await Subscription.create({
    Title: "Workout Day",
    Nutrition: "Sirloin steak, Ground beef, Chicken breast, Salmon, Tilapia, Oatmeal, rice",
    Days: "7"
  });

  console.log('Read Workout')
  await mongoose.disconnect()
}