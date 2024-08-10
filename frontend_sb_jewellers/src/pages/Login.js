import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  // State to manage email and password input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // State to manage validation errors

  // Initialize navigate
  const navigate = useNavigate();

  // Function to validate the form
  const validateForm = () => {
    const newErrors = {};

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

    // Create an object with the email and password
    const loginData = {
      email: email,
      password: password,
    };

    try {
      // Send a POST request to the backend
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("Login successful:", data);

        // Store token and user info in localStorage or state
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect to the home page
        navigate("/adminCategory");
      } else {
        // Handle error response
        console.error("Login failed:", response.statusText);
        setErrors({ server: "Login failed. Please check your credentials." });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ server: "An error occurred. Please try again later." });
    }
  };

  return (
    <main>
      <section className="contactForm">
        <form onSubmit={handleSubmit}>
          <h1>Login Page</h1>

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
            <label htmlFor="password">Password:</label>
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
            Login
          </button>

          {/* Server-side errors */}
          {errors.server && <p className="error">{errors.server}</p>}
        </form>
      </section>
    </main>
  );
}

export default Login;
