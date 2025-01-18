"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const menuItems = [
    "Home",
    "About us",
    "Services",
    "Products",
    "Sector",
    "Application",
    "Lab Testing",
    "Contact",
  ];

  return (
    <header
      className={`fixed top-0 w-full h-[100px] bg-white transition-transform duration-300 z-50 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-[100px] justify-between items-center p-4 border-b border-gray-300">
        <div className="text-lg pl-4 md:pl-20 font-bold font-crimson text-black">
          <Image src="/icons/logo.png" alt="Secure Matrix" width={100} height={100} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-4"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-10 pr-4 md:pr-20">
            {menuItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer text-black font-crimson hover:underline hover:underline-offset-16 hover:decoration-red-500 whitespace-nowrap"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100px] left-0 right-0 bg-white border-b border-gray-300">
          <ul className="px-4 py-2">
            {menuItems.map((item) => (
              <li
                key={item}
                className="py-3 border-b border-gray-100 last:border-0 text-black font-crimson"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
