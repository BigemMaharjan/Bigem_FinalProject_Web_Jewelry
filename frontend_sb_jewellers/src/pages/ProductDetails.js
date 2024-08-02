// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { id } = useParams(); // Make sure this matches the route parameter
//   const [productD, setProductD] = useState(null);

//   useEffect(() => {
//     console.log("Fetching product details for ID:", id);
//     fetch(`/api/products/${id}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Fetched product data:", data);
//         setProductD(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching product details:", error);
//       });
//   }, [id]);

//   const addToCart = () => {
//     if (productD) {
//       alert(`${productD.name} added to cart!`);
//     } else {
//       alert("No product details available");
//     }
//   };

//   if (!productD) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="product-details">
//       <img src={productD.imageUrl} alt={productD.name} />
//       <h1>{productD.name}</h1>
//       <p>{productD.description}</p>
//       <p>Price: ${productD.price}</p>
//       <button onClick={addToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductDetails = () => {
  const { id } = useParams(); // Make sure this matches the route parameter
  const [productD, setProductD] = useState(null);

  const { dispatch } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching product details for ID:", id);
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

  if (!productD) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <img src={productD.imageUrl} alt={productD.name} />
      <h1>{productD.name}</h1>
      <p>{productD.description}</p>
      <p>Price: ${productD.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
