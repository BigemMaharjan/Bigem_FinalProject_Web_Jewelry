const express = require("express");
const cRouter = express.Router();
const Category = require("../models/CategoryModel");

//Creating Category API

// Implementating post method to the categories
cRouter.post("/category", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const CategorySaved = await newCategory.save();
    res.status(201).json(CategorySaved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Implementating get method to retrieve all the categories
cRouter.get("/category", async (req, res) => {
  try {
    const retrieveCategory = await Category.find();
    res.json(retrieveCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Implementating get using id to retrieve a single category
cRouter.get("/category/:id", async (req, res) => {
  try {
    const retrieveCategoryById = await Product.findById(req.params.id);
    if (!retrieveCategoryById) {
      return res.status(404).json({ message: "No Category can be found" });
    }
    res.json(retrieveCategoryById); //Displaying the data
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Implementating delete using id to remove a single categories
cRouter.delete("/category/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "No Category can be found" });
    }
    res.json({ message: "Category deleted successfully." }); //Displaying the successful message
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = cRouter;
