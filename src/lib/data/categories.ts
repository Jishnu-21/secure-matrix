export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  imagePath: string;
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
    id: 'teleprospection',
    title: "Téléprospection / Télémarketing",
    description: "Solutions complètes de télémarketing et gestion de la relation client",
    features: [
      "Prise de rendez-vous qualifiés",
      "Gestion de campagnes",
      "Service client premium",
      "Suivi personnalisé",
      "Rapports détaillés"
    ],
    imagePath: "/images/product1.png",
    products: [
      {
        id: 'teleprospection-b2b',
        title: "Téléprospection B2B",
        description: "Service de prospection téléphonique pour entreprises",
        features: [
          "Qualification de fichiers",
          "Prise de rendez-vous",
          "Détection de projets",
          "Mise à jour base de données",
          "Reporting hebdomadaire"
        ],
        imagePath: "/images/product1.png"
      },
      {
        id: 'gestion-relation-client',
        title: "Gestion Relation Client",
        description: "Service complet de gestion de la relation client",
        features: [
          "Support client multicanal",
          "Suivi des réclamations",
          "Enquêtes satisfaction",
          "Fidélisation client",
          "Analyses et reporting"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'preparation-experimentale',
    title: "Préparation Expérimentale",
    description: "Notre expertise en préparation expérimentale vous garantit des résultats fiables et précis.",
    features: [
      "Protocoles standardisés",
      "Équipements de pointe",
      "Personnel qualifié",
      "Contrôle qualité rigoureux"
    ],
    imagePath: "/images/product1.png",
    products: [
      {
        id: 'analyse-materiaux',
        title: "Analyse de Matériaux",
        description: "Services d'analyse approfondie des matériaux",
        features: [
          "Caractérisation complète",
          "Tests de performance",
          "Analyse de composition",
          "Rapports détaillés"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'stockage',
    title: "Stockage de l'échantillon",
    description: "Solutions de stockage adaptées à vos besoins spécifiques.",
    features: [
      "Stockage sécurisé",
      "Conditions contrôlées",
      "Traçabilité complète",
      "Accès facile aux échantillons"
    ],
    imagePath: "/images/product1.png",
    products: [
      {
        id: 'stockage-securise',
        title: "Stockage Sécurisé",
        description: "Service de stockage sécurisé pour vos échantillons",
        features: [
          "Contrôle température",
          "Sécurité 24/7",
          "Suivi en temps réel",
          "Accès contrôlé"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'developpement-commercial',
    title: "Développement Commercial",
    description: "Stratégies et solutions pour accélérer votre croissance commerciale",
    features: [
      "Études de marché",
      "Plans d'action",
      "Formation commerciale",
      "Suivi des performances",
      "Optimisation des processus"
    ],
    imagePath: "/images/product1.png",
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
    id: 'formation-professionnelle',
    title: "Formation Professionnelle",
    description: "Programmes de formation adaptés aux besoins de votre entreprise",
    features: [
      "Formations sur mesure",
      "Experts qualifiés",
      "Approche pratique",
      "Suivi post-formation",
      "Certification professionnelle"
    ],
    imagePath: "/images/product1.png",
    products: [
      {
        id: 'formation-commerciale',
        title: "Formation Commerciale",
        description: "Perfectionnement des techniques de vente",
        features: [
          "Techniques de vente",
          "Négociation",
          "Gestion client",
          "Pratique terrain"
        ],
        imagePath: "/images/product1.png"
      }
    ]
  },
  {
    id: 'conseil-strategie',
    title: "Conseil en Stratégie",
    description: "Accompagnement stratégique pour optimiser votre performance",
    features: [
      "Analyse stratégique",
      "Optimisation processus",
      "Innovation business",
      "Transformation digitale",
      "Performance durable"
    ],
    imagePath: "/images/product1.png",
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
  }
]
