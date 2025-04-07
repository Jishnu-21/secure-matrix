"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
}

interface Category {
  id: number;
  title: string;
  products: Product[];
}

interface MenuItem {
  name: string;
  path: string;
  subItems?: MenuItem[];
  dropdown?: MenuItem[];
}

const categories: Category[] = [
  {
    id: 1,
    title: "Gabion Box",
    products: [
      {
        id: 1,
        title: "Secure Gabion Box",
      },
    ],
  },
  {
    id: 2,
    title: "Gabion Mattresses",
    products: [
      {
        id: 1,
        title: "Secure Gabion Rivet Mattress",
      },
    ],
  },
];

const Header = () => {
  const pathname = usePathname();
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const renderDropdown = () => {
    return (
      <div
        className={`absolute top-[100%] mt-[-2px] left-0 w-60 bg-white shadow-lg rounded-b-lg py-2 z-50 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        {categories.map((category) => (
          <div key={category.id} className="relative group/item">
            <Link
              href={`/products/${category.id}`}
              className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                isUnderSection(`/products/${category.id}`) 
                ? "text-[#D84315] bg-gray-50" 
                : "text-gray-800 hover:text-[#D84315]"
              }`}
            >
              {category.title}
            </Link>
            {category.products && category.products.length > 0 && (
              <div className="absolute left-full top-0 w-60 bg-white shadow-lg rounded-lg py-2 hidden group-hover/item:block">
                {category.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${category.id}/${product.id}`}
                    className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      isUnderSection(`/products/${category.id}/${product.id}`) 
                      ? "text-[#D84315] bg-gray-50" 
                      : "text-gray-800 hover:text-[#D84315]"
                    }`}
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const menuItems: MenuItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Products", 
      path: "#",
      dropdown: [
        { name: "SECURE GABION BOX ", path: "/products/Secure-gabion-box/secure-gabion-box" },
        { name: "SECURE GABION REVET MATTRESS ", path: "/products/secure-gabion-mattress/secure-gabion-revet-mattress" },
        { name: "SECURE DT MESH ROCK FALL NETTING", path: "/products/rock-fall-netting/secure-dt-mesh-rock-fall-netting" },
        { name: "SECURE RHOMBOIDAL ROCK FALL NETTING", path: "/products/rock-fall-netting/secure-rhomboidal-rock-fall-netting" },
        { name: "SECURE NON-WOVEN GEOTEXTILE", path: "/products/Secure-geotextile/secure-non-woven-geotextile" },
        { name: "SECURE WOVEN GEOTEXTILE", path: "/products/Secure-geotextile/secure-woven-geotextile" },
        { name: "SECURE GRID SYSTEM", path: "/products/secure-grid-system/secure-grid-system" },
        { name: "SECURE PA6 POLYMER COATING", path: "/products/secure-pa6-polymer-coating/secure-pa6-polymer-coating" },
        { name: "SECURE MESH SYSTEM", path: "/products/secure-mesh-system/secure-mesh-system" },
  
      ]
    },
    { 
      name: "Sector", 
      path: "#",
      dropdown: [
        { name: "AGRICULTURE & FARMING", path: "/sector/agriculture-farming" },
        { name: "CONSTRUCTION & MINING", path: "/sector/construction-mining" },
        { name: "COASTAL DEFENCE", path: "/sector/coastal-defence" },
        { name: "REAL ESTATE & URBAN DEVELOPMENT", path: "/sector/real-estate" },
        { name: "DEFENCE & SECURITY", path: "/sector/defence" }
      ]
    },
    { 
      name: "Application", 
      path: "#",
      dropdown: [
        { 
          name: "RETAINING WALL & SOIL REINFORCEMENT", 
          path: "/application/retaining-wall",
        },
        { 
          name: "ROCK FALL MITIGATION", 
          path: "/application/rock-fall-mitigation",
        },
        { 
          name: "GABION ARCHITECTURE", 
          path: "/application/gabion-architecture",
        },
        { 
          name: "COASTAL PROTECTION FROM FLOODS WITH GABION BOXES", 
          path: "/application/coastal-protection",
        },
        { 
          name: "GABION BOXES IN TRANSPORT AND MOBILITY INFRASTRUCTURE", 
          path: "/application/transport-infrastructure",
        },
        { 
          name: "GABION BOXES IN DEFENCE & SECURITY", 
          path: "/application/defence-security",
        },
        { 
          name: "EROSION CONTROL & SOIL STABILIZATION WITH GABION BOXES AND GEO TEXTILES", 
          path: "/application/erosion-control",
        },
        { 
          name: "FENCING & WIRE SYSTEMS", 
          path: "/application/fencing-wire-systems",
        },
      ]
    },
    { name: "Lab Testing", path: "/laboratory" },
    { name: "Resources", path: "/resources" },
    { name: "Design Solution and Analysis,", path: "/design" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full h-[70px] sm:h-[100px] bg-[#E8E8E8] transition-transform duration-300 z-50 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-full justify-between items-center px-4 sm:px-6 lg:px-8 border-b border-gray-300">
        <Link href="/" className="text-lg pl-0 sm:pl-4 lg:pl-20 font-bold font-crimson text-black">
          <Image 
            src="/icons/logo.svg" 
            alt="Secure Matrix" 
            width={120} 
            height={120}
            className="w-[90px] sm:w-[120px] h-auto" 
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-2 sm:px-4 text-[#D84315]"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
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
          <ul className="flex space-x-4 lg:space-x-10 pr-0 lg:pr-20">
            {menuItems.map((item) => (
              <li 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`cursor-pointer text-black hover:text-[#D84315] text-sm lg:text-base font-crimson relative inline-flex items-center gap-0.5 ${
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
                  {item.dropdown && (
                    <svg 
                      className={`w-3.5 h-3.5 ml-0.5 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180 transform' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <div 
                    className={`absolute top-[120%] mt-1 left-0 w-[320px] bg-[#FF5722] shadow-lg rounded-none overflow-hidden transition-all duration-200 divide-y divide-white/60 ${
                      activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'
                    }`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        href={dropdownItem.path}
                        className={`block px-4 py-[10px] text-[16px] font-medium transition-colors
                          ${isUnderSection(dropdownItem.path) 
                            ? 'text-white bg-[#c13d13]' 
                            : 'text-white/90 hover:text-white hover:bg-[#c13d13]'
                          }`}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                    {renderDropdown(item.subItems)}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-50" style={{ top: '70px' }}>
            <div className="h-[calc(100vh-70px)] overflow-y-auto bg-white shadow-lg">
              <div className="container mx-auto px-4">
                <ul className="py-4">
                  {menuItems.map((item) => (
                    <div key={item.name} className="mb-2">
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
                          className={`block py-3 px-3 text-base font-medium transition-colors rounded-lg inline-flex items-center justify-between w-full ${
                            isActivePath(item.path) || (item.dropdown && isUnderSection('/' + item.name.toLowerCase())) 
                              ? 'text-[#D84315] bg-gray-50' 
                              : 'text-gray-800 hover:bg-gray-100 hover:text-[#D84315]'
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
                          {item.dropdown && (
                            <svg 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180 transform' : ''
                              }`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </Link>

                        {/* Mobile Dropdown */}
                        {item.dropdown && activeDropdown === item.name && (
                          <div 
                            className={`mt-1 ml-3 pl-3 border-l-2 border-[#FF6B3D] bg-[#D84315] rounded-lg`}
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                href={dropdownItem.path}
                                className={`block py-[10px] px-4 text-[16px] font-medium transition-colors
                                  ${isUnderSection(dropdownItem.path) 
                                    ? 'text-white bg-[#c13d13]' 
                                    : 'text-white/90 hover:text-white hover:bg-[#c13d13]'
                                  }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                        {item.subItems && activeDropdown === item.name && (
                          <div className="mt-1 ml-3 pl-3 border-l-2 border-gray-200 bg-white rounded-lg">
                            {renderDropdown(item.subItems)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
