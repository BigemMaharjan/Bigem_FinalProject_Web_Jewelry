import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminProduct() {
  const [products, setProducts] = useState([]);

  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");

  // Initialize navigate
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched product data:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  });

  //Loader
  if (!products) {
    return <div>Loading...</div>;
  }

  // Add Function
  const handleAddProduct = () => {
    // Redirect to the Add Product page
    navigate("/addProducts");
  };

  // Update Function
  const handleUpdateProduct = (id) => {
    navigate(`/updateProducts/${id}`);
  };

  // Delete Function
  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token here
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete the product");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error deleting the product.");
        });
    }
  };

  return (
    <div className="product-table-container">
      <div className="top-bar">
        <h2>Product List</h2>
        <button onClick={handleAddProduct}>Add New Product</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />
              </td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleUpdateProduct(product._id)}
                >
                  Update
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDeleteProduct(product._id)}
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

export default AdminProduct;
