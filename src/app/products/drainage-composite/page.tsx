import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const DrainageCompositePage = () => {

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
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURE DRAINAGE COMPOSITE</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-3 sm:px-4 mb-4">
              Secure Drainage Composites are composed of a geotextile layer (woven or nonwoven) acting as a filter and separator on one or both sides, combined with a Geonet core. The Tech Drain Drainage Composite allows water to flow through into the polymer core while preventing soil particles from entering, ensuring efficient drainage and soil retention.            </p>
            </div>

            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md mb-60">
              <Image src="/images/products/drainage-composite/1.jpg" alt="Gabion Box" fill style={{ objectFit: 'contain' }} />
            </div>

          </div>
        </section>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
};

export default DrainageCompositePage;