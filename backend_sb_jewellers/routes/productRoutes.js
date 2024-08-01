const express = require("express");
const pRouter = express.Router();
const Product = require("../models/productModel");

//Creating API Events

// Implementating get value to retrieve all the products
pRouter.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Implementating get value to retrieve all the products
pRouter.get("/products", async (req, res) => {
  try {
    const retrieveProducts = await Product.find();
    res.json(retrieveProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Implementating get using id to retrieve a single product
pRouter.get("/products/:id", async (req, res) => {
  try {
    const retrieveProductsById = await Product.findById(req.params.id);
    if (!retrieveProductsById) {
      return res.status(404).json({ message: "No Products can be found" });
    }
    res.json(retrieveProductsById); //Displaying the data
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Implementing update by it's ID to update a single Product
pRouter.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "No Product can be found" });
    }
    res.json(updatedProduct); //Displaying the updated data
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Implementating delete using id to remove a single Product
pRouter.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "No Product can be found" });
    }
    res.json({ message: "Event deleted successfully." }); //Displaying the successful message
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = pRouter;
