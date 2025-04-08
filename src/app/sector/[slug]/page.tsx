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
  'agriculture-farming': {
    title: 'Agriculture & Farming',
    description: 'Geosynthetics play a pivotal role in Agriculture by enhancing soil stability, improving drainage, and preventing erosion. Our advanced solutions help increase agricultural productivity while promoting sustainable farming practices.',
    mainImage: [
      '/images/sector/agriculture/1.jpg',
      '/images/sector/agriculture/2.jpg',
      '/images/sector/agriculture/3.jpg',
      '/images/sector/agriculture/4.jpg'
    ],
    leftSection: {
      title: 'Agricultural Applications',
      purpose: 'Enhances soil stability and improves drainage systems',
      materials: 'Synthetic polymers (polyester, polyethylene, polypropylene) in woven, non-woven, and knitted forms',
      installationSteps: [
        'Clear area of vegetation and debris, level the ground',
        'Measure and cut geosynthetic material with overlap allowance',
        'Lay material on prepared surface with proper alignment',
        'Secure edges using staples, pins, or burial method',
        'Add and distribute soil/aggregate evenly',
        'Compact covering material to specified density'
      ]
    },
    rightSection: {
      title: 'Agricultural Benefits',
      advantages: [
        'Improves load-bearing capacity of soil',
        'Facilitates efficient water movement',
        'Protects against wind and water erosion',
        'Reduces traditional stabilization costs',
        'Maintains soil integrity'
      ],
      benefits: [
        'Increased Agricultural Productivity',
        'Enhanced Soil Stability',
        'Improved Drainage Systems',
        'Environmental Sustainability',
        'Cost-Effective Solutions'
      ]
    },
    galleryImages: [
      { url: '/images/application/agri-1.jpg', title: 'Soil Stabilization', link: 'soil-stabilization' },
      { url: '/images/application/agri-2.jpg', title: 'Drainage Systems', link: 'drainage-systems' },
      { url: '/images/application/agri-3.jpg', title: 'Erosion Control', link: 'erosion-control' },
      { url: '/images/application/agri-4.jpg', title: 'Terrace Farming', link: 'terrace-farming' },
      { url: '/images/application/agri-5.jpg', title: 'Water Management', link: 'water-management' },
    ]
  },
  'construction-mining': {
    title: 'Construction & Mining',
    description: 'Geosynthetics are widely used in construction and mining for soil stabilization, erosion control, drainage, and reinforcement. Their application enhances the durability and efficiency of structures while reducing costs.',
    mainImage: [
      '/images/sector/construction/1.jpg',
      '/images/sector/construction/2.jpg',
      '/images/sector/construction/3.jpg',
      '/images/sector/construction/4.jpg'
    ],
    leftSection: {
      title: 'Construction Applications',
      purpose: 'Enhances structural stability and soil reinforcement',
      materials: 'Polypropylene (PP), Polyester (PET), Polyethylene (PE), PVC for various applications',
      installationSteps: [
        'Clear debris, level the ground, and prepare the subgrade',
        'Cut geotextiles or geogrids to required dimensions',
        'Lay geosynthetic material with proper overlaps',
        'Secure material with pins, staples, or weights',
        'Add and compact soil, gravel, or aggregate layers',
        'Ensure proper drainage and stability'
      ]
    },
    rightSection: {
      title: 'Construction Benefits',
      advantages: [
        'Strengthens weak soils',
        'Supports heavy machinery loads',
        'Reduces material expenses',
        'Prevents clogging and erosion',
        'Increases structure lifespan'
      ],
      benefits: [
        'Safer Construction Sites',
        'Cost-Effective Solutions',
        'Environmental Protection',
        'Longevity of Infrastructure'
      ]
    },
    galleryImages: [
      { url: '/images/application/const-1.jpg', title: 'Soil Reinforcement', link: 'soil-reinforcement' },
      { url: '/images/application/const-2.jpg', title: 'Mining Applications', link: 'mining' },
      { url: '/images/application/const-3.jpg', title: 'Road Construction', link: 'roads' },
      { url: '/images/application/const-4.jpg', title: 'Foundation Work', link: 'foundations' }
    ]
  },
  'coastal-defence': {
    title: 'Coastal Defence & River Water Stabilization',
    description: 'Geosynthetics play a crucial role by preventing erosion, reinforcing embankments, and improving water flow management. These materials enhance durability, reduce maintenance costs, and provide long-term solutions to environmental challenges.',
    mainImage: [
      '/images/sector/coastal/1.jpg',
      '/images/sector/coastal/2.jpg',
      '/images/sector/coastal/3.jpg',
      '/images/sector/coastal/4.jpg',
      '/images/sector/coastal/5.jpg',
      '/images/sector/coastal/6.jpg',
      '/images/sector/coastal/7.jpg',
      '/images/sector/coastal/8.jpg',
    ],
    leftSection: {
      title: 'Coastal Protection Systems',
      purpose: 'Prevents shoreline erosion and reinforces water management structures',
      materials: 'Geotextiles (Woven & Non-Woven), Geogrids, Geomembranes, Geobags & Geotubes',
      installationSteps: [
        'Clear debris and level surface along coastline',
        'Lay geotextiles for separation and filtration',
        'Secure material with weights or anchors',
        'Place geogrids in reinforcement areas',
        'Fill geobags with sand or soil',
        'Compact materials and ensure alignment'
      ]
    },
    rightSection: {
      title: 'Coastal Defence Benefits',
      advantages: [
        'Protects shorelines from waves',
        'Reinforces levees and embankments',
        'Reduces sediment displacement',
        'Minimizes hard structures',
        'Supports natural ecosystems'
      ],
      benefits: [
        'Long-Term Protection',
        'Reduced Maintenance Costs',
        'Improved Water Flow Regulation',
        'Resilient Against Climate Change',
        'Aesthetic and Ecological Balance'
      ]
    },
    galleryImages: [
      { url: '/images/application/coastal-1.jpg', title: 'Shoreline Protection', link: 'shoreline' },
      { url: '/images/application/coastal-2.jpg', title: 'River Management', link: 'river' },
      { url: '/images/application/coastal-3.jpg', title: 'Erosion Control', link: 'erosion' },
      { url: '/images/application/coastal-4.jpg', title: 'Embankment Protection', link: 'embankment' }
    ]
  },
  'real-estate': {
    title: 'Real Estate and Urban Development',
    description: 'Geosynthetics play a vital role in enhancing soil stability, drainage, and sustainability in urban development. They are used in roads, building foundations, landscaping, and drainage systems, ensuring long-term durability and cost-effectiveness.',
    mainImage: [
      '/images/sector/realestate/1.jpg',
      '/images/sector/realestate/2.jpg',
      '/images/sector/realestate/3.jpg',
      '/images/sector/realestate/4.jpg',
      '/images/sector/realestate/5.jpg',
      '/images/sector/realestate/6.jpg',
      '/images/sector/realestate/7.jpg',
      '/images/sector/realestate/8.jpg',
      '/images/sector/realestate/9.jpg',
      '/images/sector/realestate/10.jpg'    
    ],
    leftSection: {
      title: 'Urban Development Applications',
      purpose: 'Enhances infrastructure stability and sustainability',
      materials: 'Geotextiles, Geogrids, Geomembranes, Geocells, Drainage Geocomposites',
      installationSteps: [
        'Clear area and level the ground',
        'Lay geotextiles for separation',
        'Position geogrids for reinforcement',
        'Add and compact fill materials',
        'Install drainage systems',
        'Ensure proper alignment'
      ]
    },
    rightSection: {
      title: 'Urban Development Benefits',
      advantages: [
        'Prevents soil erosion',
        'Strengthens infrastructure',
        'Ensures efficient drainage',
        'Reduces maintenance costs',
        'Supports green initiatives'
      ],
      benefits: [
        'Sustainable Urban Growth',
        'Eco-Friendly Solutions',
        'Cost-Effective Construction',
        'Enhanced Safety & Stability',
        'Aesthetic & Functional Integration'
      ]
    },
    galleryImages: [
      { url: '/images/application/urban-1.jpg', title: 'Road Construction', link: 'roads' },
      { url: '/images/application/urban-2.jpg', title: 'Building Foundations', link: 'foundations' },
      { url: '/images/application/urban-3.jpg', title: 'Drainage Systems', link: 'drainage' },
      { url: '/images/application/urban-4.jpg', title: 'Green Spaces', link: 'green-spaces' }
    ]
  },
  'defence': {
    title: 'Defence and Security',
    description: 'Geosynthetics play a crucial role in enhancing fortifications, military infrastructure, and protective barriers. These materials provide rapid deployment solutions for military bases, bunkers, roads, and flood control, ensuring protection, durability, and operational efficiency.',
    mainImage: [
      '/images/sector/defence/1.jpg',
      '/images/sector/defence/2.jpg',
      '/images/sector/defence/3.jpg',
      '/images/sector/defence/4.jpg',
      '/images/sector/defence/5.jpg',
      '/images/sector/defence/6.jpg',
      '/images/sector/defence/7.jpg',
      '/images/sector/defence/8.jpg',
    ],
    leftSection: {
      title: 'Military Applications',
      purpose: 'Reinforces military infrastructure and protective barriers',
      materials: 'Geotextiles, Geogrids, Geomembranes, Geocells, Ballistic Geosynthetics',
      installationSteps: [
        'Clear area for construction',
        'Deploy geotextiles for stabilization',
        'Install geogrids for reinforcement',
        'Backfill and compact layers',
        'Apply waterproofing materials',
        'Install protective barriers'
      ]
    },
    rightSection: {
      title: 'Defence Benefits',
      advantages: [
        'Quick installation capability',
        'High mobility and transportability',
        'Extreme condition resistance',
        'Enhanced blast protection',
        'Cost-effective solutions'
      ],
      benefits: [
        'Stronger Military Infrastructure',
        'Increased Safety for Personnel',
        'Sustainable & Low Maintenance',
        'Tactical Advantage',
        'Versatile Application'
      ]
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
                    <Image
                      key={index}
                      src={image}
                      alt={`${data.title} ${index + 1}`}
                      fill
                      priority={index === 0}
                      style={{
                        objectFit: 'cover',
                        opacity: currentImageIndex === index ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out'
                      }}
                    />
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
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {data.mainImage.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          currentImageIndex === index ? 'bg-[#D84315]' : 'bg-white bg-opacity-50'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
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
            <div className="mt-8 sm:mt-10 md:mt-12 mb-16 sm:mb-24 md:mb-32">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-4 sm:mb-6 px-4">{data.title}</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-4">
                {data.description}
              </p>
            </div>
          </div>
        </section>

        {/* Two Column Features Section */}
        <div className="w-full bg-white py-8 sm:py-12 md:py-16">
          <div className="w-full border-t-2 border-[#D84315] relative">
            {/* Vertical divider line - shown only on md and up */}
            <div className="absolute top-[-2px] bottom-[-2px] left-1/2 w-[2px] bg-[#D84315] hidden md:block" style={{ transform: 'translateX(-1px)' }}></div>
            
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 md:gap-0 pt-8 pb-8">
                {/* Left Column */}
                <div className="bg-white md:pr-8 lg:pr-16">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F8D7D0] flex items-center justify-center flex-shrink-0">
                      {getSectionIcon(data.leftSection.title, 32)}
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">{data.leftSection.title}</h2>
                      <div className="space-y-4">
                        {Object.entries(data.leftSection)
                          .filter(([key]) => key !== 'title')
                          .map(([key, value]) => renderContent(key, value))}
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="md:hidden border-t-2 border-gray-200 my-4 mx-2" />

                {/* Right Column */}
                <div className="bg-white md:pl-8 lg:pl-16">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F8D7D0] flex items-center justify-center flex-shrink-0">
                      {getSectionIcon(data.rightSection.title, 32)}
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">{data.rightSection.title}</h2>
                      <div className="space-y-4">
                        {Object.entries(data.rightSection)
                          .filter(([key]) => key !== 'title')
                          .map(([key, value]) => renderContent(key, value))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom border line */}
          <div className="w-full border-b-2 border-[#D84315]" style={{ marginTop: '-2px' }}></div>
        </div>

        {/* Gallery Section */}
        {data.galleryImages && data.galleryImages.length > 0 && (
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Applications</h2>
              <div className="relative">
                <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                  <div className="flex gap-6 sm:gap-8 mx-auto">
                    {data.galleryImages.map((image, index) => (
                      <Link 
                        key={index} 
                        href={`/applications/${image.link}`} 
                        className="group flex-none w-[calc(33.333%-16px)] min-w-[280px] max-w-[400px]"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                          <Image
                            src={image.url}
                            alt={image.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-white text-lg sm:text-xl font-semibold text-center px-4">{image.title}</h3>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Scroll indicators */}
                {data.galleryImages.length > 3 && (
                  <>
                    <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-gray-50 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-gray-50 pointer-events-none"></div>
                  </>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
