import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateCategory() {
  const { id } = useParams(); // Making sure this matches the route parameter

  // Initialize navigate
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("Fetching product details for ID:", id);
    fetch(`/api/category/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched category data:", data);
        setCategoryName(data.categoryName);
        setCategoryDesc(data.categoryDesc);
        setImageUrl(data.imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching category details:", error);
      });
  }, [id]);

  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");

  // PUT Method
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
    const updateCategoryData = {
      categoryName: categoryName,
      categoryDesc: categoryDesc,
      imageUrl: imageUrl,
    };

    try {
      // Send a PUT request to the backend
      const response = await fetch(`/api/category/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token here
        },
        body: JSON.stringify(updateCategoryData),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("Category Updated Successfully:", data);

        // Show an alert message
        alert("Category Update successful!");

        navigate("/adminCategory");
      } else {
        // Handle error response
        console.error("Category Update failed:", response.statusText);
        alert("Category Update failed. Please try again.");
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
          <h1>Update Category</h1>

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
            Update
          </button>
        </form>
      </section>
    </main>
  );
}

export default UpdateCategory;
