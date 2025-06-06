import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const RockfallNettingPage = () => {
  const tableData = {
    meshWireDia_10x12_Zinc: "2.70",
    meshWireDia_10x12_Polymer: "3.00",
    meshWireDia_10x12_PolymerCoated: "2.70/3.70¹",
    meshWireDia_8x10_Zinc: "2.70",
    meshWireDia_8x10_Polymer: "3.00",
    meshWireDia_8x10_PolymerCoated: "2.70/3.20¹",
    meshWireDia_6x8_Zinc: "2.20",
    meshWireDia_6x8_Polymer: "2.20/3.20¹",
    edgeWireDia_10x12_Zinc: "3.40",
    edgeWireDia_10x12_Polymer: "3.90",
    edgeWireDia_10x12_PolymerCoated: "3.40/4.40¹",
    edgeWireDia_8x10_Zinc: "3.40",
    edgeWireDia_8x10_Polymer: "3.90",
    edgeWireDia_8x10_PolymerCoated: "3.40/4.40¹",
    edgeWireDia_6x8_Zinc: "2.70",
    edgeWireDia_6x8_Polymer: "2.70/3.70¹",
    lacingWireDia_10x12_Zinc: "2.20",
    lacingWireDia_10x12_Polymer: "2.20",
    lacingWireDia_10x12_PolymerCoated: "2.20/3.20¹",
    lacingWireDia_8x10_Zinc: "2.20",
    lacingWireDia_8x10_Polymer: "2.20",
    lacingWireDia_8x10_PolymerCoated: "2.20/3.20¹",
    lacingWireDia_6x8_Zinc: "2.20",
    lacingWireDia_6x8_Polymer: "2.20/3.20¹",
    polymerThickness_10x12_Polymer: "Nominal-0.50, Minimum-0.40",
    polymerThickness_8x10_Polymer: "Nominal-0.50, Minimum-0.40",
    polymerThickness_6x8_Polymer: "Nominal-0.50, Minimum-0.40",
    typicalSizes: "25 x 2, 25 x 3 and 25 x 4",
    tolerances: "Length and Width: ± 5 percent; Height > 0.3 m: ± 5 percent and Length + 1.0m to -0.0m, width + 'D'"
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
              <Image src="/images/products/rock-fall-netting/1.png" alt="Rockfall Netting" fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-16 md:mb-24">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURE ROCKFALL NETTING</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-3 sm:px-4">
              Secure DT Mesh Rockfall Netting is a high-strength, double-twisted hexagonal wire mesh designed for superior rockfall protection and slope stabilization. Constructed from zinc-coated galvanized wire with an advanced PA6 polymer coating, it offers exceptional durability and resistance to harsh environmental conditions. Reinforced with wire ropes spaced at regular intervals, it effectively prevents rockfalls, landslides, and debris movement in mountainous regions, cliffs, tunnels, and construction zones.     
              </p>
            </div>
            {/* Dynamic Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mt-8">
                <thead>
                  <tr>
                    <th rowSpan={2} className="border p-2">Sr. No.</th>
                    <th rowSpan={2} className="border p-2">Characteristics</th>
                    <th colSpan={2} className="border p-2">Mesh Type 10x12<br />D=100 mm</th>
                    <th colSpan={2} className="border p-2">Mesh Type 8x10<br />D=80 mm</th>
                    <th colSpan={2} className="border p-2">Mesh Type 6x8<br />D=60 mm</th>
                  </tr>
                  <tr>
                    <th className="border p-2">Only Zinc / Zinc Alloy² coated</th>
                    <th className="border p-2">Zinc / Zinc Alloy² + Polymer coated</th>
                    <th className="border p-2">Only Zinc / Zinc Alloy² coated</th>
                    <th className="border p-2">Zinc / Zinc Alloy² + Polymer coated</th>
                    <th className="border p-2">Only Zinc / Zinc Alloy² coated</th>
                    <th className="border p-2">Zinc / Zinc Alloy² + Polymer coated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">1</td>
                    <td className="border p-2">Mesh wire dia, mm</td>
                    <td className="border p-2">{tableData.meshWireDia_10x12_Zinc}</td>
                    <td className="border p-2">{tableData.meshWireDia_10x12_Polymer}</td>
                    <td className="border p-2">{tableData.meshWireDia_8x10_Zinc}</td>
                    <td className="border p-2">{tableData.meshWireDia_8x10_Polymer}</td>
                    <td className="border p-2">{tableData.meshWireDia_6x8_Zinc}</td>
                    <td className="border p-2">{tableData.meshWireDia_6x8_Polymer}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">2</td>
                    <td className="border p-2">Edge/Selvedge wire dia, mm</td>
                    <td className="border p-2">{tableData.edgeWireDia_10x12_Zinc}</td>
                    <td className="border p-2">{tableData.edgeWireDia_10x12_Polymer}</td>
                    <td className="border p-2">{tableData.edgeWireDia_8x10_Zinc}</td>
                    <td className="border p-2">{tableData.edgeWireDia_8x10_Polymer}</td>
                    <td className="border p-2">{tableData.edgeWireDia_6x8_Zinc}</td>
                    <td className="border p-2">{tableData.edgeWireDia_6x8_Polymer}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">3</td>
                    <td className="border p-2">Lacing wire dia, mm</td>
                    <td className="border p-2">{tableData.lacingWireDia_10x12_Zinc}</td>
                    <td className="border p-2">{tableData.lacingWireDia_10x12_Polymer}</td>
                    <td className="border p-2">{tableData.lacingWireDia_8x10_Zinc}</td>
                    <td className="border p-2">{tableData.lacingWireDia_8x10_Polymer}</td>
                    <td className="border p-2">{tableData.lacingWireDia_6x8_Zinc}</td>
                    <td className="border p-2">{tableData.lacingWireDia_6x8_Polymer}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">4</td>
                    <td className="border p-2">Polymeric coating thickness, mm</td>
                    <td className="border p-2">NA</td>
                    <td className="border p-2">{tableData.polymerThickness_10x12_Polymer}</td>
                    <td className="border p-2">NA</td>
                    <td className="border p-2">{tableData.polymerThickness_8x10_Polymer}</td>
                    <td className="border p-2">NA</td>
                    <td className="border p-2">{tableData.polymerThickness_6x8_Polymer}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">5</td>
                    <td className="border p-2">Typical Sizes<br />Length x Width (m)</td>
                    <td colSpan={6} className="border p-2">{tableData.typicalSizes}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">6</td>
                    <td className="border p-2">Tolerances in size of Netting rolls</td>
                    <td colSpan={6} className="border p-2">{tableData.tolerances}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Notes Section */}
            <div className="text-sm text-left mb-50 mt-10">
              <p>¹ Internal diameter/External diameter of polymer coated wire.</p>
              <p>² Zinc Alloy shall consist to 90 percent zinc + 10 percent Aluminium or 95 percent Zinc + 5 percent Aluminium.</p>
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