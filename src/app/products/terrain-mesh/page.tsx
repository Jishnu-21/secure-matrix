import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const TerrainMeshPage = () => {
  const tableData = {
    meshWireDia: "2.70/3.70¹",
    edgeWireDia: "3.40/4.40¹",
    lacingWireDia: "2.20/3.20¹",
    polymerThickness: "Nominal-0.50, Minimum-0.40",
    typicalSizes: "3 x 2 x 0.5 (1 No.), 3 x 3 x 0.5 (2 Nos.), 4 x 2 x 0.5 (1 No.), 4 x 3 x 0.5 (2 Nos.),\n5 x 2 x0.5 (1 No.), 5 x 3 x 0.5 (2 Nos.), 6 x 2 x 0.5 (1 No.), 6 x 3 x 0.5 (2 Nos.)\n3 x 2 x 1 (1 No.), 3 x 3 x 1 (2 Nos.), 4 x 2 x 1 (1 No.), 4 x 3 x 1 (2 Nos.),\n5 x 2 x 1 (2 Nos.), 5 x 3 x 1 (2 Nos.), 3 x 2 x 1 (1 No.), 6 x 3 x 1 (2 Nos.)\n3 x 2 x 0.8 (1 No.), 3 x 3 x 0.8 (2 Nos.), 4 x 2 x 0.8 (1 No.), 4 x 3 x 0.8 (2 Nos.),\n5 x 2 x 0.8(2 Nos.), 5 x 3 x 0.8 (2 Nos.), 3 x 2 x 0.8 (1 No.), 6 x 3 x 0.8 (2 Nos.)",
    tolerances: "Length and Width: ± 5 percent; Height > 0.3 m: ± 5 percent and Height < 0.3 m: ± 10 percent"
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
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURE TERRAIN MESH</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-3 sm:px-4">
              The Terrain Mesh System is a modular solution used to construct gabion-faced mechanically stabilized earth (MSE) walls. The facing section of each unit is formed by connecting a back panel and diaphragms to the main fascia unit, creating rectangular-shaped cells for effective stone confinement.            </p>
            </div>

            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/products/terrain-mesh/1.png" alt="Terrain Mesh" fill style={{ objectFit: 'contain' }} />
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
                    <th className="border p-2">10x12<br />D=100 mm<br />Zinc / Zinc Alloy<sup>2</sup> + Polymer coated</th>
                    <th className="border p-2">8x10<br />D=80 mm<br />Zinc / Zinc Alloy<sup>2</sup> + Polymer coated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">1</td>
                    <td className="border p-2">Mesh wire dia, mm</td>
                    <td className="border p-2">{tableData.meshWireDia}</td>
                    <td className="border p-2">{tableData.meshWireDia}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">2</td>
                    <td className="border p-2">Edge/Selvedge wire dia, mm</td>
                    <td className="border p-2">{tableData.edgeWireDia}</td>
                    <td className="border p-2">{tableData.edgeWireDia}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">3</td>
                    <td className="border p-2">Lacing wire dia, mm</td>
                    <td className="border p-2">{tableData.lacingWireDia}</td>
                    <td className="border p-2">{tableData.lacingWireDia}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">4</td>
                    <td className="border p-2">Polymer coating thickness, mm</td>
                    <td className="border p-2">{tableData.polymerThickness}</td>
                    <td className="border p-2">{tableData.polymerThickness}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">5</td>
                    <td className="border p-2">Typical Sizes<br />Length x Width X Height(m)<br />(Number of diaphragms)</td>
                    <td colSpan={2} className="border p-2">{tableData.typicalSizes}</td>
                  </tr>
                  <tr>
                    <td className="border p-2">6</td>
                    <td className="border p-2">Tolerances in size of Units</td>
                    <td colSpan={2} className="border p-2">{tableData.tolerances}</td>
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

export default TerrainMeshPage;