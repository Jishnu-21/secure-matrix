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
  <div className="group relative overflow-hidden rounded-lg border-t-4 border-[#DA491A]">
    {/* Image with overlay */}
    <div className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/50" />
      {/* Orange gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#DA491A] via-transparent to-transparent opacity-30 group-hover:opacity-35 transition-opacity duration-300" />
    </div>
    
    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
      <h3 className="text-xl md:text-2xl font-medium text-white mb-3">{title}</h3>
      <p className="text-white/90 text-sm md:text-base leading-relaxed">{description}</p>
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
      title: "Gabion Mattress",
      description: "Durable and efficient for erosion control and landscape reinforcement.",
      imageUrl: "/images/gabion-mattresss.jpg",
      path:"/products/gabion-mattress"
    },
    {
      title: "Fence System",
      description: "Secure and adaptable fencing solutions for various applications.",
      imageUrl: "/images/fence-system.jpg",
      path:"/products/fence-system"
    },
    {
      title: "Wire Fencing",
      description: "Strong and versatile fencing for enhanced security and durability.",
      imageUrl: "/images/wire-fencing.jpg",
      path:"/products/wire-fencing"
    },
    {
      title: "Gabion Wall Net",
      description: " Robust and eco-friendly solution for retaining walls and enclosures.",
      imageUrl: "/images/gabion-wall-net.jpg",
      path:"/products/gabion-wall-net"
    },
    {
      title: "Barbed Wire",
      description: "High-strength barrier for maximum security and protection.",
      imageUrl: "/images/barbed-wire.jpg",
      path:"/products/barbed-wire"
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
    <div className="relative pb-14">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1.1}
        centeredSlides={true}
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
          <SwiperSlide key={index} className="pb-4">
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-[1400px] px-4">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
        </div>

        {/* Products Content */}
        {isMobile ? renderMobileSwiper() : renderProductsGrid()}

        {/* Know More Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center text-[#DA491A] hover:text-[#DA491A]/80 transition-colors">
          <Link href="/products"> 
            <span className="text-lg font-medium">View More</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
