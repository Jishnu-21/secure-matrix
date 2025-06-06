import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const SackGabionPage = () => {
  const tableData = {
    meshWireDia_10x12_Zinc: "2.70",
    meshWireDia_10x12_Polymer: "3.00",
    meshWireDia_8x10_Zinc: "2.70",
    meshWireDia_8x10_Polymer: "3.00",
    edgeWireDia_10x12_Zinc: "3.40",
    edgeWireDia_10x12_Polymer: "3.90",
    edgeWireDia_8x10_Zinc: "3.40",
    edgeWireDia_8x10_Polymer: "3.90",
    lacingWireDia_10x12_Zinc: "2.20",
    lacingWireDia_10x12_Polymer: "2.20",
    lacingWireDia_8x10_Zinc: "2.20",
    lacingWireDia_8x10_Polymer: "2.20",
    polymerThickness_10x12_Zinc: "NA",
    polymerThickness_10x12_Polymer: "Nominal-0.50, Minimum-0.40",
    polymerThickness_8x10_Zinc: "NA",
    polymerThickness_8x10_Polymer: "Nominal-0.50, Minimum-0.40",
    typicalSizes: "4 x 1 x 1 (3 Nos.), 3 x 1 x 1 (2 Nos.), 2 x 1 x 1 (1 No.), 1.5 x 1 x 1 (0 No.), 2 x 1 x 0.5 (1 No.), 3 x 1 x 0.5 (2 Nos.), 4 x 1 x 0.5 (3 Nos.), 2 x 1 x 0.3 (1 No.), 3 x 1 x 0.3 (2 Nos.), 4 x 1 x 0.3 (3 Nos.)",
    tolerances: "Length and Width: ± 5 percent; Height > 0.3 m: ± 5 percent and Height ≤ 0.3 m: ± 10 percent"
  };

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
              <Image src="/images/products/sack-gabion/1.png" alt="Gabion Box" fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-16 md:mb-24">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURE SACK GABION</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-3 sm:px-4">
              Our Stainless-steel Sack Gabion Mattress is designed to provide effective erosion protection for riverbanks. It is also used around bridge piers to offer immediate defence against water-induced erosion. These are tubular units made from stainless steel, filled with gabion stones to prevent displacement. Once filled, the units are tightly laced and placed at the project site. The mesh has a hexagonal shape and is treated with galvanization for a durable, finished surface. The primary purpose of our Stainless-Steel Sack Gabion Mattress is to ensure safety and structural security.</p>
            </div>
            {/* Dynamic Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mt-8">
                <thead>
                  <tr>
                    <th rowSpan={2} className="border p-2">Sr. No.</th>
                    <th rowSpan={2} className="border p-2">Characteristics</th>
                    <th colSpan={2} className="border p-2">Mesh Type</th>
                  </tr>
                  <tr>
                    <th className="border p-2">10x12<br />D=100 mm</th>
                    <th className="border p-2">8x10<br />D=80 mm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">1</td>
                    <td className="border p-2">Mesh wire dia, mm</td>
                    <td className="border p-2">2.70</td>
                    <td className="border p-2">2.70</td>
                  </tr>
                  <tr>
                    <td className="border p-2">2</td>
                    <td className="border p-2">Edge/Selvedge wire dia, mm</td>
                    <td className="border p-2">3.40</td>
                    <td className="border p-2">3.40</td>
                  </tr>
                  <tr>
                    <td className="border p-2">3</td>
                    <td className="border p-2">Lacing wire dia, mm</td>
                    <td className="border p-2">2.20</td>
                    <td className="border p-2">2.20</td>
                  </tr>
                  <tr>
                    <td className="border p-2">4</td>
                    <td className="border p-2">Polymer coating thickness, mm</td>
                    <td className="border p-2">NA</td>
                    <td className="border p-2">Nominal-0.50, Minimum-0.40</td>
                  </tr>
                  <tr>
                    <td className="border p-2">5</td>
                    <td className="border p-2">Typical sizes<br />Length X Diameter (m)</td>
                    <td colSpan={2} className="border p-2">1.5 x 0.74, 2 x 0.96</td>
                  </tr>
                  <tr>
                    <td className="border p-2">6</td>
                    <td className="border p-2">Tolerances in size of units</td>
                    <td colSpan={2} className="border p-2">Length and Diameter: ± 5 percent; Height &gt; 0.3 m: ± 5 percent and Height &lt; 0.3 m: ± 10 percent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Notes Section */}
            <div className="text-sm text-left mb-50 mt-10">
              <p><sup>1</sup> Internal diameter/External diameter of polymer coated wire.</p>
              <p><sup>2</sup> Zinc Alloy shall consist to 90 percent zinc + 10 percent Aluminium or 95 percent Zinc + 5 percent Aluminium.</p>
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

export default SackGabionPage;