import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const PolySecurePage = () => {
 

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <div className="px-3 sm:px-6 lg:px-8">
        <Header />
      </div>
      <div className="flex-grow w-full px-3 sm:px-6 lg:px-8">
        {/* Product Image and Title Section */}
        <section className="mt-5 sm:mt-8 md:mt-10 top-20 sm:top-28 md:top-40 relative">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/products/polysecure/1.jpg" alt="Gabion Box" fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-16 md:mb-24">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">POLY SECURE</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-3 sm:px-4 mb-60">
              For high-corrosion areas and to significantly extend the lifespan of gabion mesh, Secure Matrix introduces a new polymer coating for all its steel wire products. PA6 is an extruded polyamide coating applied to Zinc + Al and galvanized mild steel wire products. The PA6 polymer-coated mesh offers significantly improved environmental and technical performance compared to conventional PVC-coated mesh products. It is free from phthalates, ozone-depleting chemicals, and heavy metals. Additionally, unlike PVC, it does not emit hydrogen chloride when burned.
              </p>
            </div>
            {/* Content Section */}
            <div className="mb-50">
              <h2 className="text-lg font-bold ">PVC V/S SPA6 ADVANCE POLYMER COATING</h2>
              <ul className="list-disc pl-5">
                <li>3x Better adhesion to steel wire</li>
                <li>50% harder and better able to resist the damage</li>
                <li>25% more elongation after 3000 Hrs UV test</li>
                <li>Long Term Strength & Elasticity</li>
                <li>Resistance to Hydrocarbon Pollutants</li>
                <li>Better cols Temperature Performance</li>    
                <li>Resistance to mechanical damage</li>
                <li>Better Environmental Performance</li>
              </ul>
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

export default PolySecurePage;