"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-teal-400">
          KBOY
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-slate-300 hover:text-teal-400 transition-colors font-medium">
            Home
          </Link>
          <Link href="#about" className="text-slate-300 hover:text-teal-400 transition-colors font-medium">
            About
          </Link>
          <Link href="#projects" className="text-slate-300 hover:text-teal-400 transition-colors font-medium">
            Projects
          </Link>
          <Link href="#contact" className="text-slate-300 hover:text-teal-400 transition-colors font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none text-slate-300 hover:text-teal-400"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-inner border-t border-slate-700">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-slate-300 hover:text-teal-400 transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-slate-300 hover:text-teal-400 transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-slate-300 hover:text-teal-400 transition-colors py-2"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-slate-300 hover:text-teal-400 transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;