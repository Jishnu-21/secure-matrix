"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const menuItems = {
    Menu: [
      { label: "About", href: "/about" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
    Services: [
      { label: "Products", href: "/products" },
      { label: "Lab-Testing", href: "/laboratory" },
    ],
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#F3F4F6] px-4 sm:px-6 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/icons/logo.png"
                alt="Secure Matrix"
                width={120}
                height={60}
                className="h-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
            Gate No. 309/2, At Post Kuruli, Tal Khed,Pune - 410501, Maharashtra, India
            Phone : 08045804461
            </p>
          </div>

          {/* Menu Sections Container */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {/* Menu */}
            <div className="space-y-4">
              <h3 className="text-gray-900 font-medium">Menu</h3>
              <ul className="space-y-2">
                {menuItems.Menu.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-gray-900 font-medium">Services</h3>
              <ul className="space-y-2">
                {menuItems.Services.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200 line-clamp-1"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Video Section */}
          <div className="lg:col-span-1">
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source 
                  src="https://orig-videos.tradeindia.com/video/flv/catalogs/134484/video134484_001.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                );
              })}
            </div>
            <p className="text-gray-600 text-sm">
              {new Date().getFullYear()} Secure Matrix. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
