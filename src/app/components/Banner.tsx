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
      <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-[#FAFAFA] overflow-hidden">
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
        <div className="relative z-10 h-full flex items-start pt-[150px]">
          <div className="px-6 sm:px-20 md:pl-32 lg:pl-48 max-w-[1200px]">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-[40px] font-medium text-white leading-[1.2]">
                We are 'The Guardians of Every Territory'.
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-[18px] text-white/95 mt-4 mb-12 leading-[1.8] max-w-[600px] font-light tracking-wide">
              15+ years of Experience From Concept to Creation, we do it all.
              Security Shield for every space Environment Protection Solutions for
              Civil Engineering
            </p>
            <div className="flex justify-center sm:justify-start">
              <button className="inline-flex items-center bg-white text-[#FF4A17] px-6 sm:px-8 py-3 rounded-sm group hover:bg-opacity-95 transition-all mb-8 sm:mb-0">
               <Link href="/about"> 
                <span className="mr-3 text-base sm:text-lg font-medium">
                  Know more
                </span>
                </Link>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
      </section>
      <div className="bg-gradient-to-b from-[#FAFAFA] to-gray-50 pb-10">
        <Stats />
      </div>
      {/* Depth Effect after Stats */}
      <div className="relative bg-white">
        <div className="absolute -top-8 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-white"></div>
      </div>
    </>
  );
};

export default Banner;
