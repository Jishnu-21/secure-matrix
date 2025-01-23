"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  const isUnderSection = (path: string) => {
    return pathname.startsWith(path);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { 
      name: "Products", 
      path: "/products",
      dropdown: [
        { name: "Product Category 1", path: "/products/category1" },
        { name: "Product Category 2", path: "/products/category2" },
        { name: "Product Category 3", path: "/products/category3" },
      ]
    },
    { 
      name: "Sector", 
      path: "#",
      dropdown: [
        { name: "Construction & Mining", path: "/sector/construction-mining" },
        { name: "Infrastructure Development", path: "/sector/infrastructure" },
        { name: "Environmental Protection", path: "/sector/environmental" },
      ]
    },
    { 
      name: "Application", 
      path: "#",
      dropdown: [
        { 
          name: "Retaining Wall & Soil Reinforcement", 
          path: "/application/retaining-wall",
          description: "Advanced solutions for soil stabilization and retaining wall construction"
        },
        { 
          name: "River Protection", 
          path: "/application/river-protection",
          description: "Comprehensive river bank protection and erosion control systems"
        }
      ]
    },
    { name: "Lab Testing", path: "/laboratory" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full h-[100px] bg-white transition-transform duration-300 z-50 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-[100px] justify-between items-center p-4 border-b border-gray-300">
        <Link href="/" className="text-lg pl-4 md:pl-20 font-bold font-crimson text-black">
          <Image src="/icons/logo.png" alt="Secure Matrix" width={100} height={100} />
        </Link>

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
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`cursor-pointer text-black font-crimson relative ${
                    isActivePath(item.path) || (item.dropdown && isUnderSection('/' + item.name.toLowerCase())) 
                      ? 'text-[#D84315] after:content-[""] after:absolute after:bottom-[-16px] after:left-0 after:w-full after:h-[3px] after:bg-[#D84315]'
                      : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-[-16px] hover:after:left-0 hover:after:w-full hover:after:h-[3px] hover:after:bg-[#D84315]'
                  }`}
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.name}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <div 
                    className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-[280px] bg-white shadow-lg rounded-lg overflow-hidden py-2 transition-all duration-200 ${
                      activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'
                    }`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.path}
                        className={`block px-6 py-3 text-black hover:bg-gray-50 transition-colors duration-200 ${
                          pathname === dropdownItem.path ? 'text-[#D84315] bg-gray-50 font-medium' : ''
                        }`}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[100px] left-0 w-full bg-white shadow-lg">
            <ul className="py-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <div
                    className="relative"
                    onClick={() => {
                      if (item.dropdown) {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }
                    }}
                  >
                    <Link
                      href={item.path}
                      className={`block px-4 py-2 text-black hover:bg-gray-100 ${
                        isActivePath(item.path) || (item.dropdown && isUnderSection('/' + item.name.toLowerCase())) ? 'text-[#D84315]' : ''
                      }`}
                      onClick={(e) => {
                        if (item.dropdown) {
                          e.preventDefault();
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </Link>

                    {/* Mobile Dropdown */}
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="bg-gray-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className={`block px-8 py-2 text-black hover:bg-gray-100 ${
                              pathname === dropdownItem.path ? 'text-[#D84315] bg-gray-50 font-medium' : ''
                            }`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
