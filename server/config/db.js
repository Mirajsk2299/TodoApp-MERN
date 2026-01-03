const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo Connected");
  } catch (error) {
    console.log("Mongo Connection Failed", error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
