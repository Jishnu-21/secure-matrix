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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-4 text-center md:text-left">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/icons/logo.png"
                alt="Secure Matrix"
                width={140}
                height={50}
                className="h-auto w-[120px]"
              />
            </Link>
            <p className="text-gray-600 text-sm md:text-base mb-6">
            Gate No. 309/2, At Post Kuruli, Tal Khed,Pune - 410501, Maharashtra, India
            Phone : 08045804461
            </p>
          </div>

          {/* Menu and Services in same row for mobile */}
          <div className="grid grid-cols-2 gap-4 md:col-span-4 text-center md:text-left">
            {/* Menu Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="space-y-2">
                {menuItems.Menu.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-[#D84315] transition-colors text-sm md:text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {menuItems.Services.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-[#D84315] transition-colors text-sm md:text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Video Section */}
          <div className="md:col-span-4 text-center md:text-left">
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
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-600 hover:text-[#D84315] transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                );
              })}
            </div>
            <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
              {new Date().getFullYear()} Secure Matrix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
