import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50  ">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black/10 text-white backdrop-blur-md">
        {/* Logo */}
        <div className="text-2xl flex items-center gap-2 font-bold">
          <img src="../imgs/logo.png" alt="Logo" className="w-10" />
          Meal Mate
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm uppercase tracking-wider">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 cursor-pointer">About</Link>
          <li className="hover:text-yellow-300 cursor-pointer">Our Story</li>
          <Link to='/product' className="hover:text-yellow-300 cursor-pointer">Products</Link>
          <Link to="/contactus" className="hover:text-yellow-300 cursor-pointer">Contact Us</Link>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4 absolute top-full left-0 w-full z-40">
          <Link to="/" className="block hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-yellow-300 cursor-pointer">About</Link>
          <li className="hover:text-yellow-300 cursor-pointer">Our Story</li>
          <Link to='/product' className="hover:text-yellow-300 cursor-pointer">Products</Link>
          <Link to="/contactus" className="hover:text-yellow-300 cursor-pointer">Contact Us</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
