import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // This is the toggle button
  const [isLoggedIn, setIsLoggedIn] = useState(false); //This is checking whether the user is logged in or not

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Initialize navigate
  const navigate = useNavigate();

  // checking if admin or user is logged in by checking localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);

    // Optionally redirect to home page after logout
    navigate("/");
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div class="logo">
            <h2>SB Jewellers</h2>
          </div>
          {/* Using ternary operator */}
          <ul className={isOpen ? "nav-link active" : "nav-link"}>
            {/* checking whether the admin is logged in or not to make changes in the nav bar  */}
            {isLoggedIn ? (
              <>
                <li>
                  <a href="/adminCategory">Category</a>
                </li>

                <li>
                  <a href="/adminProduct">Product</a>
                </li>

                <li>
                  <a href="/register">Register</a>
                </li>
                {/* Logout */}
                <li>
                  <a href="/" onClick={handleLogout}>
                    Logout
                  </a>
                </li>

                <li>
                  <a href="/">Welcome</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="/productList">Products</a>
                </li>

                <li>
                  <a href="/about">About</a>
                </li>

                <li>
                  <a href="/cart">Cart</a>
                </li>

                <li>
                  <a href="/contact">Contact Us</a>
                </li>

                <li>
                  <a href="/login">Login</a>
                </li>
              </>
            )}
          </ul>
          {/* Using the faBars from the react icon */}
          <div className="icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
