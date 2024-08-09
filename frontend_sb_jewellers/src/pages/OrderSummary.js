import React from "react";

function OrderSummary() {
  const checkoutData = JSON.parse(sessionStorage.getItem("checkoutData"));

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      {checkoutData ? (
        <div>
          <p>
            <strong>Full Name:</strong> {checkoutData.fullName}
          </p>
          <p>
            <strong>Email:</strong> {checkoutData.email}
          </p>
          <p>
            <strong>Address:</strong> {checkoutData.address}
          </p>
          <p>
            <strong>Town/City:</strong> {checkoutData.townCity}
          </p>
          <p>
            <strong>State:</strong> {checkoutData.state}
          </p>
          <p>
            <strong>Zip Code:</strong> {checkoutData.zipCode}
          </p>
          <p>
            <strong>Phone Number:</strong> {checkoutData.phoneNumber}
          </p>
          <p>
            <strong>Item:</strong> {checkoutData.itemName}
          </p>
          <p>
            <strong>Price:</strong> ${checkoutData.itemPrice}
          </p>
          <p>
            <strong>Quantity:</strong> {checkoutData.itemQuantity}
          </p>
          <p>
            <strong>Total:</strong> $
            {checkoutData.itemPrice * checkoutData.itemQuantity}
          </p>
        </div>
      ) : (
        <p>No order information available.</p>
      )}
    </div>
  );
}

export default OrderSummary;
