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
      <div className="relative h-[450px] md:h-[700px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="p-8 md:p-12 flex flex-col justify-between h-[450px] md:h-[700px]">
        <div className="space-y-6">
          <span className="text-sm text-gray-500 uppercase tracking-wider block">
            {category}
          </span>
          <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
            {title}
          </h3>
          <div className="space-y-6">
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 text-sm md:text-base leading-relaxed">
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
      image: "/images/products/wire-fencing/Iron-Boundary-Wire-Fencing.jpg",
      category: "Wire Fencing",
      title: "Iron Boundary Wire Fencing",
      path: "/products/iron-boundary-wire-fencing",
      description: [
        "Chez CRO, notre déclaration est ancrée dans 25 années d'expérience dédiées à la relation commerciale à distance.",
        "Notre objectif ? Mettre à profit nos compétences et notre expertise client pour répondre à vos exigences en matière de services télémarketing et téléprospection B2B.",
        "En tant que partenaire essentiel, nous nous engageons à écouter, veiller, identifier, détecter, et contribuer à votre business en apportant de vrais leads. Optez pour Bizdev.store et propulsez votre entreprise vers de nouveaux horizons de croissance."
      ],
    },
    {
      image: "/images/products/gabion-box/Welded-Wire-Fencing-Gabion-Wall-Net.jpg",
      category: "Gabion Boxes",
      title: "Welded Wire Fencing Gabion Wall Net",
      path: "/products/Secure-gabion-box/welded-wire-fencing-gabion-wall-net",
      description: [
        "Chez CRO, notre déclaration est ancrée dans 25 années d'expérience dédiées à la relation commerciale à distance.",
        "Notre objectif ? Mettre à profit nos compétences et notre expertise client pour répondre à vos exigences en matière de services télémarketing et téléprospection B2B.",
        "En tant que partenaire essentiel, nous nous engageons à écouter, veiller, identifier, détecter, et contribuer à votre business en apportant de vrais leads. Optez pour Bizdev.store et propulsez votre entreprise vers de nouveaux horizons de croissance."
      ],
    },
    {
      image: "/images/products/wire-fencing/Iron-Boundary-Wire-Fencing.jpg",
      category: "Fence System",
      title: "Mild Steel Fence System",
      path: "/products/iron-boundary-wire-fencing",
      description: [
        "Chez CRO, notre déclaration est ancrée dans 25 années d'expérience dédiées à la relation commerciale à distance.",
        "Notre objectif ? Mettre à profit nos compétences et notre expertise client pour répondre à vos exigences en matière de services télémarketing et téléprospection B2B.",
        "En tant que partenaire essentiel, nous nous engageons à écouter, veiller, identifier, détecter, et contribuer à votre business en apportant de vrais leads. Optez pour Bizdev.store et propulsez votre entreprise vers de nouveaux horizons de croissance."
      ],
    },
    {
      image: "/images/products/fence-system/Pvc-Coated-Chain-Link-Fence-System.jpg",
      category: "Fence System",
      title: "Pvc Coated Chain Link Fencing",
      path: "/products/iron-boundary-wire-fencing",
      description: [
        "Chez CRO, notre déclaration est ancrée dans 25 années d'expérience dédiées à la relation commerciale à distance.",
        "Notre objectif ? Mettre à profit nos compétences et notre expertise client pour répondre à vos exigences en matière de services télémarketing et téléprospection B2B.",
        "En tant que partenaire essentiel, nous nous engageons à écouter, veiller, identifier, détecter, et contribuer à votre business en apportant de vrais leads. Optez pour Bizdev.store et propulsez votre entreprise vers de nouveaux horizons de croissance."
      ],
    }
  ];

  if (!isClient) {
    return (
      <section className="py-10 md:py-14 px-4 bg-[#FAFAFA] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
          <Image
            src="/images/dots.png"
            alt="Background pattern"
            width={160}
            height={160}
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
      <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
        <Image
          src="/images/dots.png"
          alt="Background pattern"
          width={160}
          height={160}
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
