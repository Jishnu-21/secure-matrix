"use client";

import Image from "next/image";
import './LogoMarquee.css';

const LogoMarquee = () => {
  const logos = [
    {
      src: "/logos/foton.webp",
      alt: "Foton",
      width: 180
    },
    {
      src: "/logos/godrej.png",
      alt: "godrej",
      width: 180
    },
    {
      src: "/logos/zee-tv.png",
      alt: "zee-tv",
      width: 150
    },
    {
      src: "/logos/mars.png",
      alt: "mars",
      width: 180
    },
    {
      src: "/logos/thyssenkrupp.png",
      alt: "Thyssenkrupp",
      width: 160
    },
    {
      src: "/logos/peri.png",
      alt: "Peri",
      width: 160
    },
    {
      src: "/logos/ksh.png",
      alt: "KSH",
      width: 160
    }
  ];

  // Duplicate logos for seamless scrolling
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-full px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">Our Clients</h2>
          <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
        </div>

        <div className="relative marquee-container">
          {/* Gradient Overlay - Left */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          
          {/* Gradient Overlay - Right */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="marquee-content">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8 shrink-0"
                style={{ width: logo.width }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={50}
                  className="h-12 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
