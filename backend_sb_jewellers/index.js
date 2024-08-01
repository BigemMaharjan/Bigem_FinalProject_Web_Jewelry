/*
  Name: Bigem Maharjan
  Student Number: 8952906
 */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Connecting routes
// const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://bmaharjan2906:GgaXFm8DOp8wlP6E@finalprojectjewellers.sin7542.mongodb.net/?retryWrites=true&w=majority&appName=FinalProjectJewellers",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error when connecting to MongoDB Atlas", error);
  });

//setting port for running the server
app.listen(PORT, () => {
  console.log(`App listening at ${PORT} port`);
});

module.exports = app;
