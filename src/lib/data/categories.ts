import { Category } from './types';

export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  specifications: { key: string; value: string }[];
  price: string;
  priceUnit: string;
  imagePath: string;
  minOrderQuantity?: string;
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
    title: "SECURE® GABION BOX",
    description: "The SECURE® Gabion Box is a high-strength, rectangular wire mesh container designed for durability and resilience in demanding environments. Constructed using double-twisted, zinc-galvanized, and polymer-coated steel wire, it features interlinked hexagonal openings that provide superior structural integrity. Reinforced with thicker selvedge/edge wire, the Secure Gabion ensures enhanced rigidity, making it ideal for applications such as erosion control, retaining walls, and landscape reinforcement.",
    features: [],
    imagePath: "/images/popular.png",
    products: [
      {
        id: 'gi-gabion-box',
        title: "GI GABION BOX",
        description: "High-quality GI Gabion Box suitable for various construction and erosion control applications.",
        specifications: [
          { key: "Wire Gauge", value: "2.70mm/3.70mm, 2.50mm/3.50mm, and 3.0mm, 4.0mm" },
          { key: "Material", value: "Iron" },
          { key: "Mesh Style", value: "Woven Mesh" },
          { key: "Mesh Type", value: "Galvanized Iron Wire" },
          { key: "Hole Shape", value: "Other" },
          { key: "Surface Treatment", value: "Galvanized" },
          { key: "Product Type", value: "Wire Mesh" },
          { key: "Supply Ability", value: "10000 Per Week" }
        ],
        price: "75",
        priceUnit: "INR/Cubic Meter",
        imagePath: "/images/products/gabion-box/GI-GABION-BOX.jpeg"
      },
      {
        id: 'stainless-steel-gabion-box-with-tail',
        title: "Stainless Steel Gabion Box With Tail",
        description: "Pvc Gabion Box Tail Gabion with superior quality and durability",
        specifications: [
          { key: "Mesh Size", value: "60x80, 80x100 and 100x120" },
          { key: "Mesh Wire Diameter", value: "2.00mm to 3.40mm" },
          { key: "Mesh Wire Type", value: "Zn+PVC" },
          { key: "Length", value: "1.0m to 10.0m" },
          { key: "Width", value: "0.5m to 4.0m" },
          { key: "Height", value: "0.3m to 1.5m" },
          { key: "Hole & Shape", value: "Hexagonal" },
          { key: "Production Capacity", value: "600MT" },
          { key: "Delivery Time", value: "within 5 days" }
        ],
        price: "650",
        priceUnit: "INR/Cubic Meter",
        imagePath: "/images/products/gabion-box/Stainless-Steel-Gabion-Box-With-Tail.jpg"
      },
      {
        id: 'secure-matrix-pvc-coated-gabion-box',
        title: "Secure Matrix PVC Coated Gabion Box",
        description: "Premium quality PVC coated gabion box with versatile applications",
        specifications: [
          { key: "Mesh Size Range", value: "60x80, 80x100 and 100x120" },
          { key: "Length Range", value: "1meter to 10meter" },
          { key: "Width Range", value: "0.5 Meter to 4.0 meter" },
          { key: "Height Range", value: "0.3 meter to 2.0 Meter" },
          { key: "Mesh Wire Diameter", value: "2.00mm to 3.40mm" },
          { key: "Selvedge Wire Diameter", value: "2.40mm to 3.90mm" },
          { key: "Wire Type", value: "Zn+PVC Coated" },
          { key: "Color Available", value: "RAL 7037" }
        ],
        price: "130",
        priceUnit: "INR/Square Meter",
        imagePath: "/images/products/gabion-box/Secure-Matrix-PVC-Coated-Gabion-Box.jpg"
      },
      {
        id: 'jumbo-pvc-gabion-wall-net',
        title: "Jumbo PVC Gabion Wall Net",
        description: "Heavy-duty PVC gabion wall net for enhanced protection",
        specifications: [
          { key: "Product Type", value: "Wire Mesh" },
          { key: "Surface Treatment", value: "Coated" },
          { key: "Material", value: "Stainless Steel" },
          { key: "Hole Shape", value: "Round Hole Triangle Hole" },
          { key: "Mesh Type", value: "Steel Wire Mesh" },
          { key: "Color", value: "Silver" },
          { key: "Supply Ability", value: "3000000 Per Month" }
        ],
        price: "600",
        priceUnit: "INR",
        imagePath: "/images/products/gabion-box/Jumbo-Pvc-Gabion-Wall-Net.jpg"
      },
      {
        id: 'industrial-gi-gabion-boxes',
        title: "Industrial GI Gabion Boxes",
        description: "Industrial-grade GI gabion boxes for commercial applications",
        specifications: [
          { key: "Surface Treatment", value: "Coated, Galvanized" },
          { key: "Product Type", value: "Wire Mesh" },
          { key: "Hole Shape", value: "Round Hole Triangle Hole" },
          { key: "Material", value: "Galvanized Steel" },
          { key: "Mesh Type", value: "Galvanized Iron Wire" },
          { key: "Color", value: "Silver" },
          { key: "Supply Ability", value: "3000000 Per Month" }
        ],
        price: "135",
        priceUnit: "INR",
        imagePath: "/images/products/gabion-box/Industrial-GI-Gabion-Boxes.jpg"
      },
      {
        id: 'stainless-steel-hexagonal-mesh-revet-mattresses',
        title: "Stainless Steel Hexagonal Mesh Revet Mattresses",
        description: "High-quality stainless steel hexagonal mesh revet mattresses",
        specifications: [
          { key: "Supply Ability", value: "3000000 Per Month" },
          { key: "Color", value: "Silver" },
          { key: "Mesh Type", value: "Steel Wire Mesh" },
          { key: "Hole Shape", value: "Round Hole Triangle Hole" },
          { key: "Surface Treatment", value: "Coated" },
          { key: "Product Type", value: "Wire Mesh" },
          { key: "Material", value: "Stainless Steel" }
        ],
        price: "150",
        priceUnit: "INR",
        imagePath: "/images/products/gabion-box/Stainless-Steel-Hexagonal-Mesh-Revet-Mattresses.jpg"
      },
      {
        id: 'welded-wire-fencing-gabion-wall-net',
        title: "Welded Wire Fencing Gabion Wall Net",
        description: "Durable welded wire fencing gabion wall net",
        specifications: [
          { key: "Hole Shape", value: "Square Hole" },
          { key: "Material", value: "Galvanized Steel" },
          { key: "Mesh Type", value: "Galvanized Iron Wire" },
          { key: "Color", value: "Silver" },
          { key: "Surface Treatment", value: "Powder Coating" },
          { key: "Product Type", value: "Wire Mesh" },
          { key: "Supply Ability", value: "3000000 Per Month" }
        ],
        price: "135",
        priceUnit: "INR",
        imagePath: "/images/products/gabion-box/Welded-Wire-Fencing-Gabion-Wall-Net.jpg"
      },
      {
        id: 'galvanized-iron-hexagonal-wire-mesh',
        title: "Galvanized Iron Hexagonal Wire Mesh",
        description: "Premium galvanized iron hexagonal wire mesh",
        specifications: [
          { key: "Surface Treatment", value: "Galvanized" },
          { key: "Product Type", value: "Wire Mesh" },
          { key: "Mesh Type", value: "Galvanized Iron Wire" },
          { key: "Material", value: "Galvanized Steel" },
          { key: "Hole Shape", value: "Round Hole Triangle Hole" },
          { key: "Color", value: "Silver" },
          { key: "Supply Ability", value: "3000000 Per Month" }
        ],
        price: "130",
        priceUnit: "INR",
        imagePath: "/images/products/gabion-box/Galvanized-Iron-Hexagonal-Wire-Mesh.jpg"
      }
    ]
  },
  {
    id: 'fence-system',
    title: "Fence System",
    description: "Fence systems are made to save a lot of time, money, labor, in an effective way.  These are suited well for several production environments. These rust-proof fences are simple to install and dissemble.",
    features: [],
    imagePath: "/images/fence-system.jpg",
    products: [
      {
        id: 'cast-iron-weld-mesh-fence-panel',
        title: "Cast Iron Weld Mesh Fence Panel System",
        description: "High-quality Cast Iron Weld Mesh Fence Panel System designed for superior security and durability.",
        specifications: [
          { key: "Material", value: "Cast Iron" },
          { key: "Usage", value: "Safety & Security Purpose" },
          { key: "Metal Type", value: "Iron" },
          { key: "Color", value: "Green" },
          { key: "Product Type", value: "Weld Mesh Fence Panel System" },
          { key: "Feature", value: "Easily Assembled" },
          { key: "Supply Ability", value: "3000000 Per Month" }
        ],
        price: "110",
        priceUnit: "INR",
        imagePath: "/images/products/fence-system/Cast-Iron-Weld-Mesh-Security-Fence-System.jpg"
      },
      {
        id: 'galvanized-iron-concertina-wire',
        title: "Galvanized Iron Concertina Wire Fence System",
        description: "We manufacture Galvanized Iron Concertina Wire Fence System that is available in different specifications and can be availed from us at reasonable rates. These best quality, corrosion resistant, and strong coils are vastly used for metro stations, restricted zones, airport security, common fencing, military security and border security, as well. The surface of the mesh is treated i.e. it is galvanized and is made from iron making it more durable and tough. Before the dispatch, our offered Galvanized Iron Concertina Wire Fence System is checked for its defects and flawlessness",
        price: "70",
        priceUnit: "INR",
        imagePath: "/images/products/fence-system/Galvanized-Iron-Concertina-Wire-Fence-System.jpg"
      },
      {
        id: 'anti-climb-up-security',
        title: "Anti Climb Up Security Fence System",
        description: "Advanced security fence system designed to prevent climbing and unauthorized access.",
        specifications: [
          { key: "Color", value: "Green" },
          { key: "Product Type", value: "Anti Climb Up Security Fence System" },
          { key: "Metal Type", value: "Iron" },
          { key: "Usage", value: "Safety & Security Purpose" },
          { key: "Material", value: "Cast Iron" },
          { key: "Supply Ability", value: "3000000 Per Month" }
        ],
        price: "130",
        priceUnit: "INR",
        imagePath: "/images/products/fence-system/Anti-Climb-Up-Security-Fence-System.jpg"
      },
      {
        id: 'mild-steel-powder-coated-mesh',
        title: "Mild Steel Powder Coated Mesh Fence System",
        description: "Durable powder coated mesh fence system for enhanced security.",
        specifications: [
          { key: "Supply Ability", value: "3000000 Per Month" },
          { key: "Feature", value: "Easily Assembled" },
          { key: "Metal Type", value: "Steel" },
          { key: "Product Type", value: "Mesh Fence System" },
          { key: "Color", value: "Green" },
          { key: "Usage", value: "Safety & Security Purpose" },
          { key: "Material", value: "Mild Steel" }
        ],
        price: "130",
        priceUnit: "INR",
        imagePath: "/images/products/fence-system/Mild-Steel-Powder-Coated-Mesh-Fence-System.jpg"
      },
      {
        id: 'zinc-and-poly-epoxy-security',
        title: "Zinc And Poly Epoxy Security Fence System",
        description: "Advanced security fence system with zinc and poly epoxy coating for superior protection.",
        specifications: [
          { key: "Supply Ability", value: "3000000 Per Month" },
          { key: "Product Type", value: "Zinc And Poly Epoxy Security Fence System" },
          { key: "Color", value: "Silver" },
          { key: "Metal Type", value: "Iron" },
          { key: "Material", value: "Zinc & Poly Epoxy" },
          { key: "Usage", value: "Safety & Security Purpose" },
          { key: "Feature", value: "Easily Assembled" }
        ],
        price: "110",
        priceUnit: "INR",
        imagePath: "/images/products/fence-system/Zinc-Poly-Epoxy-Security-Fence-System.jpg"
      },
      {
        id: 'mild-steel-fence',
        title: "Mild Steel Fence System",
        description: "Standard mild steel fence system for general security applications.",
        specifications: [
          { key: "Feature", value: "Easily Assembled" },
          { key: "Usage", value: "Safety & Security Purpose" },
          { key: "Material", value: "Mild Steel" },
          { key: "Metal Type", value: "Steel" },
          { key: "Product Type", value: "Fence System" },
          { key: "Color", value: "Silver" },
          { key: "Supply Ability", value: "3000000 Per Month" }
        ],
        price: "110",
        priceUnit: "INR",
        imagePath: "/images/products/fence-system/Mild-Steel-Fence-System.jpg"
      },
      {
        id: 'cast-iron-weld-mesh-security',
        title: "Cast Iron Weld Mesh Security Fence System",
        description: "Heavy-duty weld mesh security fence system made from cast iron.",
        specifications: [
          { key: "Supply Ability", value: "3000000 Per Month" },
          { key: "Feature", value: "Easily Assembled" },
          { key: "Usage", value: "Safety & Security Purpose" },
          { key: "Material", value: "Cast Iron" },
          { key: "Metal Type", value: "Iron" },
          { key: "Color", value: "Green" },
          { key: "Product Type", value: "Weld Mesh Security Fence System" }
        ],
        price: "110",
        priceUnit: "INR",
        imagePath: "/images/products/fence-system/cast-iron-weld-mesh-security-fence-system.jpg"
      },
      {
        id: 'mild-steel-chain-link',
        title: "Mild Steel Chain Link Fence System",
        description: "Versatile chain link fence system made from mild steel.",
        specifications: [
          { key: "Supply Ability", value: "3000000 Per Month" },
          { key: "Feature", value: "Easily Assembled" },
          { key: "Usage", value: "Safety & Security Purpose" },
          { key: "Material", value: "Mild Steel" },
          { key: "Metal Type", value: "Steel" },
          { key: "Color", value: "Silver" },
          { key: "Product Type", value: "Chain Link Fence System" }
        ],
        price: "65",
        priceUnit: "INR",
        imagePath: "/images/products/fence-system/Mild-Steel-Chain-Link-Fence-System.jpg"
      }
    ]
  },
  {
    id: 'gabion-wall-net',
    title: "Gabion Wall Net",
    description: "We offer gabion wall nets, which find several applications in civil engineering, highway & bridges, river & canal, landscaping, erosion control, retaining wall structures, dams & culverts, etc. These are ideal for preventing corrosion along water channels, creeks, lakes, rivers, and oceans. These nets can function well in several surroundings. The installation of these nets needs less labor than concrete walls. Gabion wall nets are extremely affordable and anti-erosion to slope.",
    features: [
    ],
    imagePath: "/images/gabion-wall-net.jpg",
    products: [
      {
        id: 'ss304-wire-mesh',
        title: "SS304 Wire Mesh",
        description: "SS304 Wire Mesh is mostly employed for commercial purposes, including bug screening and animal fence as well as industrial applications where separation or filtration are required. It describes two-or three-dimensional lattice structures constructed of two or more metallic wires connected by welding, weaving, netting, or knitting.",
        specifications: [
          { key: "Material", value: "Stainless Steel 304" },
          { key: "Applications", value: "Bug screening, animal fence, filtration" },
          { key: "Construction", value: "Two or three-dimensional lattice structures" },
          { key: "Connection Methods", value: "Welding, weaving, netting, knitting" }
        ],
        price: "130",
        priceUnit: "INR",
        imagePath: "/images/products/gabion-wall-net/ss304-wire-mesh.jpg"
      },
      {
        id: 'stainless-steel-weldmesh-gabion',
        title: "Stainless Steel Weldmesh Gabion Wall Net",
        description: "Professional grade weldmesh gabion wall net with customizable dimensions and powder coating options.",
        specifications: [
          { key: "Mesh Size Range", value: "25mm to 150mm" },
          { key: "Wire Diameter Range", value: "1.5mm to 5.00mm" },
          { key: "Length Range", value: "0.5 meter to 8.0 meter" },
          { key: "Width Range", value: "0.5 Meter to 8.0 Meter" },
          { key: "Height Range", value: "0.3 Meter to 1.5 meter" },
          { key: "Wire Type", value: "GI" },
          { key: "Surface treatment", value: "Powder Coating" },
          { key: "Color", value: "Any RAL Shade" },
          { key: "Production Capacity", value: "300 MT" },
          { key: "Delivery Time", value: "20 Days" }
        ],
        price: "120",
        priceUnit: "INR",
        imagePath: "/images/products/gabion-wall-net/stainless-steel-weldmesh.jpg"
      },
      {
        id: 'double-core-weld-mesh',
        title: "Double Core Weld Mesh Gabion Wall Net",
        description: "High-quality double core weld mesh gabion wall net with versatile applications.",
        specifications: [
          { key: "Hole Shape", value: "Round Hole Triangle Hole" },
          { key: "Surface Treatment", value: "Galvanized" },
          { key: "Product Type", value: "Wire Mesh" },
          { key: "Mesh Type", value: "Steel Wire Mesh" },
          { key: "Color", value: "Silver" },
          { key: "Material", value: "Stainless Steel" },
          { key: "Supply Ability", value: "3000000 Per Month" }
        ],
        price: "120",
        priceUnit: "INR",
        imagePath: "/images/products/gabion-wall-net/double-core-weld-mesh.jpg"
      }
    ]
  },
  {
    id: 'wire-fencing',
    title: "Wire Fencing",
    description: "We offer Wire fencings, which are made from optimum quality materials, making the properties safe. These are also used in garden protecting from animals, and birds. These rust-proof fencing provide advanced level of functionality and speak of advanced utilization.",
    features: [],
    imagePath: "/images/wire-fencing.jpg",
    products: [
      {
        id: 'conseil-developpement',
        title: "Conseil en Développement",
        description: "Accompagnement stratégique pour votre croissance",
        features: [
          "Analyse de marché",
          "Stratégie commerciale",
          "Plan d'action",
          "Suivi des résultats"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'gabion-mattress',
    title: "Gabion Mattress",
    description: "The Gabion Mattress are functional as the ideal additions to gardens of any size for erosion control as well as stabilizing ridges. These structures are utilized to transform as well as protect the space due to their space-saving design.",
    features: [
    ],
    imagePath: "/images/gabion-mattresss.jpg",
    products: [
    {
      id: 'square-stainless-steel-gabion-mattress',
      title: "Square Stainless Steel Gabion Mattress",
      description: "For filling rocks we have come up with Square Stainless Steel Gabion Mattress. This is majorly used for stabilizing slopes. It can also be used for safety and security purposes so that the rocks do not fall or run away on the path and injure people. This is made with top-class stainless steel and powder coated for getting treated surface with a silver finish. The shape of the holes in this is square so that it can stop rocks of any shape from coming out of it. Our Square Stainless Steel Gabion Mattress is highly sturdy and can withstand any condition.",
      price: "120 INR",
      imagePath: "/images/product1.png"
    },
    {
      id: 'stainless-steel-sack-gabion-mattress',
      title: "Stainless Steel Sack Gabion Mattress",
      description: "Our Stainless Steel Sack Gabion Mattress is used to provide erosion protection for river banks. It is also used for bridge piers, for immediate defense from erosion from water. These are tubular units made with stainless steel that is filled with gabion stone so that the stones do not come out of it. These units are placed at the project sites after being tightly laced. The shape of these is hexagonal with a treatment of galvanization for a finished surface.",
      price: "65 INR",
      minOrderQuantity: "1000 Kilograms",
     
      imagePath: "/images/product1.png"
    }
  ]
  },
  {
    id: 'barbed-wire',
    title: "Barbed Wire",
    description: "Barbed wires are advanced type of steel fencing having sharp edges or points. These are utilized for the construction of strong, durable and inexpensive fences. The wires must be chosen for their physical properties and capacities.",
    features: [
    ],
    imagePath: "/images/barbed-wire.jpg",
    products: [
      {
        id: 'stainless-steel-barbed-wire',
        title: "Stainless Steel Barbed Wire",
        description: "We offer Stainless Steel Barbed Wire that is made of galvanized or stainless-steel wires. This is also known as barb wire, which is a type of steel fencing wire constructed with sharp edges or points arranged at intervals along the strands. It is mainly used for insolation and protection in grassland borders, private places, railways, and highways. This type of wire gives good corrosion resistant performance even in moist environments. It is put on top of walls enclosing secured property and is used to build affordable fences. Stainless Steel Barbed Wire is also a major feature of the fortifications in trench warfare as a wire obstacle.",
        specifications: [
          { key: "Usage/Application", value: "Industrial" },
          { key: "Material Grade", value: "SS 304" },
          { key: "Weave Type", value: "Welded" },
          { key: "Size", value: "50X50, 100X100, 75X75" },
          { key: "Wire Diameter", value: "2.00mm to 4.00mm" },
          { key: "Material", value: "Stainless Steel" },
          { key: "Mesh Size", value: "0-10 per inch" },
          { key: "Packaging Type", value: "Roll, Panels" },
          { key: "Surface Treatment", value: "Powder Coated" },
          { key: "Color", value: "Silver" },
          { key: "Metal Type", value: "Steel" },
          { key: "Supply Ability", value: "3000000 Kilograms Per Month" }
        ],
        price: "85",
        priceUnit: "INR",
        minOrderQuantity: "1000 Kilograms",
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'pvc-coated-wire',
    title: "PVC Coated Wire",
    description: "PVC coated wires are used for various applications. These are offered in various specifications and dimensions.",
    features: [
    ],
    imagePath: "/images/pvc-coated-wire.jpg",
    products: [
      {
        id: '2-5-sqmm-pvc-coated-wire',
        title: "2.5 Sqmm PVC Coated Wire",
        description: "Electrical cable construction for insulation, bedding, and sheathing. This can replace rubber insulated and sheathed cables in general household wiring due to its ease of processing. It is commonly used as an indoor domestic cable. The most common use for this type of 2.5 Sqmm PVC Coated Wire is for circuits that provide power to sockets. It consists of two cores and an earth core, all of which must be inserted with distinctive green and yellow sleeves.",
        specifications: [
          { key: "Wire Size", value: "2.5 sqmm" },
          { key: "Brand", value: "Polymer" },
          { key: "Color", value: "Green" },
          { key: "Insulation Material", value: "PVC" },
          { key: "Surface Treatment", value: "PVC Coated" },
          { key: "Usage", value: "Safety & Security Purpose" },
          { key: "Material", value: "PVC" },
          { key: "Product Type", value: "PVC Coated Wire" },
          { key: "Type", value: "Wire" }
        ],
        price: "100",
        priceUnit: "INR",
        minOrderQuantity: "1000 Kilograms",
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'chain-link-wire',
    title: "Chain Link Wire",
    description: "The Chain Link Fencings are utilized for securing as well as enclosing backyards, barns, construction sites, penitentiaries, and others. These fencing are appreciable for several economic advantages. These speak of high durability as well as affordability.",
    features: [
    ],
    imagePath: "/images/chain-link-wire.jpg",
    products: [
      {
        id: 'conseil-innovation',
        title: "Conseil en Innovation",
        description: "Accompagnement dans vos projets d'innovation",
        features: [
          "Veille technologique",
          "Idéation",
          "Prototypage",
          "Mise en marché"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'wall-finishing-material',
    title: "Wall Finishing Material",
    description: "We offer Wall finishing Materials, for a regular, even, smooth, durable and clean finished surface. These must be utilized for protecting against atmospheric influences as well as intrudes.  These galvanized and PVC coated structures are apt for exterior applications.",
    features: [
    ],
    imagePath: "/images/wall-finishing-material.jpeg",
    products: [
      {
        id: 'conseil-innovation',
        title: "Conseil en Innovation",
        description: "Accompagnement dans vos projets d'innovation",
        features: [
          "Veille technologique",
          "Idéation",
          "Prototypage",
          "Mise en marché"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'rock-fall-netting',
    title: "Rock Fall Netting",
    description: "Offered Rock fall nettings are apt for simple drapery systems. These are suited for geotechnical as well as engineering applications. Supplied nettings allow for rock fall protection, slope stabilization, and surface protection applications.",
    features: [
    ],
    imagePath: "/images/rock-fall-netting.avif",
    products: [
      {
        id: 'conseil-innovation',
        title: "Conseil en Innovation",
        description: "Accompagnement dans vos projets d'innovation",
        features: [
          "Veille technologique",
          "Idéation",
          "Prototypage",
          "Mise en marché"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'industrial-wire-mesh',
    title: "Industrial Wire Mesh",
    description: "We offer Industrial Wire Mesh, which are used as Grills, Fences, Sifters, Cages, Safety barricades etc. These are also apt to be used as highly functional shelving. Find them at affordable rate from us.",
    features: [
    ],
    imagePath: "/images/industrial-wire-mesh.jpeg",
    products: [
      {
        id: 'conseil-innovation',
        title: "Conseil en Innovation",
        description: "Accompagnement dans vos projets d'innovation",
        features: [
          "Veille technologique",
          "Idéation",
          "Prototypage",
          "Mise en marché"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'mesh-fencing',
    title: "Mesh Fencing",
    description: "Mesh fencings are offered with advanced security, easy installation, visual appealing, adaptable features, etc.  These high visibility fencing have resistance against rust and oxidation. Moreover, these fencings are easy to wipe down and simple to take care of.",
    features: [
    ],
    imagePath: "/images/mesh-fencing.jpeg",
    products: [
      {
        id: 'conseil-innovation',
        title: "Conseil en Innovation",
        description: "Accompagnement dans vos projets d'innovation",
        features: [
          "Veille technologique",
          "Idéation",
          "Prototypage",
          "Mise en marché"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'wielded-wire-mesh',
    title: "Wielded Wire Mesh",
    description: "",
    features: [
    ],
    imagePath: "/images/wielded-wire-mesh.jpeg",
    products: [
      {
        id: 'conseil-innovation',
        title: "Conseil en Innovation",
        description: "Accompagnement dans vos projets d'innovation",
        features: [
          "Veille technologique",
          "Idéation",
          "Prototypage",
          "Mise en marché"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'wire-netting',
    title: "Wire-netting",
    description: "",
    features: [
    ],
    imagePath: "/images/wire-netting.jpg",
    products: [
      {
        id: 'conseil-innovation',
        title: "Conseil en Innovation",
        description: "Accompagnement dans vos projets d'innovation",
        features: [
          "Veille technologique",
          "Idéation",
          "Prototypage",
          "Mise en marché"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },

];
