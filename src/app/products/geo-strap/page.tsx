import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const GeoStrapPage = () => {


  return (
    <main className="min-h-screen flex flex-col bg-white">
      <div className="px-3 sm:px-6 lg:px-8">
        <Header />
      </div>
      <div className="flex-grow w-full px-3 sm:px-6 lg:px-8">
        {/* Product Image and Title Section */}
        <section className="mt-5 sm:mt-8 md:mt-10 top-20 sm:top-28 md:top-40 relative">
          <div className="max-w-[1200px] mx-auto">
        
            <div className="mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-16 md:mb-24">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURE GEO STRAP</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-3 sm:px-4 mb-4">
              Secure Geo Strap, crafted from durable polyester material, is a key component for reinforcing structures such as reinforced earth (RE) walls, retaining walls, and reinforced roads. Its sleek black colour seamlessly integrates into a variety of projects. Geo Strap excels at stabilizing and backfilling critical areas in highways, airports, and railway tracks. With superior tensile strength and flexibility, it ensures structural integrity and longevity, even under high loads and environmental stress. Available in different grades, Geo Strap offers specific properties tailored to diverse project requirements. Its reliability and versatility make it indispensable in modern infrastructure development, providing safety and stability in every application.</p>
            </div>
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md mb-60">
              <Image src="/images/products/geostrap/1.jpg" alt="Geo Strap" fill style={{ objectFit: 'contain' }} />
            </div>
            {/* Dynamic Table */}
          </div>
        </section>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
};

export default GeoStrapPage;