import React, { useState } from "react";

function Register() {
  // State to manage name, email, and password input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // State to manage validation errors

  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");

  // Function to validate the form
  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!name) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is not valid";
    }

    // Validate password
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }

    // Create an object with the name, email, and password
    const registerData = {
      name: name,
      email: email,
      password: password,
      isAdmin: true,
    };

    try {
      // Send a POST request to the backend
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token here
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("Registration successful:", data);

        // Show an alert message
        alert("Registration successful!");
      } else {
        // Handle error response
        console.error("Registration failed:", response.statusText);
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <main>
      <section className="contactForm">
        <form onSubmit={handleSubmit}>
          <h1>Register Page</h1>

          {/* Name */}
          <div className="input-control">
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="input-control">
            <label htmlFor="email">E-mail*</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="xyz@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="input-control">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button className="btn" type="submit">
            Register
          </button>
        </form>
      </section>
    </main>
  );
}

export default Register;
