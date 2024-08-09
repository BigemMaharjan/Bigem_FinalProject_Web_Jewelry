import React, { useState } from "react";

function Login() {
  // State to manage email and password input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      } else {
        // Handle error response
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
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
          </div>

          {/* Submit Button */}
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
