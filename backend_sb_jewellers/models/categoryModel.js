const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },

  categoryDesc: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});

// Creating a model that is based on the Schema
const Category = mongoose.model("Category", CategorySchema);

//Exporting a model
module.exports = Category;
