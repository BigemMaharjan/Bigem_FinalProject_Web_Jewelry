const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
});

// Creating a model that is based on the Schema
const Product = mongoose.model("Product", ProductSchema);

//Exporting a model
module.exports = Product;
