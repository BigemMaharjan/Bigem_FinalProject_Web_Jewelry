/*
  Name: Bigem Maharjan
  Student Number: 8952906
 */

const express = require("express");
const cors = require("cors");
const path = require("path");

//Connecting routes
const productRouter = require("./routes/productRoutes");
const categoryRouter = require("./routes/categoryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

//Importing the connectDB
const connectDB = require("./config/db");
connectDB();

// // Serve static files from the React app

// app.use(express.static(path.join(__dirname, "../frontend_sb_jewellers/build")));

// // Catch-all handler to send back React's index.html for any request not handled by the server
// app.get("*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../frontend_sb_jewellers/build", "index.html")
//   );
// });

// using the router with the "/api" prefix
app.use("/api", productRouter);
app.use("/api", categoryRouter);

//setting port for running the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

module.exports = app;
