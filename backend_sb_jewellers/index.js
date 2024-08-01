/*
  Name: Bigem Maharjan
  Student Number: 8952906
 */

const express = require("express");
const cors = require("cors");

//Connecting routes
const productRouter = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

//Importing the connectDB
const connectDB = require("./config/db");
connectDB();

// using the router with the "/api" prefix
app.use("/api", productRouter);

//setting port for running the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening at ${PORT} port`);
});

module.exports = app;
