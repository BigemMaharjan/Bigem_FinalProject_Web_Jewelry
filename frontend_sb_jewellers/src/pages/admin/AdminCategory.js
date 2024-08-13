import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminCategory() {
  const [category, setCategory] = useState([]);

  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");

  // Initialize navigate
  const navigate = useNavigate();

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
        setCategory(data);
      })
      .catch((error) => {
        console.error("Error fetching category details:", error);
      });
  });

  //Loader
  if (!category) {
    return <div>Loading...</div>;
  }

  // Add Function
  const handleAddCategory = () => {
    // Redirect to the home page
    navigate("/addCategory");
  };

  // Update Function
  const handleUpdateCategory = (id) => {
    navigate(`/updateCategory/${id}`);
  };

  // Delete Function
  const handleDeleteCategory = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (confirmDelete) {
      fetch(`http://localhost:5000/api/category/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token here
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete the category");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error deleting the category.");
        });
    }
  };

  return (
    <div className="product-table-container">
      <div className="top-bar">
        <h2>Category List</h2>
        <button onClick={handleAddCategory}>Add New Category</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping the category to get the data easily */}
          {category.map((category) => (
            <tr key={category._id}>
              <td>{category.categoryName}</td>
              <td>{category.categoryDesc}</td>
              <td>
                <img
                  src={category.imageUrl}
                  alt={category.CategoryName}
                  className="product-image"
                />
              </td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleUpdateCategory(category._id)}
                >
                  Update
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDeleteCategory(category._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminCategory;
