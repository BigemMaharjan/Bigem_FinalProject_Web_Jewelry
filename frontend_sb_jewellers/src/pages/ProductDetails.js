import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductDetails = () => {
  const { id } = useParams(); // Making sure this matches the route parameter
  const [productD, setProductD] = useState(null);

  const { dispatch } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("Fetching product details for ID:", id);
    fetch(`/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched product data:", data);
        setProductD(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const addToCart = () => {
    if (productD) {
      dispatch({ type: "ADD_TO_CART", payload: productD });
      navigate("/cart");
    } else {
      alert("No product details available");
    }
  };

  //Loader
  if (!productD) {
    return <div>Loading...</div>;
  }

  return (
    <div className="proDet">
      <div className="details">
        <div className="big-img">
          {/* Image */}
          <img src={productD.imageUrl} alt={productD.name} />
        </div>

        <div className="box">
          <div className="row">
            {/* Name */}
            <h2>{productD.name}</h2>
            {/* Price */}
            <h2>${productD.price}</h2>
          </div>

          {/* Description */}
          <p>Quantity: {productD.quantity}</p>
          <p>{productD.description}</p>

          {/* Add to cart button */}
          <button className="cartBtn" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
