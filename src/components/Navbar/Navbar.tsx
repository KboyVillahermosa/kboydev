"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#fbfbfe] border-b border-[#dedcff] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#433bff]">
          KBOY
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-[#050315]/80 hover:text-[#433bff] transition-colors font-medium">
            Home
          </Link>
          <Link href="#about" className="text-[#050315]/80 hover:text-[#433bff] transition-colors font-medium">
            About
          </Link>
          <Link href="#projects" className="text-[#050315]/80 hover:text-[#433bff] transition-colors font-medium">
            Projects
          </Link>
          <Link href="#contact" className="text-[#050315]/80 hover:text-[#433bff] transition-colors font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none text-[#050315]/80 hover:text-[#433bff]"
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
        <div className="md:hidden bg-[#fbfbfe] shadow-inner border-t border-[#dedcff]">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-[#050315]/80 hover:text-[#433bff] transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-[#050315]/80 hover:text-[#433bff] transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-[#050315]/80 hover:text-[#433bff] transition-colors py-2"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-[#050315]/80 hover:text-[#433bff] transition-colors py-2"
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