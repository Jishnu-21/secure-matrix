import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const Pro3DPage = () => {

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
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURE PRO 3D</h1>
            </div>
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md mb-4">
              <Image src="/images/products/pro-3d/1.jpg" alt="Pro 3D" fill style={{ objectFit: 'contain' }} />
            </div>

            {/* Dynamic Table */}
            <div className="overflow-x-auto mb-50">
              <table className="w-full border-collapse mt-5">
                <thead>
                  <tr>
                    <th colSpan={3} className="border p-2">SECURE PRO 3D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Profile</td>
                    <td className="border p-2">Secure H Profiled Posts</td>
                    <td className="border p-2">SHS Posts</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Section Sizes</td>
                    <td className="border p-2">68 X 42 X 2.00 mm</td>
                    <td className="border p-2">60 X 60 X 3.00 mm</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Height</td>
                    <td colSpan={2} className="border p-2">Variable as per design</td>
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

export default Pro3DPage;