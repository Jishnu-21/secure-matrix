"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const menuItems = {
    Menu: [
      { label: "Accueil", href: "#" },
      { label: "À propos", href: "#" },
      { label: "Nos services", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Services: [
      { label: "Téléprospection / Télémarketing", href: "#" },
      { label: "Prestations Externalisées", href: "#" },
      { label: "Service de Fidélisation Client", href: "#" },
      { label: "Développement Commercial pour...", href: "#" },
      { label: "Recouvrement de Marché", href: "#" },
    ],
    Ressources: [
      { label: "Mentions légales", href: "#" },
      { label: "Conditions générales d'utilisation", href: "#" },
      { label: "Conditions générales de vente", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: "/icons/linkedin.svg", href: "#", label: "LinkedIn" },
    { icon: "/icons/facebook.svg", href: "#", label: "Facebook" },
    { icon: "/icons/instagram.svg", href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#F3F4F6] px-4 sm:px-6 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/icons/logo.png"
                alt="Secure Matrix"
                width={120}
                height={60}
                className="h-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
              Développement commercial, téléprospection B2B: se solutions sur mesure pour propulser votre entreprise vers l'excellence.
            </p>
          </div>

          {/* Menu Sections Container */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
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
            <div className="col-span-2 sm:col-span-1 space-y-4">
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

            {/* Ressources */}
            <div className="space-y-4">
              <h3 className="text-gray-900 font-medium">Ressources</h3>
              <ul className="space-y-2">
                {menuItems.Ressources.map((item) => (
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 text-center sm:text-left">
            2024 Bizdev.Store - Designed by Yef.studio
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label={link.label}
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
