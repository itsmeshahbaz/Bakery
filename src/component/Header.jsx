import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black/20 text-white backdrop-blur-md shadow-md">
        {/* Logo */}
        <div className="text-2xl flex items-center gap-2 font-bold">
          <img src="../imgs/logo.png" alt="Logo" className="w-10" />
          Meal Mate
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm uppercase tracking-wider">
          <li>
            <Link to="/" className="hover:text-yellow-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300">About</Link>
          </li>
          <li>
            <Link to="/stories" className="hover:text-yellow-300">Our Story</Link>
          </li>
          <li>
            <Link to="/product" className="hover:text-yellow-300">Products</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-black/90 text-white px-6 py-4 space-y-4 absolute top-full left-0 w-full z-40 ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <Link to="/" className="block hover:text-yellow-300" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" className="block hover:text-yellow-300" onClick={handleLinkClick}>About</Link>
        <Link to="/stories" className="block hover:text-yellow-300" onClick={handleLinkClick}>Our Story</Link>
        <Link to="/product" className="block hover:text-yellow-300" onClick={handleLinkClick}>Products</Link>
        <Link to="/contact" className="block hover:text-yellow-300" onClick={handleLinkClick}>Contact Us</Link>
      </div>
    </header>
  );
}

export default Header;
