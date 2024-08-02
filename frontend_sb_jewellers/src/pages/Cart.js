import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const adjustQuantity = (id, quantity) => {
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
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div>
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
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
