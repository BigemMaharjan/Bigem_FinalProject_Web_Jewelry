import React, { useState, useEffect } from "react";

function AddProducts() {
  // GET Method
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/api/category")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched category data:", data);
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching category details:", error);
      });
  });

  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");

  // POST Method
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategoryID] = useState("");
  const [errors, setErrors] = useState({});

  // Function to validate the form
  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!name) {
      newErrors.name = "Name is required";
    }

    // Validate Price
    if (!price) {
      newErrors.price = "Price is required";
    }

    // Validate Description
    if (!description) {
      newErrors.description = "Description is required";
    }

    // Validate Quantity
    if (!quantity) {
      newErrors.quantity = "Quantity is required";
    }

    // Validate Image Url
    if (!imageUrl) {
      newErrors.imageUrl = "ImageUrl is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }

    // Create an object with the name, email, and password
    const addNewProductData = {
      name: name,
      price: price,
      description: description,
      quantity: quantity,
      imageUrl: imageUrl,
      category: category,
    };
    try {
      // Send a POST request to the backend
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token here
        },
        body: JSON.stringify(addNewProductData),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("Product Added Successfully:", data);

        // Show an alert message
        alert("Product Add successful!");
        // Clear the form fields
        setName("");
        setPrice("");
        setDescription("");
        setQuantity("");
        setImageUrl("");
        setCategoryID("");
        setErrors({});
      } else {
        // Handle error response
        console.error("Product Add failed:", response.statusText);
        alert("Product Add failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <main>
      <section className="contactForm">
        <form onSubmit={handleSubmit}>
          <h1>Add New Page</h1>

          {/* Name */}
          <div className="input-control">
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="input-control">
            <label htmlFor="price">Price*</label>
            <input
              id="price"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && <p className="error">{errors.price}</p>}
          </div>

          <div className="input-control">
            <label htmlFor="description">Description*</label>
            <input
              id="description"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.price && <p className="error">{errors.price}</p>}
          </div>

          <div className="input-control">
            <label htmlFor="quantity">Quantity*</label>
            <input
              id="quantity"
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            {errors.quantity && <p className="error">{errors.quantity}</p>}
          </div>

          {/* Image */}
          <div className="input-control">
            <label htmlFor="imageUrl">ImageUrl*</label>
            <input
              id="imageUrl"
              type="text"
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            {errors.imageUrl && <p className="error">{errors.imageUrl}</p>}
          </div>

          {/* Category DropDown */}
          <div className="input-control">
            <label htmlFor="dropdown">Select a Category:</label>
            <select
              id="dropdown"
              value={category}
              onChange={(e) => setCategoryID(e.target.value)}
            >
              <option value="">--Select a Category--</option>
              {categories.map((categoryData) => (
                <option key={categoryData._id} value={categoryData._id}>
                  {categoryData.categoryName}
                </option>
              ))}
            </select>
            {errors.category && <p className="error">{errors.category}</p>}
          </div>

          {/* Submit Button */}
          <button className="btn" type="submit">
            Register
          </button>
        </form>
      </section>
    </main>
  );
}

export default AddProducts;
