import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const GabionMattressPage = () => {
  const tableData = {
    meshWireDia_6x8_Zinc: "2.20",
    meshWireDia_6x8_Polymer: "2.20/3.20¹",
    edgeWireDia_6x8_Zinc: "2.70",
    edgeWireDia_6x8_Polymer: "2.70/3.70¹",
    lacingWireDia_6x8_Zinc: "2.20",
    lacingWireDia_6x8_Polymer: "2.20/3.20¹",
    polymerThickness_6x8_Zinc: "NA",
    polymerThickness_6x8_Polymer: "Nominal-0.50, Minimum-0.40",
    typicalSizes: "4 x 2 x 0.17 (3 Nos.), 3 x 2 x 0.17 (2 Nos.), 2 x 2 x 0.17 (1 No.), 4 x 2 x 0.23 (3 Nos.), 3 x 2 x 0.23 (2 Nos.), 2 x 2 x 0.23 (1 No.), 4 x 2 x 0.30 (3 Nos.), 3 x 2 x 0.30 (2 Nos.), 2 x 2 x 0.30 (1 No.)",
    tolerances: "Length and Width: ± 5 percent; Height < 0.3 m: ± 10 percent"
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
         
            <div className="mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-16 md:mb-24">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURE GABION MATRESSES</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-3 sm:px-4">
              The Secure Gabion Revet Mattress is a durable, interlocking containment system made from mechanically woven, double-twisted hexagonal steel wire mesh. It is an ideal solution for stabilizing wide or shallow areas such as riverbeds, coastal zones, and slopes. Designed to blend naturally into the environment, it offers long-term structural stability while minimizing visual impact. The galvanized and Polymer-coated surface ensures high corrosion resistance, making it suitable for industrial, agricultural, and defence applications.              </p>
            </div>

            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/products/gabion-mattress/1.png" alt="Gabion Mattress"fill style={{ objectFit: 'contain' }} />
            </div>

            {/* Dynamic Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mt-8">
                <thead>
                  <tr>
                    <th rowSpan={2} className="border p-2">Sr. No.</th>
                    <th rowSpan={2} className="border p-2">Characteristics</th>
                    <th colSpan={2} className="border p-2">Mesh Type 6x8<br />D=60 mm</th>
                  </tr>
                  <tr>
                    <th className="border p-2">Only Zinc / Zinc Alloy² coated</th>
                    <th className="border p-2">Zinc / Zinc Alloy² + Polymer coated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">1</td>
                    <td className="border p-2">Mesh wire dia, mm</td>
                    <td className="border p-2">{tableData.meshWireDia_6x8_Zinc}</td>
                    <td className="border p-2">{tableData.meshWireDia_6x8_Polymer}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">2</td>
                    <td className="border p-2">Edge/Selvedge wire dia, mm</td>
                    <td className="border p-2">{tableData.edgeWireDia_6x8_Zinc}</td>
                    <td className="border p-2">{tableData.edgeWireDia_6x8_Polymer}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">3</td>
                    <td className="border p-2">Lacing wire dia, mm</td>
                    <td className="border p-2">{tableData.lacingWireDia_6x8_Zinc}</td>
                    <td className="border p-2">{tableData.lacingWireDia_6x8_Polymer}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">4</td>
                    <td className="border p-2">Polymer coating thickness, mm</td>
                    <td className="border p-2">{tableData.polymerThickness_6x8_Zinc}</td>
                    <td className="border p-2">{tableData.polymerThickness_6x8_Polymer}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">5</td>
                    <td className="border p-2">Typical Sizes<br />Length x Width X Height(m)<br />(Number of diaphragms)</td>
                    <td colSpan={2} className="border p-2">{tableData.typicalSizes}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">6</td>
                    <td className="border p-2">Tolerances in size of Revet mattresses</td>
                    <td colSpan={2} className="border p-2">{tableData.tolerances}</td>
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

export default GabionMattressPage;