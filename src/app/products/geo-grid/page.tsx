import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const GeoGridPage = () => {


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
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURELINK-GEOGRID</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-3 sm:px-4 mb-4">
              Securelink Geogrid is a geosynthetic material, specifically a geogrid, made of polyester (PET) with a polymer or PVC coating. It's used for reinforcing soils and similar materials in various applications, including ground improvement, retaining walls, and slope stabilization. Securelink Geogrid comes in two types: Uniaxial (SLU-Grid) for applications requiring tensile strength in one direction, and Biaxial (SLB-Grid) for applications needing tensile strength in both directions. 
              </p>
            </div>

            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md mb-60">
              <Image src="/images/products/geogrid/1.png" alt="Gabion Box" fill style={{ objectFit: 'contain' }} />
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

export default GeoGridPage;