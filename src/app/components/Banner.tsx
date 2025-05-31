"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Stats from "./Stats";
import Link from "next/link";

const Banner = () => {
  const bannerImages = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // Half of the transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-[calc(100vh-50px)] sm:min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-70px)] lg:min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-90px)] flex items-center bg-[#FAFAFA] overflow-hidden">
        <div className="absolute inset-0">
          {bannerImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Banner ${index + 1}`}
              fill
              className={`object-cover transition-all duration-1000 absolute inset-0
                ${currentImageIndex === index ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-110'}
                ${isAnimating ? 'transition-all duration-1000' : ''}
              `}
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 h-full w-full flex items-start pt-[80px] sm:pt-[90px] md:pt-[100px] lg:pt-[120px] xl:pt-[130px]">
          <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 max-w-[1440px] mx-auto">
            <div className="space-y-3 max-w-[800px] text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-medium text-white leading-[1.2]">
                We are 'The Guardians of Every Territory'.
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mt-4 sm:mt-6 mb-8 sm:mb-12 leading-[1.8] max-w-[600px] font-light tracking-wide text-left">
              15+ years of Experience From Concept to Creation, we do it all.
              Security Shield for every space Environment Protection Solutions for
              Civil Engineering
            </p>
            <div className="flex justify-start">
              <Link href="/about" className="inline-flex items-center bg-white text-[#D84315] px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3 rounded-sm group hover:bg-opacity-95 transition-all mb-10 sm:mb-16 md:mb-20 lg:mb-24"> 
                <span className="mr-2 sm:mr-3 text-sm sm:text-base md:text-lg font-medium">
                  Know more
                </span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentImageIndex(index);
                  setIsAnimating(false);
                }, 500);
              }}
            />
          ))}
        </div>
        {/* Depth Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
      </section>
      <div className="bg-gradient-to-b from-[#FAFAFA] to-gray-50 py-8 sm:py-10 md:py-12 w-full">
        <div className="max-w-[1440px] w-full px-2 sm:px-3 md:px-4 lg:px-6 mx-auto">
          <Stats />
        </div>
      </div>
      {/* Depth Effect after Stats */}
    </>
  );
};

export default Banner;
