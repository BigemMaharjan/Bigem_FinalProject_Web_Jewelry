import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const adjustQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent quantity from going below 1
    dispatch({ type: "ADJUST_QUANTITY", payload: { id, quantity } });
  };

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {state.cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/productList">Continue Shopping</Link>
        </p>
      ) : (
        <ul>
          {state.cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => adjustQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => adjustQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart-item-actions">
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
                <button className="order-now-btn">
                  <Link to="/checkout" className="order-now-link">
                    Order Now
                  </Link>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
