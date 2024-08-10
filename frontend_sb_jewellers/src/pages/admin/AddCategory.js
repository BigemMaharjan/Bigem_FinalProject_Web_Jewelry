import React, { useState } from "react";

function AddCategory() {
  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");
  const [categoryName, setCategoryName] = useState("");
  const [categoryDesc, setCategoryDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState({});

  // Function to validate the form
  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!categoryName) {
      newErrors.categoryName = "Name is required";
    }

    // Validate Price
    if (!categoryDesc) {
      newErrors.categoryDesc = "Price is required";
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

    // Create an object
    const addNewCategoryData = {
      categoryName: categoryName,
      categoryDesc: categoryDesc,
      imageUrl: imageUrl,
    };
    try {
      // Send a POST request to the backend
      const response = await fetch(
        "http://localhost:5000/api/category/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token here
          },
          body: JSON.stringify(addNewCategoryData),
        }
      );

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("Category Added Successfully:", data);

        // Show an alert message
        alert("Category Add successful!");
        // Clear the form fields
        setCategoryName("");
        setCategoryDesc("");
        setImageUrl("");
        setErrors({});
      } else {
        // Handle error response
        console.error("Category Add failed:", response.statusText);
        alert("Category Add failed. Please try again.");
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
          <h1>Add New Category</h1>

          {/* Name */}
          <div className="input-control">
            <label htmlFor="categoryName">Name*</label>
            <input
              id="categoryName"
              type="text"
              name="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            {errors.categoryName && (
              <p className="error">{errors.categoryName}</p>
            )}
          </div>

          <div className="input-control">
            <label htmlFor="categoryDesc">Category Description*</label>
            <input
              id="categoryDesc"
              type="text"
              name="categoryDesc"
              value={categoryDesc}
              onChange={(e) => setCategoryDesc(e.target.value)}
            />
            {errors.categoryDesc && (
              <p className="error">{errors.categoryDesc}</p>
            )}
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

          {/* Submit Button */}
          <button className="btn" type="submit">
            Add
          </button>
        </form>
      </section>
    </main>
  );
}

export default AddCategory;
