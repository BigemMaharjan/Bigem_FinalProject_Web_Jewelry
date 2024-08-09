import React, { useState } from "react";

function Register() {
  // State to manage name, email, and password input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the name, email, and password
    const registerData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      // Send a POST request to the backend
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("Registration successful:", data);
      } else {
        // Handle error response
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
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
          </div>

          {/* Submit Button */}
          <button type="submit">Register</button>
        </form>
      </section>
    </main>
  );
}

export default Register;
