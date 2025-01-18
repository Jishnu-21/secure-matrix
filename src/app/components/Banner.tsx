"use client";

import Image from "next/image";
import React from "react";
import Stats from "./Stats";

const Banner = () => {
  return (
    <>
      <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-[#FAFAFA]">
        <div className="absolute inset-0">
          <Image
            src="/images/banner.png"
            alt="Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 h-full flex items-start pt-[150px]">
          <div className="px-6 sm:px-20 md:pl-32 lg:pl-48 max-w-[1200px]">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-[40px] font-medium text-white leading-[1.2]">
                Notre agence de téléprospection met
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-[40px] font-medium mb-4 text-white leading-[1.2]">
                l'humain au cœur de vos ventes.
              </h2>
            </div>
            <p className="text-xs sm:text-sm md:text-[15px] text-white/95 mt-4 mb-12 leading-[1.8] max-w-[600px] font-light tracking-wide">
              Nous créons des relations durables en vous offrant des services de téléprospection exceptionnels. Grâce à notre approche personnalisée et à notre expertise en télémarketing, nous vous aidons à découvrir de
            </p>
            <div className="flex justify-center sm:justify-start">
              <button className="inline-flex items-center bg-white text-[#FF4A17] px-6 sm:px-8 py-3 rounded-sm group hover:bg-opacity-95 transition-all mb-8 sm:mb-0">
                <span className="mr-3 text-base sm:text-lg font-medium">Know more</span>
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
      </section>
      <div className="relative z-20 bg-transparent h-32">
        <Stats />
      </div>
    </>
  );
};

export default Banner;
