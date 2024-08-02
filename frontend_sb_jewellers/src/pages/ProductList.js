import React, { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <div className="gallery">
        {products.map((product) => (
          <div className="content" key={product._id}>
            <a href={`/products/${product._id}`}>
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ProductList;
