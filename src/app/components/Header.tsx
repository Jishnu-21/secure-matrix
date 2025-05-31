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
  external?: boolean;
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

  const renderDropdown = (items?: MenuItem[]) => {
    // If items are provided, render those items
    if (items) {
      return (
        <>
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm ${
                isUnderSection(item.path) 
                ? "text-[#D84315] bg-gray-50" 
                : "text-gray-800 hover:text-[#D84315]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </>
      );
    }
    
    // Default dropdown for products categories
    return (
      <div
        className={`absolute top-[100%] mt-[-2px] left-0 md:left-1/2 md:-translate-x-1/2 lg:left-0 lg:translate-x-0 w-44 sm:w-48 bg-white shadow-lg rounded-b-lg py-2 z-50 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        {categories.map((category) => (
          <div key={category.id} className="relative group/item">
            <Link
              href={`/products/${category.id}`}
              className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer text-base ${
                isUnderSection(`/products/${category.id}`) 
                ? "text-[#D84315] bg-gray-50" 
                : "text-gray-800 hover:text-[#D84315]"
              }`}
            >
              {category.title}
            </Link>
            {category.products && category.products.length > 0 && (
              <div className="absolute md:left-full md:top-0 md:w-48 md:ml-0 lg:ml-0 w-44 sm:w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover/item:block max-h-[400px] overflow-y-auto md:right-auto right-full top-0">
                {category.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${category.id}/${product.id}`}
                    className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm ${
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
    { name: "Home", path: "/" ,
      dropdown:[
        {name:"COMPANY PROFILE",path: '/profile'},
        {name:"CERTIFICATIONS",path: '/certifications'},
      ]
    },
    { name: "About", path: "/about",
      dropdown:[
        {name:"COMPANY HISTORY",path:'/companu-history'},
        {name:"VISION",path:'/vision'},
        {name:"MISSION",path:'/mission'},
        {name:"PHOTOS",path:'/photos'},
      ]
     },
 
    { 
      name: "Sectors", 
      path: "#",
      dropdown: [
        { name: "ENVIRONMENTAL PROTECTION", path: "/sector/environmental-protection" },
        { name: "AGRICULTURAL PURPOSE", path: "/sector/agricultural-purpose" },
        { name: "COASTAL & RIVER CONTROL WORK", path: "/sector/coastal-river-control-work" },
        { name: "EMERGENCY & FLOOD", path: "/sector/emergency-flood" },
        { name: "WATER RESOURCES & IRRIGATION", path: "/sector/water-resources-irrigation" },
        { name: "TRANSPORTATION INFRASTRUCTURE", path: "/sector/transportation-infrastructure" },
        { name: "DEFENCE & SECURITY", path: "/sector/defence-security" },
        { name: "MINING", path: "/sector/mining" },
      ]
    },
    { 
      name: "Products", 
      path: "#",
      dropdown: [
        { name: "SECURE GABION BOX ", path: "/products/Secure-gabion-box/secure-gabion-box" },
        { name: "SECURE GABION  MATTRESS ", path: "/products/secure-gabion-mattress/secure-gabion-revet-mattress" },
        { name: "SECURE ROCK FALL NETTING", path: "/products/rock-fall-netting/secure-dt-mesh-rock-fall-netting" },
        { name: "SECURE WIRE ROPE PANEL", path: "/products/wire-rope-panel/secure-wire-rope-panel" },
        { name: "SECURE TERRAIN MESH", path: "/products/terrain-mesh/secure-terrain-mesh" },
        { name: "SECURE EROSION CONTROL BLANKETS", path: "/products/erosion-control-blankets/secure-erosion-control-blankets" },
        { name: "SECURE MESH SYSTEM", path: "/products/mesh-system/secure-mesh-system" },
        { name: "SECURE DRAINAGE COMPOSITE", path: "/products/drainage-composite/secure-drainage-composite" },
        { name: "SECURE GRID SYSTEM", path: "/products/grid-system/secure-grid-system" },
        { name: "SECURE GEO STRAP", path: "/products/geo-strap/secure-geo-strap" },
        { name: "DOUBLE SECUREMESH SYSTEM", path: "/products/double-securemesh-system/double-securemesh-system" },
        { name: "SECURE COIR MAT", path: "/products/secure-coir-mat/secure-coir-mat" },
        { name: "SECURE GEOBAG", path: "/products/secure-gobag/secure-gobag" },
        { name: "SECURE COMPOSITE MESH", path: "/products/secure-composite-mesh/secure-composite-mesh" },
        { name: "SECURE PRO 3D", path: "/products/secure-pro-3d/secure-pro-3d" },
        { name: "SECURE PRO AURA 3D", path: "/products/secure-pro-aura-3d/secure-pro-aura-3d" },
        { name: "SECURE PRO 3D PLUS", path: "/products/secure-pro-3d-plus/secure-pro-3d-plus" },
        { name: "POLY SECURE", path: "/products/poly-secure/poly-secure" },
        { name: "SECURE GEO COMPOSITE", path: "/products/secure-geo-composite/secure-geo-composite" },
        { name: "SECURE SACK GABION", path: "/products/secure-sack-gabion/secure-sack-gabion" },
        { name: "SECURE GEO CELL", path: "/products/secure-geo-cell/secure-geo-cell" },
        { name: "SECURELINK-GEOGRID", path: "/products/securelink-geogrid/securelink-geogrid" },
        { name: "GREEN SECUREMESH SYSTEM", path: "/products/green-securemesh-system/green-securemesh-system" },
        { name: "SECURE GREEN TERRAIN MESH", path: "/products/secure-green-terrain-mesh/secure-green-terrain-mesh" },  
  
      ]
    },
    { 
      name: "Application", 
      path: "#",
      dropdown: [
        { 
          name: "RETAINING WALL SOIL REINFORCEMENT", 
          path: "/application/retaining-wall",
        },
        { 
          name: "ROCKFALL PROTECTION", 
          path: "/application/rock-fall-mitigation",
        },
        { 
          name: "EROSION CONTROL & SOIL STABILIZATION WITH GABION BOXES & GEOTEXTILES", 
          path: "/application/gabion-architecture",
        },
        { 
          name: "MARINE WORK", 
          path: "/application/coastal-protection",
        },
        { 
          name: "DEFENCE & SECURITY", 
          path: "/application/transport-infrastructure",
        },
        { 
          name: "FENCING WIRE", 
          path: "/application/defence-security",
        },
        { 
          name: "HYDRAULIC WORK", 
          path: "/application/erosion-control",
        },
      ]
    },
    { name: "Projects", path: "/projects" ,
      dropdown: [
        { name: "BEAUTIFICATION OF KARHA RIVER PROJECT, BARAMATI", path: "/projects/beautification-of-karha-river-project-baramati" },
        { name: "RIVER REJUVENATION PROJECT - MULA RIVER FROM WAKAD BY PASS TO SANGAVI BRIDGE", path: "/projects/river-rejuvenation-project-mula-river-from-wakad-by-pass-to-sangavi-bridge" },
        { name: "R K ASSOCIATES", path: "/projects/r-k-associates" },
        { name: "KOLHAR K.T.WEIR REMAINING WORK AND DOWN STREAM PROTECTION WORK AT KOLHAR TAL RAHATA DIST-AHMEDNAGAR", path: "/projects/kolhar-k-t-weir-remaining-work-and-down-stream-protection-work-at-kolhar-tal-rahata-dist-ahmednagar" },
        { name: "SPECIAL REPAIR WORK OF DAMAGED PORTION OF RIGHT BANK OF K.T. WEIR MANJUR, TAL- KOPARGAON, DIST- AHMEDNAGAR", path: "/projects/special-repair-work-of-damaged-portion-of-right-bank-of-k-t-weir-manjur-tal-kopargaon-dist-ahmednagar" },
        { name: "CONSTRUCTION OF 8 LANE OF EXISTING 4 LANE FROM VADAPE TO THANE OF NH3(NEW NH 848) MH", path: "/projects/construction-of-8-lane-of-existing-4-lane-from-vadape-to-thane-of-nh3-new-nh-848-mh" },
        { name: "DEVELOPEMENT OF TRANSPORT NAGAR AT RANCHI JHARKHAND ON EPC MODE", path: "/projects/development-of-transport-nagar-at-ranchi-jharkhand-on-epc-mode" },
      ]
    },
    { name: "Advanced Technologies", path: "/advanced-technologies",
      dropdown: [
        { name: "DESIGN SOFTWARE", path: "/advanced-technologies/design-software" },
        { name: "MATERIAL TESTING LAB", path: "/advanced-technologies/material-testing-lab" },
      ]
     },
    { name: "Resources", path: "/resources" ,
      dropdown: [
        { name: "STANDARDS", path: "/resources/standards" },
        { name: "TECHNICAL DATA SHEET", path: "/resources/technical-data-sheet" },  
        { name: "BROCHURE", path: "/resources/brochure" },  
        { name: "VIDEOS & PHOTOS", path: "/resources/videos-photos" },  
        { name: "INSTALLATION MANUAL", path: "/resources/installation-manual" },  
      ]
    },
    { name: "Contact-us", path: "/contact",
      dropdown:[
        {name:'LOCATION', path:'/contact#location'},
        {name:'MOBILE NO', path:'/contact#phone'},
        {name:'E-MAIL ID', path:'/contact#email'},
      ]
     },
  ];

  return (
    <header
      className={`fixed top-0 w-full h-[60px] sm:h-[80px] bg-[#E8E8E8] transition-transform duration-300 z-50 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-full items-center px-2 sm:px-3 md:px-4 lg:px-6 border-b border-gray-300 max-w-[1440px] mx-auto">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center font-bold font-crimson text-black">
            <Image 
              src="/icons/logo.svg" 
              alt="Secure Matrix" 
              width={120} 
              height={120}
              className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] h-auto" 
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex-shrink-0 px-2 sm:px-4 text-[#D84315]"
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
        <nav className="hidden md:flex flex-grow justify-end">
          <ul className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 pr-0 lg:pr-4">
            {menuItems.map((item) => (
              <li 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`cursor-pointer text-black hover:text-[#D84315] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] uppercase font-medium relative inline-flex items-center gap-0.5 ${
                    isActivePath(item.path) || (item.dropdown && isUnderSection('/' + item.name.toLowerCase())) 
                      ? 'text-[#D84315] after:content-[""] after:absolute after:bottom-[-12px] after:left-0 after:w-full after:h-[2px] after:bg-[#D84315]'
                      : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-[-12px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#D84315]'
                  }`}
                  onClick={(e) => {
                    // Only prevent navigation for items with # as path
                    if (item.dropdown && item.path === '#') {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.name.toUpperCase()}
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
                    className={`absolute top-[120%] mt-1 md:left-1/2 md:-translate-x-1/2 lg:left-0 lg:translate-x-0 ${item.name === 'Contact-us' ? 'w-[180px]' : item.name === 'Projects' ? 'w-[280px] md:w-[320px]' : 'w-[200px] md:w-[240px]'} bg-[#D84315] shadow-lg rounded-none transition-all duration-200 divide-y divide-white/60 ${item.name === 'Products' ? 'max-h-[400px] overflow-y-auto' : 'overflow-hidden'} ${
                      activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'
                    }`}
                  >
                    {item.dropdown.map((dropdownItem) => 
                      dropdownItem.external ? (
                        <a
                          key={dropdownItem.path}
                          href={dropdownItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block px-4 py-[8px] text-xs sm:text-[11px] md:text-[12px] font-medium transition-colors text-white/90 hover:text-white hover:bg-[#c13d13]`}
                        >
                          {dropdownItem.name}
                        </a>
                      ) : (
                        <Link
                          key={dropdownItem.path}
                          href={dropdownItem.path}
                          className={`block px-4 py-[8px] text-xs sm:text-[11px] md:text-[12px] font-medium transition-colors
                            ${isUnderSection(dropdownItem.path) 
                              ? 'text-white bg-[#c13d13]' 
                              : 'text-white/90 hover:text-white hover:bg-[#c13d13]'
                            }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      )
                    )}
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
          <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-50" style={{ top: typeof window !== 'undefined' ? (window.innerWidth < 640 ? '70px' : '100px') : '70px' }}>
            <div className="h-[calc(100vh-70px)] sm:h-[calc(100vh-100px)] overflow-y-auto bg-white shadow-lg">
              <div className="container mx-auto px-4">
                <ul className="py-4">
                  {menuItems.map((item) => (
                    <div key={item.name} className="mb-2">
                      <div className="relative">
                        {item.dropdown ? (
                          <div className="flex w-full">
                            {item.path !== '#' ? (
                              <Link
                                href={item.path}
                                className={`flex-grow py-3 px-3 text-sm uppercase font-medium transition-colors rounded-l-lg ${
                                  isActivePath(item.path) || (item.dropdown && isUnderSection('/' + item.name.toLowerCase())) 
                                    ? 'text-[#D84315] bg-gray-50' 
                                    : 'text-gray-800 hover:bg-gray-100 hover:text-[#D84315]'
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setMobileMenuOpen(false);
                                }}
                              >
                                {item.name.toUpperCase()}
                              </Link>
                            ) : (
                              <div 
                                className={`flex-grow py-3 px-3 text-sm uppercase font-medium transition-colors ${
                                  isActivePath(item.path) || (item.dropdown && isUnderSection('/' + item.name.toLowerCase())) 
                                    ? 'text-[#D84315] bg-gray-50' 
                                    : 'text-gray-800 hover:bg-gray-100 hover:text-[#D84315]'
                                }`}
                              >
                                {item.name.toUpperCase()}
                              </div>
                            )}
                            <div 
                              className={`py-3 px-3 text-base font-medium transition-colors rounded-r-lg cursor-pointer ${
                                isActivePath(item.path) || (item.dropdown && isUnderSection('/' + item.name.toLowerCase())) 
                                  ? 'text-[#D84315] bg-gray-50' 
                                  : 'text-gray-800 hover:bg-gray-100 hover:text-[#D84315]'
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveDropdown(activeDropdown === item.name ? null : item.name);
                              }}
                            >
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
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.path}
                            className={`block py-3 px-3 text-base font-medium transition-colors rounded-lg inline-flex items-center justify-between w-full ${
                              isActivePath(item.path) || (item.dropdown && isUnderSection('/' + item.name.toLowerCase())) 
                                ? 'text-[#D84315] bg-gray-50' 
                                : 'text-gray-800 hover:bg-gray-100 hover:text-[#D84315]'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileMenuOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        )}

                        {/* Mobile Dropdown */}
                        {item.dropdown && activeDropdown === item.name && (
                          <div 
                            className={`mt-1 ml-3 pl-3 border-l-2 border-[#FF6B3D] bg-[#D84315] rounded-lg ${item.name === 'Products' ? 'max-h-[300px] overflow-y-auto' : ''}`}
                          >
                            {item.dropdown.map((dropdownItem) => 
                              dropdownItem.external ? (
                                <a
                                  key={dropdownItem.path}
                                  href={dropdownItem.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`block py-[8px] px-4 text-[14px] font-medium transition-colors text-white/90 hover:text-white hover:bg-[#c13d13]`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setMobileMenuOpen(false);
                                  }}
                                >
                                  {dropdownItem.name}
                                </a>
                              ) : (
                                <Link
                                  key={dropdownItem.path}
                                  href={dropdownItem.path}
                                  className={`block py-[8px] px-4 text-[14px] font-medium transition-colors
                                    ${isUnderSection(dropdownItem.path) 
                                      ? 'text-white bg-[#c13d13]' 
                                      : 'text-white/90 hover:text-white hover:bg-[#c13d13]'
                                    }`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setMobileMenuOpen(false);
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              )
                            )}
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
