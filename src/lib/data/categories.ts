import { Category as CategoryType } from './types';
import { applications } from './applications';

export interface Product {
  id: string;
  title: string;
  description: string;
  features?: string[];
  specifications?: { key: string; value: string }[];
  price?: string;
  tradeInformation?: { key: string; value: string }[];
  productDetails?: { key: string; value: string }[];
  shortDescription: string;
  keyFeatures: string[];
  priceUnit?: string;
  imagePath: string[];
  minOrderQuantity?: string;
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
  features: string[];
  imagePath: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'Secure-gabion-box',
    title: "SECURE GABION BOX",
    description: "The SECURE Gabion Box is a high-strength, rectangular wire mesh container designed for durability and resilience in demanding environments. Constructed using double-twisted, zinc-galvanized, and polymer-coated steel wire, it features interlinked hexagonal openings that provide superior structural integrity. Reinforced with thicker selvedge/edge wire, the Secure Gabion ensures enhanced rigidity, making it ideal for applications such as erosion control, retaining walls, and landscape reinforcement.",
    features: [],
    imagePath: "/images/popular.png",
    products: [
      {
        id: 'secure-gabion-box',
        title: "Secure Gabion Box",
        description: "The SECURE Gabion Box is a high-strength, rectangular wire mesh container designed for structural reinforcement and erosion control. Built with double-twisted hexagonal mesh, it offers superior flexibility and resistance against environmental stresses. The zinc galvanization protects against rust and corrosion, while the advanced Polymer PA6 Coating provides extra durability for aggressive environments. The interconnection of mesh wires ensures stability, making it an ideal solution for infrastructure, defense, and industrial applications.",
        shortDescription: "SECURE Gabion Box is a high-strength mesh, Designed for erosion control and structural reinforcement. Its double-twisted hexagonal mesh ensures flexibility and durability, while zinc galvanization and Polymer PA6 coating provide corrosion resistance in harsh environments. Ideal for infrastructure, defense, and industrial applications.",
        productDetails:[
          { key: "Material", value: "Stainless Steel" },
          { key: "Mesh Style", value: "Woven Mesh,Galvanized Iron Wire" },
          { key: "Surface Treatment", value: "Polymer PA6 Coated" },
          { key: "Hole Shape", value: "Hexagonal" },
          { key: "Usage", value: "Erosion Control,Retaining Wall,Riverbank Protection,Slope Stabilization" },
          { key: "Structure", value: "Rectangular Wire Mesh Box with Double-Twisted Wire for Enhanced Durability" },
          { key: "Certifications", value:"ISO-9001-2008"}
        ],
        specifications: [
          { key: "Wire Gauge", value: "2.50mm/3.50mm, 2.70mm/3.70mm, and 3.00mm, 4.00mm" },
          { key: "Mesh Sizes", value: "60×80 mm, 80×100 mm, 100×120 mm" },
          { key: "Mesh Wire Diameter", value: "2.00 mm – 3.40 mm" },
          { key: "Coating Options", value: " Zinc Galvanized / Zn + Polymer PA6 Coated" },
          { key: "Production Capacity", value: "600 MT" },
        ],
        tradeInformation: [
          { key: "Supply Ability:", value: "10,000 Kilograms per Week" },
          { key: "Delivery Time", value: "Within 5 Days" },
          { key: "Packaging", value: "Folding Gabion Box, Lacing in Bundle Form" },
          { key: "Distribution", value: "Available Across India" },
        ],
        keyFeatures: [
          "Structural Reinforcement ",
          "Erosion Control",
          "Corrosion Resistance",
          "Flexibility & Durability",
          "Quick & Easy Installation",
        ],
        applications: [
          applications.gabion.coastal,
          applications.gabion.retaining,
          applications.gabion.erosion,
          applications.gabion.transport
        ],
        price: "75",
        priceUnit: "INR/Cubic Meter",
        imagePath: [
          "/images/products/gabion-box/1.jpeg",
          "/images/products/gabion-box/1.jpeg",
          "/images/products/gabion-box/3.jpg",
          "/images/products/gabion-box/4.jpg",
          "/images/products/gabion-box/5.jpg",
        ]
      }
    ]
  },
  {
    id: 'secure-gabion-mattress',
    title: "SECURE Gabion Mattress",
    description: "The Gabion Mattress are functional as the ideal additions to gardens of any size for erosion control as well as stabilizing ridges. These structures are utilized to transform as well as protect the space due to their space-saving design.",
    features: [],
    imagePath: "/images/products/gabion-mattress/3.jpeg",
    products: [
      {
        id: 'secure-gabion-revet-mattress',
        title: "SECURE Gabion Revet Mattress",
        description: "The SECURE Gabion Revet Mattress is a durable, interlocking containment system made from mechanically woven, double-twisted hexagonal steel wire mesh.It is an ideal solution for stabilizing wide or shallow areas, such as riverbeds, coastal zones, and slopes. Designed to blend naturally into the environment. Offers long-term structural stability while minimizing visual impact. The galvanized and PVC-coated surface ensures high corrosion resistance, making it suitable for industrial, agricultural, and defense applications.",
        shortDescription: "SECURE Gabion Revet Mattress is a durable, interlocking containment system. Ideal for stabilizing riverbeds, coastal zones, and slopes. It offers long-term structural stability while blending naturally into the environment. Galvanized and PVC-coated for high corrosion resistance. Suits industrial, agricultural, and defense applications.",
        productDetails:[
          { key: "Material", value: "High-Strength Stainless Steel Wire" },
          { key: "Mesh Style", value: "Woven Mesh,Galvanized Iron Wire" },
          { key: "Surface Treatment", value: " Galvanized / Zinc Coated / PVC Coated" },
          { key: "Color", value: "Silver" },
          { key: "Shape", value: "Hexagonal"},
          { key: "Usage", value: "Safety & Security, Erosion Control, Slope Stabilization, Riverbank & Coastal Protection" },
          { key: "Wire Type", value:" Zn + PVC Coated"}
        ],
        specifications: [
          { key: "Wire Diameter", value: "As per requirement" },
          { key: "Height", value: "0.3 m – 1.0 m" },
          { key: "Length", value: "1.0 m – 5.0 m" },
          { key: "Capacity", value: "300 MT" },
          { key: "Mesh Sizes", value: "60 × 80 mm, 80 × 100 mm, 100 × 120 mm" },
        ],
        applications: [
          applications.gabion.retaining,
          applications.gabion.architecture,
          applications.gabion.transport,
          applications.gabion.coastal
        ],
        tradeInformation: [
          { key: "Supply Ability:", value: "3,000,000 Kilograms per Month" },
          { key: "Distribution", value: "Available Across India" },
        ],
        keyFeatures: [
          "Environmentally Adaptive Design",
          "Easy Installation",
          "Double-Twisted Hexagonal Mesh",
          "Corrosion-Resistant Coating",
          "High Load Capacity",
        ],
        
        price: "65",
        priceUnit: "INR",
        imagePath: [
          "/images/products/gabion-mattress/1.jpeg",
          "/images/products/gabion-mattress/2.jpeg",
          "/images/products/gabion-mattress/3.jpeg",
          "/images/products/gabion-mattress/4.jpeg",
          "/images/products/gabion-mattress/5.jpeg",
          "/images/products/gabion-mattress/6.png",
          "/images/products/gabion-mattress/7.jpeg",
          "/images/products/gabion-mattress/8.jpeg",
        ]
      }
    ]
  },
  {
    id: 'rock-fall-netting',
    title: "Secure Rock Fall Netting",
    description: "Offered Rock fall nettings are apt for simple drapery systems. These are suited for geotechnical as well as engineering applications. Supplied nettings allow for rock fall protection, slope stabilization, and surface protection applications.",
    features: [
    ],
    imagePath: "/images/rock-fall-netting.avif",
    products: [
      {
        id: 'secure-dt-mesh-rock-fall-netting',
        title: "SECURE DT Mesh Rock Fall Netting",
        description: "SECURE DT Mesh Rock Fall Netting is a high-strength, double-twisted hexagonal wire mesh designed for superior rockfall protection and slope stabilization. Constructed from zinc-coated galvanized wire with an advanced PA6 polymer coating, it ensures exceptional durability and resistance to harsh environmental conditions. Reinforced with wire ropes spaced at regular intervals, it effectively prevents rockfalls, landslides, and debris movement in mountainous regions, cliffs, tunnels, and construction zones.",
        shortDescription: "SECURE DT Mesh Rock Fall Netting is a high-strength, double-twisted hexagonal wire mesh designed for rockfall protection and slope stabilization. It offers superior durability, corrosion resistance, and flexibility. Effectively prevents rockfalls, landslides and construction zones, ensuring long-term safety and stability.",
        productDetails:[
          { key: "Material", value: "Stainless Steel / Zinc-Coated Galvanized Wire" },
          { key: "Mesh Style", value: "Double-Twisted Hexagonal Wire Mesh" },
          { key: "Surface Treatment", value: "Advanced PA6 Polymer Coating" },
          { key: "Wire Rope Integration", value: "Installed at Regular Intervals" },
          { key: "Usage", value: "Rockfall Protection, Slope Stabilization, Landslide Prevention"},
        ],
        specifications: [
          { key: "Wire Diameter", value: "2.00 mm – 3.40 mm" },
          { key: "Mesh Sizes", value: "60x80 mm, 80x100 mm, 100x120 mm" },
          { key: "Coating Options", value: "Heavy GSM Wire / PVC Coated Wire" },
        ],
        applications: [
          applications.rockfall.protection,
          applications.rockfall.mining
        ],
        tradeInformation: [
          { key: "Supply Ability:", value: "3,000,000 Square Meters per Month" },
          { key: "Delivery Time", value: "As per order Requirement" },
          { key: "Main Domestic Market", value: "All Across India" },
        ],
        keyFeatures: [
          "High-Strength Construction",
          "Double-Twisted Hexagonal Mesh",
          "Advanced PA6 Polymer Coating",
          "Wire Rope Reinforcement",
          "Ideal for construction and embankment",
        ],
        
        price: "120",
        priceUnit: "INR/Square Meter",
        imagePath: [
          "/images/products/rock-fall-netting/dt-mesh/1.jpeg",
        ]
      },
      {
        id: 'secure-rhomboidal-rock-fall-netting',
        title: "SECURE Rhomboidal Rock Fall Netting",
        description: "SECURE Rhomboidal Rock Fall Netting is an advanced, high-strength protective mesh system designed for maximum safety in challenging terrains. It features reinforced high-strength wire knots to enhance durability and resistance against static and dynamic stresses. These reinforcements are made using double steel wire knots, ensuring double binding with two separate wires. Ideal for rockfall protection, slope stabilization, and infrastructure security, this netting offers superior flexibility, impact resistance, and long-term performance.",
        shortDescription: "SECURE Rock Fall Netting is a high-strength protective mesh designed for rockfall prevention and slope stabilization. With reinforced wire knots and double steel binding, it ensures superior durability, impact resistance, and long-term performance in challenging terrains and infrastructure projects.",
        productDetails:[
          { key: "Material", value: "High-Strength Stainless Steel Wire Rope" },
          { key: "Mesh Style", value: "Steel Cable Mesh with Reinforced Wire Knots" },
          { key: "Surface Treatment", value: "Polished & Galvanized" },
          { key: "Coating", value: "Heavy GSM Wire / PVC Coated Wire" },
          { key: "Color", value: "Silver" },
          { key: "Hole Shape", value: "Rhomboidal"},
          { key: "Reinforcement", value: "High-Strength Wire Knots"},
        ],
        specifications: [
          { key: "Diameter", value: "8.0 mm / 10.0 mm / 12.0 mm" },
          { key: "Mesh Sizes", value: "250 × 250 mm, 300 × 300 mm, 400 × 400 mm " },
          { key: "Tensile Strength", value: "Up to ~200 kN/m" },
          { key: "Junction Tearing Strength", value: "20 kN to 24 kN" },
          { key: "Cable pull-apart Strength", value: "10 kN to 11.5 kN" },
          { key: "Failure Resistance", value: " High tear & pull-apart resistance, gradual failure load" },
        ],
        applications: [
          applications.rockfall.protection,
          applications.rockfall.mining
        ],
        tradeInformation: [
          { key: "Supply Ability:", value: "3,000,000 Square Meters per Month" },
          { key: "Application Areas", value: "Rockfall Protection,Slope Stabilization,Tunnel and Cliff Safety,Infrastructure and Mining Security,Construction Zone Protection" },
          { key: "Main Domestic Market", value: "All Across India" },
        ],
        keyFeatures: [
          "Tensile Strength",
          "Double-Twisted Hexagonal Mesh",
          "Advanced PA6 Polymer Coating",
          "Chemical & UV Protection",
          "Controlled Water Permeability",
        ],
        
        price: "120",
        priceUnit: "INR/Square Meter",
        imagePath: [
          "/images/products/rock-fall-netting/rhomboidal-rock-fall/1.jpg",
          "/images/products/rock-fall-netting/rhomboidal-rock-fall/2.jpg",
          "/images/products/rock-fall-netting/rhomboidal-rock-fall/3.jpg",
        ]
      }
    ]
  },
  {
    id: 'Secure-geotextile',
    title: "SECURE Geotextile",
    description: "The SECURE Geotextile is a high-strength filtration fabric that prevents soil erosion and displacement while ensuring efficient water drainage. Designed for slopes, riverbanks, and infrastructure projects, it offers long-lasting protection in demanding environments.",
    features: [],
    imagePath: "/images/products/geotextile/non-woven/2.webp",
    products: [
      {
        id: 'secure-non-woven-geotextile',
        title: "SECURE Non-Woven Geotextile",
        description: "SECURE Non-Woven Geotextile is a high-performance fabric engineered for soil stabilization, erosion control, and drainage applications. Made from polypropylene (PP) or polyester (PET) provides an additional protective layer to prevent soil displacement and improve structural integrity. Often used behind gabion walls, while holding back fine soil particles, reducing erosion risks in slopes, riverbanks, and construction sites. Its durable and permeable design ensures long-term reliability in harsh environmental conditions.",
        shortDescription: "SECURE Non-Woven Geotextile is a high-strength filtration fabric that prevents soil erosion and displacement while ensuring efficient water drainage. Designed for slopes, riverbanks, and infrastructure projects, it offers long-lasting protection in demanding environments.",
        productDetails:[
          { key: "Material", value: "Synthetic Fibers (Polypropylene - PP / Polyester - PET)" },
          { key: "Fabric Type", value: "Non-Woven" },
          { key: "Bonding Method", value: "Mechanically Bonded" },
          { key: "Color", value: "White / Black / Grey" },
          { key: "Usage", value: "Erosion Control,Retaining Wall,Riverbank Protection,Slope Stabilization" },
        ],
        specifications: [
          { key: "Weight Range", value: "100 GSM – 800 GSM" },
          { key: "Width", value: "Up to 6 meters" },
          { key: "Role length", value: " As per requirement" },
          { key: "Tensile Strength", value: "High Durability for Heavy Loads" },
          { key: "Permeability", value: "Excellent Water Drainage & Filtration" },
        ],
        applications: [
          applications.geotextile.soil,
          applications.geotextile.drainage
        ],
        tradeInformation: [
          { key: "Delivery Time", value: "As per order requirement" },
          { key: "Application Sectors", value: "Construction,Infrastructure,Road & Rail Projects,Environmental Protection" },
          { key: "Distribution", value: "Available Across India" },
        ],
        keyFeatures: [
          "Efficient Load Distribution",
          "High Durability & Strength",
          "Superior Soil Stabilization ",
          "Efficient Drainage & Filtration ",
          "Customizable & Wide Coverage",
        ],
        
        price: "",
        priceUnit: "",
        imagePath: [
          "/images/products/geotextile/non-woven/1.jpg",
        ]
      },
      {
        id: 'secure-woven-geotextile',
        title: "SECURE Woven Geotextile",
        description: "SECURE Woven Geotextile is a high-strength fabric engineered for soil stabilization, load distribution, and erosion control. It offers superior tensile strength and stability, making it ideal for applications requiring long-term durability. Commonly used in road construction, embankments, and heavy-load-bearing areas, it effectively reinforces weak soil while maintaining structural integrity",
        shortDescription: "SECURE Woven Geotextile provides high tensile strength and stability for soil reinforcement, load distribution, and erosion control. Ideal for road construction, embankments, and heavy-load areas, it ensures long-term durability and structural integrity.",
        productDetails:[
          { key: "Material", value: "Polypropylene (PP) / Polyester (PET)" },
          { key: "Fabric Type", value: "Woven" },
          { key: "Weaving Method", value: "High-Tensile Interlaced Fibers" },
          { key: "Color", value: "Black" },
          { key: "Usage", value: "Soil Reinforcement, Load Distribution, Erosion Control" },
        ],
        specifications: [
          { key: "Weight Range", value: "90 GSM – 500 GSM" },
          { key: "Width", value: "Up to 5.2 meters" },
          { key: "Role length", value: "Customizable" },
          { key: "Tensile Strength", value: "High Load-Bearing Capacity" },
          { key: "Permeability", value: " Controlled Water Flow & Filtration" },
        ],
        applications: [
          applications.geotextile.soil,
          applications.geotextile.drainage
        ],
        tradeInformation: [
          { key: "Delivery Time", value: "As per order requirement" },
          { key: "Application Sectors", value: " Infrastructure,Road & Rail Projects,Coastal Protection" },
          { key: "Distribution", value: "Available Across India" },
        ],
        keyFeatures: [
          "Superior Soil Stabilization",
          "High Tensile Strength",
          "Effective Load Distribution",
          "Controlled Water Permeability",
        ],
        
        price: "",
        priceUnit: "",
        imagePath: [
          "/images/products/geotextile/woven/1.jpeg",
        ]
      }
    ]
  },
  {
    id: 'secure-grid-system',
    title: "SECURE Grid System",
    description: "The SECURE Geotextile is a high-strength filtration fabric that prevents soil erosion and displacement while ensuring efficient water drainage. Designed for slopes, riverbanks, and infrastructure projects, it offers long-lasting protection in demanding environments.",
    features: [],
    imagePath: "/images/products/grid-system/1.jpg",
    products: [
      {
        id: 'secure-grid-system',
        title: "SECURE Grid System",
        description: "The Secure Grid System is a geosynthetic reinforcement solution designed to provide structural stability, reinforcement, and ground stabilization. Made of high-strength tensile ribs, it effectively interacts with surrounding soil, stone, or other substrates, ensuring superior load distribution and durability. Ideal for security fencing, road stabilization, and construction applications.",
        shortDescription: "A high-strength geogrid system for reinforcement and stabilization, ensuring long-term structural integrity.",
        specifications:[
        
        ],
        productDetails: [
          { key: "Material", value: "High-Density Polymer / Galvanized Iron" },
          { key: "Type", value: "Geogrid Reinforcement System" },
          { key: "Usage", value: "Soil Stabilization, Security Fencing, Load Distribution" },
          { key: "Surface Treatment", value: "Galvanized / Coated for Corrosion Resistance" },
        ],
        applications: [
          applications.fencing.security,
          applications.fencing.agriculture
        ],
        tradeInformation: [
          { key: "Supply Ability", value: "3,000,000 units/month" },
          { key: "Price", value: "Varies based on size and customization" },
          { key: "Packaging", value: "Standard industrial packaging for easy handling and transportation" },
        ],
        keyFeatures: [
          "High Load-Bearing Capacity",
          "Enhances Soil & Structural Stability",
          "Corrosion & Weather Resistant",
          "Lightweight Yet Extremely Durable",
          "Environmentally Friendly & Recyclable",
        ],
        
        price: "",
        priceUnit: "",
        imagePath: [
          "/images/products/grid-system/1.jpg",
        ]
      }
    ]
  },
  {
    id: 'secure-pa6-polymer-coating',
    title: "SECURE PA6 Polymer Coating",
    description: "The SECURE PA6 Polymer Coating is an advanced polyamide coating solution applied to GI wires to enhance their corrosion resistance, durability, and visual appeal. With its superior UV stability, abrasion resistance, and chemical protection, this coating extends the lifespan of security fencing, electrical applications, and industrial uses. The availability of multicolor options adds aesthetic value, making it ideal for visually appealing fencing designs and event-linked branding.",
    features: [],
    imagePath: "/images/products/no-image.jpg",
    products: [
      {
        id: 'secure-pa6-polymer-coating',
        title: "SECURE PA6 Polymer Coating",
        description: "The SECURE PA6 Polymer Coating is an advanced polyamide coating solution applied to GI wires to enhance their corrosion resistance, durability, and visual appeal. With its superior UV stability, abrasion resistance, and chemical protection, this coating extends the lifespan of security fencing, electrical applications, and industrial uses. The availability of multicolor options adds aesthetic value, making it ideal for visually appealing fencing designs and event-linked branding.",
        shortDescription: "Upgrade your security with SECURE® PA6 Polymer Coating—designed for durability, flexibility, and vibrant aesthetics in fencing & industrial applications!",
        productDetails:[
          { key: "Material", value: "PA6 (Polyamide 6 / Nylon 6)" },
          { key: "Coating Type", value: "Polymer Coated on Galvanized Iron (GI) Wire" },
          { key: "Usage", value:"Safety, Security, Electrical Insulation, and Aesthetic Applications" },
          { key: "Surface Treatment", value: "Smooth, Multi-Color Finish" },
        ],
        specifications: [
          { key: "Base Wire", value: "Base Wire" },
          { key: "Type", value: "Galvanized Iron (GI)" },
          { key: "Coating Thickness", value: "Customizable" },
          { key: "Color-Options", value: "Multiple (as per requirement)" },
          { key: "Applications", value: "Security fencing, electrical insulation, industrial reinforcement" },
        ],
        applications: [
          applications.fencing.security,
          applications.fencing.agriculture
        ],
        tradeInformation: [
          { key: "Payment Terms", value: "Cash in Advance (CID)" },
          { key: "Supply Ability", value: "3,000,000 units/month" },
          { key: "Delivery Time", value: " 3-4 Days" },
          { key: "Main Domestic", value: "Market: All India" },
        ],
        keyFeatures: [
          "Superior Durability: Engineered for long-lasting performance in extreme conditions",
          "Corrosion & Abrasion Resistant: Advanced PA6 coating enhances lifespan",
          "Eco-Friendly & Sustainable: Encourages vegetation growth while ensuring soil retention",
          "High Structural Strength: Gabion Facia with integrated tail for added reinforcement",
          "Versatile Application: Suitable for inclined structures, fencing, and erosion control",
        ],
        
        price: "",
        priceUnit: "",
        imagePath: [
          "/images/products/no-image.jpg",
        ]
      }
    ]
  },
  {
    id: 'secure-mesh-system',
    title: "SECURE Mesh System",
    description: "The Green Secure Mesh System is a high-strength, corrosion-resistant fencing and erosion control solution designed for hostile environments. It is constructed using mechanically woven, double-twisted hexagonal wire mesh made from zinc-coated galvanized wire, further coated with PA6 (Polyamide 6, Nylon 6) polymer for enhanced durability, abrasion resistance, and longevity.",
    features: [],
    imagePath: "/images/products/no-image.jpg",
    products: [
      {
        id: 'secure-mesh-system',
        title: "SECURE Mesh System",
        description: "The Green Secure Mesh System is a high-strength, corrosion-resistant fencing and erosion control solution designed for hostile environments. It is constructed using mechanically woven, double-twisted hexagonal wire mesh made from zinc-coated galvanized wire, further coated with PA6 (Polyamide 6, Nylon 6) polymer for enhanced durability, abrasion resistance, and longevity.",
        shortDescription: "The Green Secure Mesh System is a high-strength, corrosion-resistant fencing & erosion control solution designed for hostile environments. With polymer-coated hexagonal mesh and an integrated erosion control blanket, it ensures both structural stability and environmental sustainability.",
        productDetails:[
          { key: "Material", value: "Zinc-coated galvanized wire with PA6 (Nylon 6) polymer coating" },
          { key: "Mesh Type", value: "Mechanically woven, double-twisted hexagonal wire mesh" },
          { key: "Surface Treatment", value: "Corrosion-resistant polymer coating" },
          { key: "Usage", value: "Ideal for hostile environments, erosion control, and structural reinforcemen" },
        ],
        specifications: [
          { key: "Gabion Facia", value: "Integrated tail with a continuous base panel for reinforcement " },
          { key: "Erosion Control", value: "Geotextile erosion control blanket for soil retention" },
          { key: "Usage", value: "Fencing, erosion control, and structural reinforcement in inclined terrains" },
          { key: "Durability", value: " Highly resistant to harsh weather, chemicals, and physical impact" },
        ],
        applications: [
          applications.fencing.security,
          applications.fencing.agriculture
        ],
        tradeInformation: [
          { key: "Supply Ability", value: "Bulk availability" },
          { key: "Delivery", value: " Fast & efficient" },
          { key: "Payment", value: "CID" },
          { key: "Market", value: "Nationwide Availability" },
        ],
        keyFeatures: [
          "High Load-Bearing Capacity",
          "Enhances Soil & Structural Stability",
          "Corrosion & Weather Resistant",
          "Lightweight Yet Extremely Durable",
          "Environmentally Friendly & Recyclable",
        ],
        
        price: "",
        priceUnit: "",
        imagePath: [
          "/images/products/no-image.jpg",
        ]
      }
    ]
  },
];
