import { applications } from './applications';

export interface Product {
  id: string;
  title: string;
  description: string;
  technicalAspects?: { srNo: number; characteristic: string; values: string[] }[];
  tableImg?: string;
  meshTypes?: string[];
  imagePath: string[];
  applications?: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  tableImg?: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'gabion-box',
    title: "SECURE GABION BOX",
    description: "The Secure Gabion Box is a high-strength, rectangular wire mesh container designed for structural reinforcement and erosion control. Constructed with double-twisted hexagonal mesh, it offers superior flexibility and resistance to environmental stresses. Zinc galvanization protects it from rust and corrosion, while the advanced PA6 polymer coating adds extra durability in aggressive environments. The interconnection of mesh wires ensures excellent stability, making it an ideal solution for infrastructure, defence, and industrial applications.",
    imagePath: "/images/products/gabion-box/1.png",
    products: [
      {
        id: 'gabion-box',
        title: "Secure Gabion Box",
        description: "The Secure Gabion Box is a high-strength, rectangular wire mesh container designed for structural reinforcement and erosion control. Constructed with double-twisted hexagonal mesh, it offers superior flexibility and resistance to environmental stresses. Zinc galvanization protects it from rust and corrosion, while the advanced PA6 polymer coating adds extra durability in aggressive environments. The interconnection of mesh wires ensures excellent stability, making it an ideal solution for infrastructure, defence, and industrial applications.",
        tableImg: "/images/products/gabion-box/table.png",
  
        imagePath: [
          "/images/products/gabion-box/1.png",
        ],
        applications: [
          applications.gabion.coastal,
          applications.gabion.retaining,
          applications.gabion.erosion,
          applications.gabion.transport
        ]
      }
    ]
  },
];
