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

  quantity: {
    type: Number,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  // category field (camelCase) referring to Category model
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

// Creating a model that is based on the Schema
const Product = mongoose.model("Product", ProductSchema);

//Exporting a model
module.exports = Product;
