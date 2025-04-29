"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="bg-[#fbfbfe] border-b border-[#dedcff] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#433bff]">
          <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
          <span>Kboy</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-[#050315]/80 hover:text-[#433bff] transition-colors font-medium">
            Home
          </Link>
          <a
            href="#about"
            className="text-[#050315]/80 hover:text-[#433bff] transition-colors font-medium"
            onClick={(e) => handleScroll(e, "about")}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-[#050315]/80 hover:text-[#433bff] transition-colors font-medium"
            onClick={(e) => handleScroll(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-[#050315]/80 hover:text-[#433bff] transition-colors font-medium"
            onClick={(e) => handleScroll(e, "contact")}
          >
            Contact
          </a>
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
              href="#home"
              className="text-[#050315]/80 hover:text-[#433bff] transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-[#050315]/80 hover:text-[#433bff] transition-colors py-2"
              onClick={(e) => handleScroll(e, "about")}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-[#050315]/80 hover:text-[#433bff] transition-colors py-2"
              onClick={(e) => handleScroll(e, "projects")}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[#050315]/80 hover:text-[#433bff] transition-colors py-2"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;