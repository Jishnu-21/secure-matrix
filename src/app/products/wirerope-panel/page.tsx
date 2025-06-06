import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const WireRopePanelPage = () => {
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
              <Image src="/images/products/wire-rope/1.png" alt="Wire Rope Panel" fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-16 md:mb-24">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURE WIRE ROPE PANEL</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-3 sm:px-4">
              Secure Rhomboidal Rockfall Netting is an advanced, high-strength protective mesh system designed to ensure maximum safety in challenging terrains. It features reinforced, high-strength wire knots that enhance durability and resistance to both static and dynamic stresses. These reinforcements use double steel wire knots, providing double binding with two separate wires for increased reliability. Ideal for rockfall protection, slope stabilization, and infrastructure security, this netting delivers superior flexibility, impact resistance, and long-term performance.              </p>
            </div>
            {/* Dynamic Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mt-8">
                <thead>
                  <tr>
                    <th rowSpan={2} className="border p-2">Items</th>
                    <th rowSpan={2} className="border p-2">Nominal Net Size<sup>a</sup>(mm)</th>
                    <th colSpan={2} className="border p-2">Net Wire Ropes</th>
                    <th colSpan={2} className="border p-2">Peripheral Wire ropes (optional)</th>
                  </tr>
                  <tr>
                    <th className="border p-2">Diameter(mm) and type<sup>b</sup></th>
                    <th className="border p-2">Minimum breaking load (KN)</th>
                    <th className="border p-2">Diameter(mm) and type<sup>b</sup></th>
                    <th className="border p-2">Minimum breaking load (KN)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Wire Rope net panel Double knot</td>
                    <td className="border p-2">250 x 250<br />300 x 300<br />400 x 400</td>
                    <td className="border p-2">8 mm 6 x 7 + WC<br />10 mm 6 x 19 + WC<br />12 mm 6 x 19 + WC</td>
                    <td className="border p-2">40.7<br />63.0<br />90.7</td>
                    <td className="border p-2">10 mm 6 x 19 + WC<br />12 mm 6 x 19 + WC<br />14 mm 6 x 19 + WC<br />16 mm 6 x 19 + WC</td>
                    <td className="border p-2">63.0<br />90.7<br />124.0<br />161.0</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Wire Rope net panel Clips knot</td>
                    <td className="border p-2">200 x 200<br />250 x 250<br />300 x 300</td>
                    <td className="border p-2">8 mm 6 x 7 + WC</td>
                    <td className="border p-2">40.7</td>
                    <td className="border p-2">10 mm 6 x 19 + WC<br />12 mm 6 x 19 + WC<br />14 mm 6 x 19 + WC<br />16 mm 6 x 19 + WC</td>
                    <td className="border p-2">63.0<br />90.7<br />124.0<br />161.0</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Wire rope net rolls without connection clips</td>
                    <td className="border p-2">250 x 250<br />275 x 275</td>
                    <td className="border p-2">8,6 mm (3 x 4) mm<br />6,6 mm (3 x 3) mm</td>
                    <td className="border p-2">61.4<br />36.7</td>
                    <td className="border p-2">12 mm 6 x 19 + WC<br />16 mm 6 x 19 + WC</td>
                    <td className="border p-2">90.7<br />161.3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Notes Section */}
            <div className="text-sm text-left mb-50 mt-10">
              <p><sup>a</sup> The tolerance on the nominal size is ±10 % but can change in relation to the panel dimensions.</p>
              <p><sup>b</sup> Rope type (see ISO 2408), rope grade 1770 N/mm².</p>
              <p>Other net sizes are possible, in accordance with project design requirements.</p>
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

export default WireRopePanelPage;