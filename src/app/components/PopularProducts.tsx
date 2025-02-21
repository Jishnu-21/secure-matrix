"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';

import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  description: string[];
  path: string;
}

const ProductCard = ({ image, category, title, description, path }: ProductCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Left side - Image */}
      <div className="relative h-[250px] md:h-[700px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="p-5 md:p-12 flex flex-col justify-between h-auto md:h-[700px]">
        <div className="space-y-3 md:space-y-6">
          <span className="text-sm text-gray-500 uppercase tracking-wider block">
            {category}
          </span>
          <h3 className="text-lg md:text-3xl font-medium text-gray-900 line-clamp-2 md:line-clamp-none">
            {title}
          </h3>
          <div className="space-y-2 md:space-y-6">
            {description.map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-gray-600 text-sm md:text-base leading-relaxed ${
                  index > 0 ? 'hidden md:block' : 'line-clamp-3 md:line-clamp-none'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
);

const PopularProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const products = [
    {
      image:"/images/products/geotextile/non-woven/1.jpg",
      category: "SECURE® Geotextile",
      title: "SECURE® Non-Woven Geotextile",
      path: "/products/Secure-geotextile/secure-non-woven-geotextile",
      description: [
        "SECURE® Non-Woven Geotextile is a high-strength filtration fabric that prevents soil erosion and displacement while ensuring efficient water drainage. Designed for slopes, riverbanks, and infrastructure projects, it offers long-lasting protection in demanding environments.",
      ],
    },
    {
      image:"/images/products/gabion-mattress/1.jpeg",
      category: "SECURE® Gabion Mattress",
      title: "SECURE® Gabion Revet Mattress",
      path: "/products/secure-gabion-mattress/secure-gabion-revet-mattress",
      description: [
        "SECURE® Gabion Revet Mattress is a durable, interlocking containment system. Ideal for stabilizing riverbeds, coastal zones, and slopes. It offers long-term structural stability while blending naturally into the environment. Galvanized and PVC-coated for high corrosion resistance. Suits industrial, agricultural, and defense applications."
      ],
    },
    {
      image:"/images/products/gabion-box/1.jpeg",
      category: "Secure® Gabion Box",
      title: "Secure® Gabion Box",
      path: "/products/Secure-gabion-box/secure-gabion-box",
      description: [
        "SECURE® Gabion Box is a high-strength mesh, Designed for erosion control and structural reinforcement. Its double-twisted hexagonal mesh ensures flexibility and durability, while zinc galvanization and Polymer PA6 coating provide corrosion resistance in harsh environments. Ideal for infrastructure, defense, and industrial applications.",
      ],
    },
    {
      image:"/images/products/rock-fall-netting/dt-mesh/1.jpeg",
      category: "Secure® Rock Fall Netting",
      title: "SECURE® DT Mesh Netting",
      path: "/products/rock-fall-netting/secure-dt-mesh-rock-fall-netting",
      description: [
        "SECURE® DT Mesh Rock Fall Netting is a high-strength, double-twisted hexagonal wire mesh designed for rockfall protection and slope stabilization. It offers superior durability, corrosion resistance, and flexibility. Effectively prevents rockfalls, landslides and construction zones, ensuring long-term safety and stability."
      ],
    }
  ];

  if (!isClient) {
    return (
      <section className="py-10 md:py-14 px-4 bg-[#FAFAFA] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-[50%] h-full opacity-10 pointer-events-none">
          <Image
            src="/images/hex-pattern.png"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto max-w-[1400px]">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Most Popular Products</h2>
            <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
          </div>

          {/* Products Grid */}
          <div className="w-full">
            <div className="w-full">
              <Link href={products[0].path}>
              <ProductCard {...products[0]} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-14 px-4 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-10 pointer-events-none">
        <Image
          src="/images/hex-pattern.png"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto max-w-[1400px]">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Most Popular Products</h2>
          <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
            className="w-full"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Link href={product.path}>
                <ProductCard {...product} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Indicators */}
          <div className="flex justify-center items-center gap-3 mt-5">
            {products.map((_, index) => (
              <div
                key={index}
                className={`h-[3px] transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-[#DA491A]' 
                    : 'w-4 bg-gray-300 hover:bg-[#DA491A]/50'
                }`}
                role="button"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
