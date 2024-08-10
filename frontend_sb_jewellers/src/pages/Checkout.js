import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CheckoutForm() {
  //   const [errors, setErrors] = useState({});
  const location = useLocation();
  const navigate = useNavigate(); // Updated to useNavigate
  const item = location.state?.item || {};

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    townCity: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    itemName: item.name || "",
    itemPrice: item.price || 0,
    itemQuantity: item.quantity || 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("checkoutData", JSON.stringify(formData));
    navigate("/orderSummary");
    //   }
  };

  return (
    <main>
      <section className="checkoutForm">
        <form onSubmit={handleSubmit}>
          <h1>Checkout Form</h1>

          {/* Row 1: Full Name and Email */}
          <div className="roww">
            <div className="input-controll">
              <label>Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="input-controll">
              <label>E-mail*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 2: Address and Town/City */}
          <div className="row">
            <div className="input-controll">
              <label>Address*</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="input-controll">
              <label>Town/City*</label>
              <input
                type="text"
                name="townCity"
                value={formData.townCity}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 3: State and ZipCode */}
          <div className="row">
            <div className="input-controll">
              <label>State*</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            <div className="input-controll">
              <label>ZipCode*</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 4: Phone Number */}
          <div className="row">
            <div className="input-controll">
              <label>Phone Number*</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 5: Item Name, Price, and Quantity */}
          <div className="row">
            <div className="input-controll">
              <label>Item Name</label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                readOnly
              />
            </div>

            <div className="input-controll">
              <label>Price</label>
              <input
                type="text"
                name="itemPrice"
                value={formData.itemPrice}
                readOnly
              />
            </div>

            <div className="input-controll">
              <label>Quantity</label>
              <input
                type="number"
                name="itemQuantity"
                value={formData.itemQuantity}
                readOnly
              />
            </div>
          </div>

          <button className="btn" type="submit">
            Place Order
          </button>
        </form>
      </section>
    </main>
  );
}

export default CheckoutForm;
