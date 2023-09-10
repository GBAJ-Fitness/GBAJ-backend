require('dotenv').config();
const mongoose = require('mongoose');
const Subscription = require('./subscription');


const url = process.env.MONGODB_URI;


main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(url);
  console.log('mongoose is connected');

  let s1 = await Subscription.create({
    Name: "Subscription",
    Nutrition: "Banana",
    Days: "3",
    Email: "Test@user.com"

  });

  console.log(s1);

  await Subscription.create({
    Name: "Nutrition",
    Nutrition: "wholegrain breads and cereals, leafy green vegetables, fruit, lean meat, and low-fat dairy products ",
    Days: "5",
    Email:"Test@user.com"
  });

  console.log('Read Nutrition');

  await Subscription.create({
    Name: "Workout Day",
    Nutrition: "Sirloin steak, Ground beef, Chicken breast, Salmon, Tilapia, Oatmeal, rice",
    Days: "7",
    Email:"Test@user.com"
  });

  console.log('Read Workout')
  await mongoose.disconnect()
}