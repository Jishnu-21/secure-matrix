"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  path: string;
}

const ProductCard = ({ title, description, imageUrl, path } : ProductCardProps) => (
  <div className="group relative overflow-hidden rounded-lg transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2">
    {/* Border Animation Container */}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#DA491A] via-[#ff6b3d] to-[#DA491A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Main Content Container */}
    <div className="relative rounded-lg bg-white m-[2px] overflow-hidden">
      {/* Image with overlay */}
      <div className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/50 transition-opacity duration-500 group-hover:opacity-80" />
        {/* Orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#DA491A] via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-all duration-500" />
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 transform transition-all duration-500 ease-out group-hover:translate-y-[-8px]">
        <h3 className="text-xl md:text-2xl font-medium text-white mb-3 transition-all duration-300 group-hover:text-[#ffffff] group-hover:scale-105">{title}</h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed transition-all duration-300 group-hover:opacity-100 group-hover:text-white">{description}</p>
        <div className="mt-4 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="inline-flex items-center text-white text-sm font-medium group-hover:text-[#ffffff]">
            Learn More 
            <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
);

const Products = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const products = [
    {
      title: "Secure Gabion Mattress",
      description: "Durable and efficient for erosion control and landscape reinforcement.",
      imageUrl: "/images/gabion-mattresss.jpg",
      path:"/products/secure-gabion-mattress"
    },
    {
      title: "Secure Gabion  Box",
      description: "Secure and adaptable fencing solutions for various applications.",
      imageUrl: "/images/products/gabion-box/1.jpeg",
      path:"/products/Secure-gabion-box"
    },
    {
      title: "Secure Grid System",
      description: "Strong and versatile fencing for enhanced security and durability.",
      imageUrl: "/images/products/grid-system/1.jpg",
      path:"/products/secure-grid-system"
    },
    {
      title: "Secure Geotextile",
      description: " Robust and eco-friendly solution for retaining walls and enclosures.",
      imageUrl: "/images/products/geotextile/woven/1.jpeg",
      path:"/products/Secure-geotextile"
    },
    {
      title: "Secure Rock Fall Netting",
      description: "High-strength barrier for maximum security and protection.",
      imageUrl: "/images/products/rock-fall-netting/dt-mesh/1.jpeg",
      path:"/products/rock-fall-netting"
    },
  ];

  const renderProductsGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {products.map((product, index) => (
        <Link key={index} href={product.path}>
        <ProductCard
          key={index}
          {...product}
        />
        </Link>
      ))}
    </div>
  );

  const renderMobileSwiper = () => (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        centeredSlides={false}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-gray-300 !w-2.5 !h-2.5',
          bulletActiveClass: '!bg-[#DA491A]',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="!pb-10"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Link href={product.path}>
              <ProductCard {...product} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <section className="py-10 md:py-14 px-4 bg-white">
      <div className="container mx-auto max-w-[1400px]">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
        </div>

        {/* Products Content */}
        {isMobile ? renderMobileSwiper() : renderProductsGrid()}

        {/* Know More Button */}
        <div className="text-center mt-6 md:mt-8">
          <Link href="/products" className="inline-flex items-center text-[#DA491A] hover:text-[#DA491A]/90 hover:translate-y-1 transition-colors"> 
            <span className="text-lg font-medium">View More</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
