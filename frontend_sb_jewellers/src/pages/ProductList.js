import React, { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch categories on the start of the page
  useEffect(() => {
    fetch("/api/category")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  //Fetching the data as the button is clicked
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `/api/products${
          selectedCategory ? `?category=${selectedCategory}` : ""
        }`
      );
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, [selectedCategory]);

  // Creating the button handler
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main>
      <h1 class="text-center text-info">Let's Look Wealthy</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          {/* Listing the categories */}
          <div className="col-md-3">
            <button
              className={`btnCate w-100 mb-4 ${
                selectedCategory === "" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("")}
            >
              All Products
            </button>

            {categories.map((category) => (
              <button
                key={category._id}
                className={`btnCate w-100 mb-4 ${
                  selectedCategory === category._id ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category._id)}
              >
                {category.categoryName}
              </button>
            ))}
          </div>

          {/* Displaying the cards */}
          <div className="col-md-9 pGall">
            {products.map((product) => (
              <div className="pCont" key={product._id}>
                <a href={`/products/${product._id}`}>
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductList;
