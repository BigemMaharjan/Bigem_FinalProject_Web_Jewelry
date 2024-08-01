const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bmaharjan2906:GgaXFm8DOp8wlP6E@finalprojectjewellers.sin7542.mongodb.net/?retryWrites=true&w=majority&appName=FinalProjectJewellers",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error when connecting to MongoDB Atlas", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
