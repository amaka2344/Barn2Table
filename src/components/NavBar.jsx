import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white py-4 px-6 flex justify-between items-center">
      {/* Left Section: Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">BARN2TABLE</Link>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="flex items-center space-x-4">
        <div className="flex items-stretch border border-gray-300 rounded-lg overflow-hidden">
          <select
            className="px-4 py-2 bg-white text-gray-700 border-none focus:outline-none"
            defaultValue="Abuja"
          >
            <option value="Abuja">Abuja</option>
            <option value="Lagos">Lagos</option>
            <option value="Porthacourt">Porthacourt</option>
            <option value="Calabar">Calabar</option>
          </select>

          <input
            type="text"
            placeholder="Search for products, categories, or farmers..."
            className="flex-grow text-black px-4 py-2  w-[400px] border-l border-r focus:outline-none"
          />
          <button className="bg-yellow-500 text-white px-4 py-2 flex items-center">
            <FaSearch className="mr-2" /> Search
          </button>
        </div>

        {/* Cart Icon */}
        <div className="text-lg font-bold cursor-pointer flex items-center space-x-2">
          <FaShoppingCart />
          <span>My Cart</span>
        </div>
      </div>

      {/* Right Section: Buttons */}
      <div className="space-x-4">
        <Link to="/login">
          <button className="bg-white text-green-600 px-4 py-2 rounded-lg">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-yellow-500 px-4 py-2 rounded-lg">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
