"use client";

import Image from "next/image";

const LogoMarquee = () => {
  const logos = [
    {
      src: "/logos/kinetic.png",
      alt: "Kinetic",
      width: 120
    },
    {
      src: "/logos/high-country-club.png",
      alt: "High Country Club",
      width: 180
    },
    {
      src: "/logos/grasshopper.png",
      alt: "Grasshopper",
      width: 150
    },
    {
      src: "/logos/wheelapp.png",
      alt: "WheelApp",
      width: 140
    },
    {
      src: "/logos/majenta-mantis.png",
      alt: "Majenta Mantis",
      width: 160
    }
  ];

  // Duplicate logos for seamless scrolling
  const allLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-white py-12 overflow-hidden">
      <div className="relative">
        {/* Gradient Overlay - Left */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        
        {/* Gradient Overlay - Right */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex animate-marquee">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 shrink-0"
              style={{ width: logo.width }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
