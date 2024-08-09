import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/productList">Products</a>
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
