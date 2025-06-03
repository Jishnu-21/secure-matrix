'use client'

import { use, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { MdConstruction, MdPsychology, MdSecurity, MdFoundation, MdEco, MdVerified, MdWarning } from "react-icons/md";
import { BsTools, BsShieldCheck, BsBuilding, BsGear, BsTreeFill } from "react-icons/bs";
import { GiMining, GiStonePile, GiWaterfall, GiRoad, GiBarrier } from "react-icons/gi";
import { FaIndustry, FaMountain, FaShieldAlt, FaWater } from "react-icons/fa";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./carousel.css"

// Add scrollbar-hide styles
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`;

// Helper function to format key for display
const formatKey = (key: string) => {
  return key
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Helper function to get icon based on content
const getContentIcon = (content: string) => {
  const lowercaseContent = content.toLowerCase();
  if (lowercaseContent.includes('strength') || lowercaseContent.includes('durability')) {
    return <MdConstruction className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />;
  }
  if (lowercaseContent.includes('flexible') || lowercaseContent.includes('versatile')) {
    return <MdPsychology className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />;
  }
  if (lowercaseContent.includes('protection') || lowercaseContent.includes('security')) {
    return <MdSecurity className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />;
  }
  if (lowercaseContent.includes('stability') || lowercaseContent.includes('foundation')) {
    return <MdFoundation className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />;
  }
  if (lowercaseContent.includes('eco') || lowercaseContent.includes('environment')) {
    return <MdEco className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />;
  }
  return <MdVerified className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />;
};

// Helper function to get section icon
const getSectionIcon = (title: string, size: number = 24) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('agriculture')) return <GiStonePile size={size} />;
  if (titleLower.includes('construction') || titleLower.includes('mining')) return <GiMining size={size} />;
  if (titleLower.includes('coastal') || titleLower.includes('water')) return <GiWaterfall size={size} />;
  if (titleLower.includes('real estate') || titleLower.includes('urban')) return <BsBuilding size={size} />;
  if (titleLower.includes('defence') || titleLower.includes('security')) return <FaShieldAlt size={size} />;
  if (titleLower.includes('challenges')) return <MdWarning size={size} />;
  if (titleLower.includes('solutions')) return <MdVerified size={size} />;
  return <MdConstruction size={size} />; // default icon
};

// Application data
const sectorData = {
  'agricultural-purpose': {
    title: 'Agricultural Purpose',
    description: 'Agribusiness is a vital component of the global economy, underpinning the production, processing, and distribution of essential agricultural commodities. At Secure Matrix, we recognize the critical role this sector plays in ensuring global food security. Our engineering solutions are tailored to reinforce agribusiness operations, enhance resilience to climate change, and promote sustainable practices across the entire agricultural value chain.',
    mainImage: [
      { url: '/images/sector/agriculture/1.jpg', location: '' },
      { url: '/images/sector/agriculture/2.jpg', location: '' },
      { url: '/images/sector/agriculture/3.jpg', location: 'RATNAGIRI SITE, MAHARASHTRA' },
      { url: '/images/sector/agriculture/4.jpg', location: 'KD INFRA VALSAD,GUJRAT' },
    ],
    rightSection: {
      title: 'Agricultural Benefits',
      advantages: [
        'Improves load-bearing capacity of soil',
        'Facilitates efficient water movement',
        'Protects against wind and water erosion',
        'Reduces traditional stabilization costs',
        'Maintains soil integrity',
        'Increased Agricultural productivity',
        'Enhanced Soil Stability',
        'Improved Drainage Systems',
        'Cost Effective Solutions',
      ],
    },
    galleryImages: [
      { url: '/images/application/agri-1.jpg', title: 'Soil Stabilization', link: 'soil-stabilization' },
      { url: '/images/application/agri-2.jpg', title: 'Drainage Systems', link: 'drainage-systems' },
      { url: '/images/application/agri-3.jpg', title: 'Erosion Control', link: 'erosion-control' },
      { url: '/images/application/agri-4.jpg', title: 'Terrace Farming', link: 'terrace-farming' },
      { url: '/images/application/agri-5.jpg', title: 'Water Management', link: 'water-management' },
    ]
  },
  'environmental-protection': {
    title: 'Environmental Protection',
    description: 'At Secure Matrix, we deliver advanced, engineered solutions for environmental protection and restoration, with a focus on waste management, land rehabilitation, and pollution mitigation. Our systems are designed to ensure landfill stability, control erosion, and reinforce soil integrity, supporting long-term sustainability while reducing ecological impact.',
    mainImage: [
      { url: '/images/sector/environmental/1.jpg', location: 'RMK TAEGAON MIDC PUNE, MAHARASHTRA' },
      { url: '/images/sector/environmental/2.jpg', location: 'KD INFRA VALSAD,GUJRAT' },
      { url: '/images/sector/environmental/3.jpg', location: 'KHOPOLI SITE MUMBAI, MAHARASHTRA' },
    ],
    rightSection: {
      title: 'Environmental Benefits',
      advantages: [
        'Coastal Protection, Marine Structures & Pipeline Protection',
        'Drainage of Structures',
        'Environment, Dewatering & Landfills',
        'Erosion Control',
        'Landscape & Architecture',
        'Retaining Walls & Soil Reinforcement'
      ],
    },
    galleryImages: [
      { url: '/images/application/const-1.jpg', title: 'Soil Reinforcement', link: 'soil-reinforcement' },
      { url: '/images/application/const-2.jpg', title: 'Mining Applications', link: 'mining' },
      { url: '/images/application/const-3.jpg', title: 'Road Construction', link: 'roads' },
      { url: '/images/application/const-4.jpg', title: 'Foundation Work', link: 'foundations' }
    ]
  },
  'coastal-river-control-work': {
    title: 'COASTAL & RIVER CONTROL WORK',
    description: 'Secure Matrix has maintained a leading position in coastal and river engineering for over a year, beginning with the reconstruction of the River Reno’s banks. We offer bespoke solutions that combine project-specific strategies, environmentally sustainable materials, and state-of-the-art technologies—ensuring the seamless integration of human activities with the natural environment.',
    mainImage: [
      { url: '/images/sector/coastal/1.jpg', location: 'Baramati Nagar Parishad: River Karva' },
      { url: '/images/sector/coastal/2.jpg', location: '' },
      { url: '/images/sector/coastal/3.jpg', location: 'Pimpri Chinchwad Municipal Corporation' },
      { url: '/images/sector/coastal/4.jpg', location: 'Baramati Nagar Parishad: River Karva' },
    ],
    rightSection: {
      title: 'Coastal Defence Benefits',
      advantages: [
        'Protects shorelines from waves                           ',
        'Reinforces leaves and embankments                       ',
        'Reduces sediment displacement                           ',
        'Minimizes hard structures                                ',
        'Supports natural ecosystems                             ',
        'Long-Term Protection                                  ',
        'Reduced Maintenance Costs                             ',
        'Improved Water Flow Regulation                        ',
        'Resilient Against Climate Change                      ',
        'Aesthetic and Ecological Balance                      '
      ],
    },
    galleryImages: [
      { url: '/images/application/coastal-1.jpg', title: 'Shoreline Protection', link: 'shoreline' },
      { url: '/images/application/coastal-2.jpg', title: 'River Management', link: 'river' },
      { url: '/images/application/coastal-3.jpg', title: 'Erosion Control', link: 'erosion' },
      { url: '/images/application/coastal-4.jpg', title: 'Embankment Protection', link: 'embankment' }
    ]
  },
  'emergency-flood': {
    title: 'Emergency Flood',
    description: 'Secure Matrix provides specialized solutions to mitigate floods, landslides, and other natural disasters, drawing on over a century of expertise in emergency interventions. Our approach integrates rapid response with long-term resilience strategies, ensuring the safety of communities and the protection of critical infrastructure across both urban and rural environments.',
    mainImage: [
      { url: '/images/sector/flood/1.jpg', location: 'SARKHEJ, JAMMU & KASHMIR' },
      { url: '/images/sector/flood/2.jpg', location: 'Pimpri Chinchwad Municipal Corporation' },
      { url: '/images/sector/flood/3.jpg', location: 'NAINA NAVI MUMBAI ,MAHARASHTRA' },
    ],

    rightSection: {
      title: 'Emergency Flood Benefits',
      advantages: [
        'Erosion Control',
        'Hydraulic Works',
        'Retaining Walls & Soil Reinforcement',
      ],
    },
    galleryImages: [
      { url: '/images/application/urban-1.jpg', title: 'Road Construction', link: 'roads' },
      { url: '/images/application/urban-2.jpg', title: 'Building Foundations', link: 'foundations' },
      { url: '/images/application/urban-3.jpg', title: 'Drainage Systems', link: 'drainage' },
      { url: '/images/application/urban-4.jpg', title: 'Green Spaces', link: 'green-spaces' }
    ]
  },
  'water-resources-irrigation': {
    title: 'WATER RESOURCES & IRRIGATION',
    description: 'River training works typically encompass the construction of revetments, reinforced soil slopes and walls, gabion retaining walls, groynes, scour protection systems, riverbank protection and stabilization measures, as well as channel widening. At Secure Matrix, we design cost-effective solutions tailored to project-specific requirements and site conditions, utilizing our specialized range of engineered products.',
    mainImage: [
      { url: '/images/sector/water/1.jpg', location: 'Baramati Nagar Parishad: River Karva' },
      { url: '/images/sector/water/2.jpg', location: 'RMK TAEGAON MIDC PUNE, MAHARASHTRA' },
      { url: '/images/sector/water/3.jpg', location: 'SAROL WATER POINT ,JAMMU' },
      { url: '/images/sector/water/4.jpg', location: 'NAINA NAVI MUMBAI ,MAHARASHTRA' },
    ],
    rightSection: {
      title: 'Water Resources Benefits',
      advantages: [
        'Enhanced Stability and Erosion Control',
        'Flexibility and Adaptability',
        'Natural Aesthetics and Environmental Benefits',
        'Efficient Water Management',
        'Long Lifespan and Low Maintenance',
        'Durability and Resistance',
        'Environmental Friendliness',
        'Cost-Effectiveness',
        'Aesthetic and Ecological Balance',
      ],
    },
    galleryImages: [
      { url: '/images/application/defence-1.jpg', title: 'Military Roads', link: 'military-roads' },
      { url: '/images/application/defence-2.jpg', title: 'Protective Barriers', link: 'barriers' },
      { url: '/images/application/defence-3.jpg', title: 'Bunker Systems', link: 'bunkers' },
      { url: '/images/application/defence-4.jpg', title: 'Field Fortifications', link: 'fortifications' }
    ]
  },
  'transportation-infrastructure': {
    title: 'TRANSPORTATION INFRASTRUCTURE',
    description: 'Secure Matrix provides advanced, sustainable solutions for the development and enhancement of transportation infrastructure across multiple sectors, including roads, railways, airports, bridges, and tunnels. Through our specialized expertise, we ensure the delivery of resilient and efficient transport systems that facilitate reliable connectivity and contribute to the creation of safer, more sustainable urban and rural environments.',
    mainImage: [
      { url: '/images/sector/transportation/1.png', location: '' },
      { url: '/images/sector/transportation/2.png', location: '' },
      { url: '/images/sector/transportation/3.jpg', location: '' },
    ],
    rightSection: {
      title: 'Transportation Infrastructure Benefits',
      advantages: [
        'Basal Reinforcement',
        'Drainage of Structures',
        'Erosion Control',
        'Fencing & Wire',
        'Hydraulic Works',
        'Retaining Walls & Soil Reinforcement',
        'Rockfall Protection & Snow Barriers',
        'Safety & Noise Barriers',
        'Soil Stabilisation & Pavements',
        'Tunnelling',
      ],
    },
    galleryImages: [
      { url: '/images/application/defence-1.jpg', title: 'Military Roads', link: 'military-roads' },
      { url: '/images/application/defence-2.jpg', title: 'Protective Barriers', link: 'barriers' },
      { url: '/images/application/defence-3.jpg', title: 'Bunker Systems', link: 'bunkers' },
      { url: '/images/application/defence-4.jpg', title: 'Field Fortifications', link: 'fortifications' }
    ]
  },
  'defence-security': {
    title: 'DEFENCE & SECURITY',
    description: 'The defence and security sector face significant global threats, such as hostile vehicle breaches and explosive attacks. Effective protection is vital to ensure the safety of military personnel, civilians, and essential infrastructure. Secure Matrix delivers cutting-edge solutions tailored to address these critical security challenges.',
    mainImage: [
      { url: '/images/sector/defence/1.jpg', location: '' },
      { url: '/images/sector/defence/2.jpg', location: '' },
      { url: '/images/sector/defence/3.jpg', location: '' },
      { url: '/images/sector/defence/4.jpg', location: '' },
    ],
    rightSection: {
      title: 'Defence Security Benefits',
      advantages: [
        'Quick installation capability                                           ',
        'High mobility ',
        'Extreme condition resistance                                          ',
        'Enhanced blast protection                                                ',
        'Cost-effective solutions                                                   ',
        'Stronger Military Infrastructure',
        'Increased Safety for Personnel',
        'Sustainable & Low Maintenance',
        'Tactical Advantage',
        'Versatile Application',
      ],
    },
    galleryImages: [
      { url: '/images/application/defence-1.jpg', title: 'Military Roads', link: 'military-roads' },
      { url: '/images/application/defence-2.jpg', title: 'Protective Barriers', link: 'barriers' },
      { url: '/images/application/defence-3.jpg', title: 'Bunker Systems', link: 'bunkers' },
      { url: '/images/application/defence-4.jpg', title: 'Field Fortifications', link: 'fortifications' }
    ]
  },
  'mining': {
    title: 'MINING',
    description: 'The mining industry faces growing demands to enhance efficiency and safety while reducing environmental and social impacts. Secure Matrix offers innovative solutions that optimize all phases of the mining lifecycle, ensuring operational safety and sustainability through the application of advanced engineering technologies and methodologies.',
    mainImage: [
      { url: '/images/sector/mining/1.jpg', location: '' },
    ],
    rightSection: {
      title: 'Mining Benefits',
      advantages: [
        'Flexibility and Adaptability',
        'Providing a long-lasting solution',
        'Drainage of Structures',
        'Erosion Control',
        'Tunnelling',
      ],
    },
    galleryImages: [
      { url: '/images/application/defence-1.jpg', title: 'Military Roads', link: 'military-roads' },
      { url: '/images/application/defence-2.jpg', title: 'Protective Barriers', link: 'barriers' },
      { url: '/images/application/defence-3.jpg', title: 'Bunker Systems', link: 'bunkers' },
      { url: '/images/application/defence-4.jpg', title: 'Field Fortifications', link: 'fortifications' }
    ]
  }
}

interface Params {
  slug: string;
}

interface PageParams {
  params: Promise<{ slug: string }>;
}

export default function SectorPage({ params }: PageParams) {
  // Use React.use to unwrap the params promise
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  // Get sector data based on slug
  const data = sectorData[slug as keyof typeof sectorData];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll effect for main image
  useEffect(() => {
    if (!Array.isArray(data?.mainImage)) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((current) => 
        current === data.mainImage.length - 1 ? 0 : current + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [data?.mainImage]);

  if (!data) return <div>Sector not found</div>;

  // Helper function to render content based on value type
  const renderContent = (key: string, value: any) => {
    if (key === 'title') return null;

    if (key === 'description') {
      return (
        <div key={key} className="mb-6">
          <p className="text-gray-800 text-base sm:text-lg">{value}</p>
        </div>
      );
    }

    if (Array.isArray(value)) {
      return (
        <div key={key} className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">{formatKey(key)}</h3>
          <ul className="space-y-3">
            {value.map((item: string, index: number) => (
              <li key={index} className="flex items-start text-gray-800 text-base sm:text-lg">
                {getContentIcon(item)}
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (typeof value === 'string') {
      return (
        <div key={key} className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="flex items-center mb-2 sm:mb-0 sm:w-1/3">
              {getContentIcon(key)}
              <span className="font-bold text-black text-base sm:text-lg whitespace-nowrap">{formatKey(key)}:</span>
            </div>
            <span className="text-gray-800 sm:ml-4 text-base sm:text-lg flex-1">{value}</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <style jsx global>{scrollbarHideStyles}</style>
      <Header />
      <div className="flex-grow w-full">
        {/* Main Image and Title Section */}
        <section className="mt-5 sm:mt-8 md:mt-10 top-20 sm:top-28 md:top-40 relative">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
              {Array.isArray(data?.mainImage) ? (
                <>
                  {data.mainImage.map((image, index) => (
                    <div key={index} className="absolute inset-0 w-full h-full transition-opacity duration-500" style={{
                      opacity: currentImageIndex === index ? 1 : 0,
                    }}>
                      <Image
                        src={image.url}
                        alt={`${data.title} - Image ${index + 1}`}
                        className="w-full h-full"
                        fill
                        priority={index === 0}
                        style={{
                          objectFit: 'contain',
                          transition: 'opacity 0.5s ease-in-out'
                        }}
                      />
                    </div>
                  ))}
                  {/* Left Arrow */}
                  <button 
                    onClick={() => setCurrentImageIndex(prev => prev === 0 ? data.mainImage.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  {/* Right Arrow */}
                  <button 
                    onClick={() => setCurrentImageIndex(prev => prev === data.mainImage.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Slider Controls */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
                    {data.mainImage.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentImageIndex === index ? 'bg-[#D84315]' : 'bg-white bg-opacity-70'}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <Image 
                  src={data?.mainImage}
                  alt={data?.title}
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            
            {/* Location Information */}
            {Array.isArray(data?.mainImage) && (
              <div className="mt-4 text-center bg-gray-50 p-3 rounded-md border border-gray-200 shadow-sm">
                <p className="text-base md:text-lg font-bold text-black">
                  <span className="font-semibold"></span> {data.mainImage[currentImageIndex].location}
                </p>
              </div>
            )}
            
            <div className="mt-8 sm:mt-10 md:mt-12 mb-16 sm:mb-24 md:mb-32">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-4 sm:mb-6 px-4">{data.title}</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-4">
                {data.description}
              </p>
            </div>
          </div>
        </section>

        {/* Single Column Features Section */}
        <div className="w-full bg-white py-12 sm:py-16 md:py-20">
          <div className="w-full border-t-2 border-[#D84315] relative">            
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="pt-12 pb-12">
                {/* Section Title */}
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 inline-flex items-center justify-center">
                    Advantages
                  </h2>
                  <div className="w-24 h-1 bg-[#D84315] mx-auto"></div>
                </div>
                
                {/* Single Column Content */}
                <div className="bg-white max-w-4xl mx-auto">
                  {/* Display advantages from rightSection */}
                  {data.rightSection && data.rightSection.advantages && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {data.rightSection.advantages.map((item: string, index: number) => (
                        <div 
                          key={index} 
                          className="flex items-start p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-[#D84315]"
                        >
                          <div className="mr-4 mt-1">
                            {getContentIcon(item)}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-800 text-lg font-medium">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Bottom border line */}
          <div className="w-full border-b-2 border-[#D84315]" style={{ marginTop: '-2px' }}></div>
        </div>

 
      </div>
      <Footer />
    </main>
  );
}
