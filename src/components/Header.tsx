import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#fff7ed]/40 text-[#1c1917] p-4 fixed w-full top-0 left-0 z-50 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <h1 className="text-2xl font-bold">ConnectDash</h1>
        </a>
        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <nav className="hidden md:flex md:items-center md:space-x-6 p-2">
            <Link to="/" className="text-2xl transition-colors duration-300 ease-in-out focus:text-[#ea580c]">Home</Link>
            <Link to="/features" className=" text-2xl transition-colors duration-300 ease-in-out focus:text-[#ea580c]">Features</Link>
            <Link to="/about" className=" text-2xl transition-colors duration-300 ease-in-out focus:text-[#ea580c]">About</Link>
            <Link to="/contact" className=" text-2xl transition-colors duration-300 ease-in-out focus:text-[#ea580c]">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            <span className="sr-only">Open Menu</span>
            ☰
          </button>

          {/* Get Started Button */}
          <div className="flex-shrink-0 hidden md:block">
            <Link to="/get-started">
              <button className="rounded-lg h-12 px-8 bg-[#ea580c] text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#fff7ed] text-[#1c1917] p-4 md:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} z-50`}>
        <button onClick={toggleMenu} className="text-2xl absolute top-4 right-4">
          <span className="sr-only">Close Menu</span>
          ✕
        </button>
        <nav className="mt-12 flex flex-col space-y-4">
          <Link to="/" onClick={toggleMenu} className="text-2xl  transition-colors duration-300 ease-in-out">Home</Link>
          <Link to="/features" onClick={toggleMenu} className="text-2xl  transition-colors duration-300 ease-in-out">Features</Link>
          <Link to="/about" onClick={toggleMenu} className="text-2xl  transition-colors duration-300 ease-in-out">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="text-2xl  transition-colors duration-300 ease-in-out">Contact</Link>
          <Link to="/get-started" onClick={toggleMenu}>
            <button className="rounded-lg h-12 px-8 bg-[#ea580c] text-white text-lg font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
