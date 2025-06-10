import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const RockfallNettingPage = () => {
  
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
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURE ROCKFALL NETTING</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-3 sm:px-4">
              Secure DT Mesh Rockfall Netting is a high-strength, double-twisted hexagonal wire mesh designed for superior rockfall protection and slope stabilization. Constructed from zinc-coated galvanized wire with an advanced PA6 polymer coating, it offers exceptional durability and resistance to harsh environmental conditions. Reinforced with wire ropes spaced at regular intervals, it effectively prevents rockfalls, landslides, and debris movement in mountainous regions, cliffs, tunnels, and construction zones.     
              </p>
            </div>

            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/products/rock-fall-netting/1.png" alt="Rockfall Netting" fill style={{ objectFit: 'contain' }} />
            </div>

            <div className="overflow-x-auto mb-50">
  <table className="table-auto border-collapse w-full max-w-screen-xl mx-auto text-xs bg-white shadow font-bold">
    <thead>
      <tr className="min-h-[60px]">
        <th rowSpan={3} className="border border-black px-4 py-4 w-12 bg-gray-200">Sr.<br />No.</th>
        <th rowSpan={3} className="border border-black px-4 py-4 text-left w-48 bg-gray-200">Characteristics</th>
        <th colSpan={9} className="border border-black px-4 py-4 text-center bg-gray-300">Mesh Type</th>
      </tr>
      <tr className="min-h-[50px]">
        <th colSpan={3} className="border border-black px-4 py-4 text-center bg-gray-100">10×12<br />D=100 mm</th>
        <th colSpan={3} className="border border-black px-4 py-4 text-center bg-gray-100">8×10<br />D=80 mm</th>
        <th colSpan={3} className="border border-black px-4 py-4 text-center bg-gray-100">6×8<br />D=60 mm</th>
      </tr>
      <tr className="min-h-[60px]">
        <th colSpan={2} className="border border-black px-4 py-4 text-center bg-gray-100 text-[11px] leading-relaxed min-w-[100px]">
          Only Zinc / Zinc<br />Alloy<sup className="align-super text-[9px]">2</sup> coated
        </th>
        <th className="border border-black px-4 py-4 text-center bg-gray-100 text-[11px] leading-relaxed min-w-[100px]">
          Zinc / Zinc Alloy<sup className="align-super text-[9px]">2</sup> +<br />Polymer coated
        </th>
        <th colSpan={2} className="border border-black px-4 py-4 text-center bg-gray-100 text-[11px] leading-relaxed min-w-[100px]">
          Only Zinc / Zinc<br />Alloy<sup className="align-super text-[9px]">2</sup> coated
        </th>
        <th className="border border-black px-4 py-4 text-center bg-gray-100 text-[11px] leading-relaxed min-w-[100px]">
          Zinc / Zinc Alloy<sup className="align-super text-[9px]">2</sup> +<br />Polymer coated
        </th>
        <th className="border border-black px-4 py-4 text-center bg-gray-100 text-[11px] leading-relaxed min-w-[100px]">
         Only Zinc / Zinc Alloy<sup className="align-super text-[9px]">2</sup><br />Coated
        </th>
        <th className="border border-black px-4 py-4 text-center bg-gray-100 text-[11px] leading-relaxed min-w-[100px]">
          Zinc / Zinc Alloy<sup className="align-super text-[9px]">2</sup> +<br />Polymer coated
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="min-h-[50px]">
        <td className="border border-black text-center px-4 py-4">1</td>
        <td className="border border-black text-left px-4 py-4">Mesh wire dia, mm</td>
        <td className="border border-black text-center px-4 py-4">2.70</td>
        <td className="border border-black text-center px-4 py-4">3.00</td>
        <td className="border border-black text-center px-4 py-4">2.70/3.70<sup className="align-super text-[9px]">1)</sup></td>
        <td className="border border-black text-center px-4 py-4">2.70</td>
        <td className="border border-black text-center px-4 py-4">3.00</td>
        <td className="border border-black text-center px-4 py-4">2.70/3.70<sup className="align-super text-[9px]">1)</sup></td>
        <td className="border border-black text-center px-4 py-4">2.20</td>
        <td className="border border-black text-center px-4 py-4">2.20/3.20<sup className="align-super text-[9px]">1)</sup></td>
      </tr>
      <tr className="min-h-[50px]">
        <td className="border border-black text-center px-4 py-4">2</td>
        <td className="border border-black text-left px-4 py-4">Edge/Selvedge wire dia, mm</td>
        <td className="border border-black text-center px-4 py-4">3.40</td>
        <td className="border border-black text-center px-4 py-4">3.90</td>
        <td className="border border-black text-center px-4 py-4">3.40/4.40<sup className="align-super text-[9px]">1)</sup></td>
        <td className="border border-black text-center px-4 py-4">3.40</td>
        <td className="border border-black text-center px-4 py-4">3.90</td>
        <td className="border border-black text-center px-4 py-4">3.40/4.40<sup className="align-super text-[9px]">1)</sup></td>
        <td className="border border-black text-center px-4 py-4">2.70</td>
        <td className="border border-black text-center px-4 py-4">2.70/3.70<sup className="align-super text-[9px]">1)</sup></td>
      </tr>
      <tr className="min-h-[50px]">
        <td className="border border-black text-center px-4 py-4">3</td>
        <td className="border border-black text-left px-4 py-4">Lacing wire dia, mm</td>
        <td className="border border-black text-center px-4 py-4">2.20</td>
        <td className="border border-black text-center px-4 py-4">2.20</td>
        <td className="border border-black text-center px-4 py-4">2.20/3.20<sup className="align-super text-[9px]">1)</sup></td>
        <td className="border border-black text-center px-4 py-4">2.20</td>
        <td className="border border-black text-center px-4 py-4">2.20</td>
        <td className="border border-black text-center px-4 py-4">2.20/3.20<sup className="align-super text-[9px]">1)</sup></td>
        <td className="border border-black text-center px-4 py-4">2.20</td>
        <td className="border border-black text-center px-4 py-4">2.20/3.20<sup className="align-super text-[9px]">1)</sup></td>
      </tr>
      <tr className="min-h-[60px]">
        <td className="border border-black text-center px-4 py-4">4</td>
        <td className="border border-black text-left px-4 py-4">Polymer coating thickness, mm</td>
        <td colSpan={2} className="border border-black text-center px-4 py-4">NA</td>
        <td className="border border-black text-center px-4 py-4 text-[11px] leading-relaxed">Nominal-0.50,<br />Minimum-0.40</td>
        <td colSpan={2} className="border border-black text-center px-4 py-4">NA</td>
        <td className="border border-black text-center px-4 py-4 text-[11px] leading-relaxed">Nominal-0.50,<br />Minimum-0.40</td>
        <td className="border border-black text-center px-4 py-4">NA</td>
        <td className="border border-black text-center px-4 py-4 text-[11px] leading-relaxed">Nominal-0.50,<br />Minimum-0.40</td>
      </tr>
      <tr className="min-h-[80px]">
        <td className="border border-black text-center px-4 py-4">5</td>
        <td className="border border-black text-left px-4 py-4">
          Typical Sizes Length × Width × Height(m)<br />(Number of diaphragms)
        </td>
        <td colSpan={9} className="border border-black text-left px-4 py-4 text-[11px] leading-relaxed break-words">
        25 × 2, 25 × 3 and 25 × 4
        </td>
      </tr>
      <tr className="min-h-[60px]">
        <td className="border border-black text-center px-4 py-4">6</td>
        <td className="border border-black text-left px-4 py-4">Tolerances in size of gabion boxes</td>
        <td colSpan={9} className="border border-black text-left px-4 py-4 text-[11px] leading-relaxed break-words">
        Length and Width... ± 5 percent; Height &gt; 0.3 m... ± 5 percent and
Length + 1.0m to -0.0m, width + “D
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr className="min-h-[50px]">
        <td colSpan={11} className="border border-black text-left px-4 py-4 bg-gray-50 text-[11px] leading-relaxed">
          <sup className="align-super text-[10px">1)</sup> Internal diameter/External diameter of polymer coated wire.
        </td>
      </tr>
      <tr className="min-h-[50px]">
        <td colSpan={11} className="border border-black text-left px-4 py-4 bg-gray-50 text-[11px] leading-relaxed">
          <sup className="align-super text-[10px">2)</sup> Zinc Alloy shall consist of 90% Zinc + 10% Aluminium or 95% Zinc + 5% Aluminium.
        </td>
      </tr>
    </tfoot>
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

export default RockfallNettingPage;