import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed px-2 py-2 top-0 left-0 w-full z-50">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-amber-600/70 text-white backdrop-blur-md rounded-4xl">
        {/* Logo */}
        <div className="text-2xl text-amber-100 flex items-center gap-2 font-bold cursor-pointer">
          <img src="../imgs/logo.png" alt="Logo" className="w-10" />
          Meal Mate
        </div>

        {/* Desktop Links and Social Icons */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {/* Navigation Links */}
          <ul className="flex items-center space-x-4 text-sm font-semibold uppercase tracking-wider">
            <li><Link to="/" className="hover:text-white px-4 py-2 rounded-3xl bg-orange-400 hover:font-bold">Home</Link></li>
            <li><Link to="/product" className="hover:text-amber-600 px-4 py-2 text-amber-800  rounded-3xl bg-amber-100 hover:font-extrabold">Products</Link></li>
            <li><Link to="/stories" className="hover:text-amber-600 px-4 py-2 text-amber-800  rounded-3xl bg-amber-100 hover:font-extrabold">Catering</Link></li>
            <li><Link to="/contact" className="hover:text-amber-600 px-4 py-2 text-amber-800  rounded-3xl bg-amber-100 hover:font-extrabold">Contact Us</Link></li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-black/90 text-white px-6 py-4 space-y-4 absolute top-full left-0 w-full z-40 ${menuOpen ? 'block' : 'hidden'
          }`}
      >
        <Link to="/" className="block hover:text-yellow-300" onClick={handleLinkClick}>Home</Link>
        <Link to="/stories" className="block hover:text-yellow-300" onClick={handleLinkClick}>Catering</Link>
        <Link to="/product" className="block hover:text-yellow-300" onClick={handleLinkClick}>Products</Link>
        <Link to="/contact" className="block hover:text-yellow-300" onClick={handleLinkClick}>Contact Us</Link>
      </div>
    </header>
  );
}

export default Header;
