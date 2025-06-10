import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const ProAura3DPage = () => {


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
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURE PRO AURA 3D</h1>
            </div>

            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md mb-8">
              <Image src="/images/products/proaura/1.png" alt="Pro Aura 3D" fill style={{ objectFit: 'contain' }} />
            </div>
            {/* Dynamic Table */}
            <div className="overflow-x-auto mb-50">
              <table className="w-full border-collapse mt-5">
                <thead>
                  <tr>
                    <th colSpan={2} className="border p-2">SECURE PRO AURA 3D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Parameters</td>
                    <td className="border p-2">Specifications</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Input Voltage</td>
                    <td className="border p-2">90V Ac to 270V Ac</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Frequency</td>
                    <td className="border p-2">50 Hz</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Wattage</td>
                    <td className="border p-2">9 watts</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Led colour temperature (CCT)</td>
                    <td className="border p-2">6500K (cool white)</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Optical Cover</td>
                    <td className="border p-2">Polycarbonate (LEXAN)</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Housing Materials</td>
                    <td className="border p-2">Aluminium pressure die cast</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Viewing Angle</td>
                    <td className="border p-2">120°</td>
                  </tr>
                  <tr>
                    <td className="border p-2">IP rating</td>
                    <td className="border p-2">IP 67</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Efficiency</td>
                    <td className="border p-2">85%</td>
                  </tr>
                </tbody>
              </table>
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

export default ProAura3DPage;