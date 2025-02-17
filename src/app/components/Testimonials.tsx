"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

interface TestimonialCardProps {
  icon: string;
  text: string;
  author: {
    image: string;
    name: string;
    role: string;
  };
}

const TestimonialCard = ({ icon, text, author }: TestimonialCardProps) => (
  <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg relative z-10 min-h-[400px] flex flex-col">
    {/* Icon */}
    <div className="bg-gray-100 p-4 rounded-lg w-fit mb-8">
      <Image
        src={icon}
        alt="Stats icon"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </div>

    {/* Testimonial Text */}
    <p className="text-gray-800 mb-8 leading-relaxed flex-grow">
      {text}
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 mt-auto">
      <div className="relative w-12 h-12 rounded-full overflow-hidden">
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{author.name}</h4>
        <p className="text-sm text-gray-500">{author.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = [
    {
      icon: "/icons/stats.svg",
      text: "CRO a été le partenaire clé dans notre expansion. Leurs services de téléprospection ont considérablement augmenté notre pipeline de ventes.",
      author: {
        image: "/images/julie.jpg",
        name: "Julie Mengue",
        role: "Manager"
      }
    },
    {
      icon: "/icons/stats.svg",
      text: "La stratégie de fidélisation de CRO a transformé notre relation client, augmentant la rétention et la satisfaction.",
      author: {
        image: "/images/charles.jpg",
        name: "Charles Atangana",
        role: "Commercial"
      }
    },
    {
      icon: "/icons/stats.svg",
      text: "La stratégie de fidélisation de CRO a transformé notre relation client, augmentant la rétention et la satisfaction.",
      author: {
        image: "/images/alice.jpg",
        name: "Alice Kenfack",
        role: "DRH"
      }
    }
  ];

  const renderTestimonialsGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          {...testimonial}
        />
      ))}
    </div>
  );

  const renderMobileSwiper = () => (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ 
        clickable: true,
        dynamicBullets: true
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      loop={true}
      className="testimonials-swiper"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section className="py-14 md:py-16 px-4 relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background Pattern - Left */}
      <div className="absolute left-0 top-0 w-[50%] h-full opacity-10 pointer-events-none">
        <Image
          src="/images/hex-pattern.png"
          alt="Background pattern"
          fill
          className="object-cover origin-left scale-125"
        />
      </div>

      {/* Background Pattern - Right */}
      <div className="absolute right-0 top-0 w-[50%] h-full opacity-10 pointer-events-none">
        <Image
          src="/images/hex-pattern.png"
          alt="Background pattern"
          fill
          className="object-cover origin-right scale-125 rotate-180"
        />
      </div>

      {/* Small Dots Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Image
          src="/images/hex-pattern.png"
          alt="Dots pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
          Testimonials
          </h2>
          <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
        </div>

        {/* Testimonials Content */}
        {isMobile ? renderMobileSwiper() : renderTestimonialsGrid()}
      </div>
    </section>
  );
};

export default Testimonials;
