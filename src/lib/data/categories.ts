import { applications } from './applications';

export interface Product {
  id: string;
  title: string;
  description: string;
  technicalAspects?: { srNo: number; characteristic: string; values: string[] }[];
  imagePath: string[];
  applications?: {
    name: string;
    link: string;
    description: string;
  }[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  imagePath: string[];
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'gabion-box',
    title: "SECURE GABION BOX",
    description: "The Secure Gabion Box is a high-strength, rectangular wire mesh container designed for structural reinforcement and erosion control. Constructed with double-twisted hexagonal mesh, it offers superior flexibility and resistance to environmental stresses. Zinc galvanization protects it from rust and corrosion, while the advanced PA6 polymer coating adds extra durability in aggressive environments. The interconnection of mesh wires ensures excellent stability, making it an ideal solution for infrastructure, defence, and industrial applications.",
    imagePath: ["/images/products/gabion-box/1.png"],
    products: [
      {
        id: 'gabion-box',
        title: "Secure Gabion Box",
        description: "The Secure Gabion Box is a high-strength, rectangular wire mesh container designed for structural reinforcement and erosion control. Constructed with double-twisted hexagonal mesh, it offers superior flexibility and resistance to environmental stresses. Zinc galvanization protects it from rust and corrosion, while the advanced PA6 polymer coating adds extra durability in aggressive environments. The interconnection of mesh wires ensures excellent stability, making it an ideal solution for infrastructure, defence, and industrial applications.",
        technicalAspects: [
          { srNo: 1, characteristic: "Mesh wire dia, mm", values: ["2.70", "3.00", "2.70", "3.00"] },
          { srNo: 2, characteristic: "Edge/Selvedge wire dia, mm", values: ["3.40", "3.90", "3.40", "3.90"] },
          { srNo: 3, characteristic: "Lacing wire dia, mm", values: ["2.20", "2.20", "2.20", "2.20"] },
          { srNo: 4, characteristic: "Polymer coating thickness, mm", values: ["NA", "Nominal-0.50, Minimum-0.40", "NA", "Nominal-0.50, Minimum-0.40"] },
          { srNo: 5, characteristic: "Typical Sizes Length x Width X Height(m)", values: ["4 x 1 x 1 (3 Nos.), 3 x 1 x 1 (2 Nos.), 2 x 1 x 1 (1 No.), 1.5 x 1 x 1 (0 No.), 2 x 1 x 0.5 (1 No.), 3 x 1 x 0.5 (2 Nos.), 4 x 1 x 0.5 (3 Nos.), 2 x 1 x 0.3 (1 No.), 3 x 1 x 0.3 (2 Nos.), 4 x 1 x 0.3 (3 Nos.)"] },
          { srNo: 6, characteristic: "Tolerances in size of gabion boxes", values: ["Length and Width: ± 5 percent; Height > 0.3 m: ± 5 percent and Height ≤ 0.3 m: ± 10 percent"] }
        ],
        imagePath: [
          "/images/products/gabion-box/1.png",
        ],
    
      }
    ]
  }
];
