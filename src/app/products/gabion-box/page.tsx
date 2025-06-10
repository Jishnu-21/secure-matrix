import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

const GabionBoxPage = () => {
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
         
            <div className="mt-6 sm:mt-8 md:mt-10 mb-12 sm:mb-16 md:mb-24">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">SECURE GABION BOX</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-3 sm:px-4">
              The Secure Gabion Box is a high-strength, rectangular wire mesh container designed for structural reinforcement and erosion control. Constructed with double-twisted hexagonal mesh, it offers superior flexibility and resistance to environmental stresses. Zinc galvanization protects it from rust and corrosion, while the advanced PA6 polymer coating adds extra durability in aggressive environments. The interconnection of mesh wires ensures excellent stability, making it an ideal solution for infrastructure, defence, and industrial applications.              </p>
            </div>

            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/products/gabion-box/1.png" alt="Gabion Box" fill style={{ objectFit: 'contain' }} />
            </div>

            {/* Dynamic Table */}
            <div className="overflow-x-auto mb-50">
  <table className="table-auto border-collapse w-full max-w-screen-xl mx-auto text-xs bg-white shadow font-bold">
    <thead>
      <tr className="min-h-[60px]">
        <th rowSpan={3} className="border border-black px-4 py-4 w-12 bg-gray-200">Sr.<br />No.</th>
        <th rowSpan={3} className="border border-black px-4 py-4 text-left w-48 bg-gray-200">Characteristics</th>
        <th colSpan={6} className="border border-black px-4 py-4 text-center bg-gray-300">Mesh Type</th>
      </tr>
      <tr className="min-h-[50px]">
        <th colSpan={3} className="border border-black px-4 py-4 text-center bg-gray-100">10×12<br />D=100 mm</th>
        <th colSpan={3} className="border border-black px-4 py-4 text-center bg-gray-100">8×10<br />D=80 mm</th>
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
      </tr>
      <tr className="min-h-[60px]">
        <td className="border border-black text-center px-4 py-4">4</td>
        <td className="border border-black text-left px-4 py-4">Polymer coating thickness, mm</td>
        <td colSpan={2} className="border border-black text-center px-4 py-4">NA</td>
        <td className="border border-black text-center px-4 py-4 text-[11px] leading-relaxed">Nominal-0.50,<br />Minimum-0.40</td>
        <td colSpan={2} className="border border-black text-center px-4 py-4">NA</td>
        <td className="border border-black text-center px-4 py-4 text-[11px] leading-relaxed">Nominal-0.50,<br />Minimum-0.40</td>
      </tr>
      <tr className="min-h-[80px]">
        <td className="border border-black text-center px-4 py-4">5</td>
        <td className="border border-black text-left px-4 py-4">
          Typical Sizes Length × Width × Height(m)<br />(Number of diaphragms)
        </td>
        <td colSpan={6} className="border border-black text-left px-4 py-4 text-[11px] leading-relaxed break-words">
          4 × 1 × 1 (3 Nos.), 3 × 1 × 1 (2 Nos.), 2 × 1 × 1 (1 No.), 1.5 × 1 × 1 (0 No.),<br />
          2 × 1 × 0.5 (1 No.), 3 × 1 × 0.5 (2 Nos.), 4 × 1 × 0.5 (3 Nos.), 2 × 1 × 0.3 (1 No.),<br />
          3 × 1 × 0.3 (2 Nos.), 4 × 1 × 0.3 (3 Nos.)
        </td>
      </tr>
      <tr className="min-h-[60px]">
        <td className="border border-black text-center px-4 py-4">6</td>
        <td className="border border-black text-left px-4 py-4">Tolerances in size of gabion boxes</td>
        <td colSpan={6} className="border border-black text-left px-4 py-4 text-[11px] leading-relaxed break-words">
          Length and Width.. 5 percent; Height &gt; 0.3 m... ± 5 percent and Height &lt; 0.3 m... ± 10 percent
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr className="min-h-[50px]">
        <td colSpan={8} className="border border-black text-left px-4 py-4 bg-gray-50 text-[11px] leading-relaxed">
          <sup className="align-super text-[10px">1)</sup> Internal diameter/External diameter of polymer coated wire.
        </td>
      </tr>
      <tr className="min-h-[50px]">
        <td colSpan={8} className="border border-black text-left px-4 py-4 bg-gray-50 text-[11px] leading-relaxed">
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

export default GabionBoxPage;