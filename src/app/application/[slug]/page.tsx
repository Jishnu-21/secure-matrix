'use client'

import { use, useState, useEffect } from "react";
import Image from 'next/image'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { applicationData } from "@/lib/data/applications"
import { MdConstruction, MdSecurity, MdFoundation, MdPsychology, MdEco, MdVerified, MdNature } from "react-icons/md";
import { BsTools, BsShieldCheck, BsBuilding, BsGear, BsTreeFill, BsCheckCircle } from "react-icons/bs";
import { GiStonePile, GiWaterfall, GiRoad, GiBarrier, GiFencer } from "react-icons/gi";
import { FaShieldAlt, FaIndustry, FaWater, FaRoad, FaHardHat } from "react-icons/fa";

// Define types for our application data structure
type InstallationSection = {
  title: string;
  purpose?: string;
  materials?: string;
  installationSteps?: string[];
  wireMeshNetting?: {
    material: string;
    structure: string;
    features: string[];
  };
  ropeMeshNetting?: {
    material: string;
    structure: string;
    features: string[];
  };
}

type BenefitsSection = {
  title: string;
  Geotextiles_and_Geogrids?: string;
  advantages?: string[];
  benefits?: string[];
  applications?: string[];
  installationConsiderations?: string[];
}

type ApplicationData = {
  title: string;
  description: string;
  mainImage: string | string[];
  leftSection: InstallationSection;
  rightSection: BenefitsSection;
  galleryImages?: string[];
}

export default function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  // Properly unwrap params using React.use()
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const data = applicationData[slug as keyof typeof applicationData] as ApplicationData;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (Array.isArray(data.mainImage)) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === data.mainImage.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [data.mainImage]);

  if (!data) return <div>Application not found</div>

  // Helper function to format key for display
  const formatKey = (key: string) => {
    return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Helper function to render content based on value type
  const renderContent = (key: string, value: any) => {
    // Skip rendering the title key
    if (key === 'title') return null;

    // Handle description fields
    if (key === 'description') {
      return (
        <div key={key} className="mb-6">
          <p className="text-gray-800 text-base sm:text-lg">{value}</p>
        </div>
      );
    }

    // Handle nested objects with title and features/description/steps
    if (typeof value === 'object' && value !== null && 'title' in value) {
      return (
        <div key={key} className="mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">{value.title}</h3>
          {value.description && (
            <p className="text-gray-800 text-base sm:text-lg mb-4">{value.description}</p>
          )}
          {value.features && (
            <ul className="space-y-3">
              {value.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start text-gray-800 text-base sm:text-lg">
                  {feature.toLowerCase().includes('strength') || feature.toLowerCase().includes('durability') ? (
                    <MdConstruction className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // durability and strength
                  ) : feature.toLowerCase().includes('flexible') || feature.toLowerCase().includes('versatile') ? (
                    <MdPsychology className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // innovation and versatility
                  ) : feature.toLowerCase().includes('protection') || feature.toLowerCase().includes('resistant') ? (
                    <MdSecurity className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // corrosion resistance and protection
                  ) : feature.toLowerCase().includes('stability') || feature.toLowerCase().includes('foundation') ? (
                    <MdFoundation className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // structural strength and stability
                  ) : feature.toLowerCase().includes('eco') || feature.toLowerCase().includes('environment') ? (
                    <MdEco className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // eco-friendliness and sustainability
                  ) : (
                    <MdVerified className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // reliability and trust
                  )}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
          {value.steps && (
            <ul className="space-y-3 mt-4">
              {value.steps.map((step: string, index: number) => (
                <li key={index} className="flex items-start text-gray-800 text-base sm:text-lg">
                  <div className="w-6 h-6 rounded-full bg-[#D84315] text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 text-sm">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    // Handle arrays
    if (Array.isArray(value)) {
      return (
        <div key={key} className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">{formatKey(key)}</h3>
          <ul className="space-y-3">
            {value.map((item: string, index: number) => (
              <li key={index} className="flex items-start text-gray-800 text-base sm:text-lg">
                {key === 'advantages' || key === 'benefits' ? (
                  <MdVerified className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // reliability and trust
                ) : item.toLowerCase().includes('strength') || item.toLowerCase().includes('stability') ? (
                  <MdFoundation className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // structural strength and stability
                ) : item.toLowerCase().includes('eco') || item.toLowerCase().includes('environment') ? (
                  <MdEco className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // eco-friendliness and sustainability
                ) : item.toLowerCase().includes('protection') || item.toLowerCase().includes('security') ? (
                  <MdSecurity className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // corrosion resistance and protection
                ) : item.toLowerCase().includes('flexible') || item.toLowerCase().includes('adaptable') ? (
                  <MdPsychology className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // innovation and versatility
                ) : (
                  <MdConstruction className="text-[#D84315] mt-1 mr-2 flex-shrink-0" /> // durability and strength
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // Handle nested objects with multiple properties
    if (typeof value === 'object' && value !== null) {
      return (
        <div key={key} className="mb-8">
          <div className="flex items-center mb-4">
            {key.toLowerCase().includes('wire') || key.toLowerCase().includes('material') ? (
              <MdConstruction className="text-[#D84315] mr-2 flex-shrink-0" /> // durability and strength
            ) : key.toLowerCase().includes('features') || key.toLowerCase().includes('functions') ? (
              <MdPsychology className="text-[#D84315] mr-2 flex-shrink-0" /> // innovation and versatility
            ) : key.toLowerCase().includes('protection') || key.toLowerCase().includes('security') ? (
              <MdSecurity className="text-[#D84315] mr-2 flex-shrink-0" /> // corrosion resistance and protection
            ) : key.toLowerCase().includes('structure') || key.toLowerCase().includes('foundation') ? (
              <MdFoundation className="text-[#D84315] mr-2 flex-shrink-0" /> // structural strength and stability
            ) : key.toLowerCase().includes('eco') || key.toLowerCase().includes('environment') ? (
              <MdEco className="text-[#D84315] mr-2 flex-shrink-0" /> // eco-friendliness and sustainability
            ) : (
              <MdVerified className="text-[#D84315] mr-2 flex-shrink-0" /> // reliability and trust
            )}
            <h3 className="text-lg sm:text-xl font-semibold text-black">{formatKey(key)}</h3>
          </div>
          <div className="space-y-6">
            {Object.entries(value).map(([subKey, subValue]) => {
              if (subKey === 'title') return null;
              
              if (typeof subValue === 'string') {
                return (
                  <div key={subKey} className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      {subKey === 'material' ? (
                        <MdConstruction className="text-[#D84315] mr-2 flex-shrink-0" />
                      ) : subKey === 'structure' ? (
                        <MdFoundation className="text-[#D84315] mr-2 flex-shrink-0" />
                      ) : (
                        <MdVerified className="text-[#D84315] mr-2 flex-shrink-0" />
                      )}
                      <span className="font-medium text-black">{formatKey(subKey)}:</span>
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg ml-8">{subValue}</p>
                  </div>
                );
              }

              if (Array.isArray(subValue)) {
                return (
                  <div key={subKey} className="space-y-3">
                    <div className="flex items-center">
                      {subKey === 'material' ? (
                        <MdConstruction className="text-[#D84315] mr-2 flex-shrink-0" />
                      ) : subKey === 'features' ? (
                        <MdPsychology className="text-[#D84315] mr-2 flex-shrink-0" />
                      ) : (
                        <MdVerified className="text-[#D84315] mr-2 flex-shrink-0" />
                      )}
                      <span className="font-medium text-black">{formatKey(subKey)}:</span>
                    </div>
                    <ul className="ml-8 space-y-2">
                      {subValue.map((item: string, index: number) => (
                        <li key={index} className="flex items-start text-gray-800 text-base sm:text-lg">
                          {item.toLowerCase().includes('strength') || item.toLowerCase().includes('durability') ? (
                            <MdConstruction className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />
                          ) : item.toLowerCase().includes('flexible') || item.toLowerCase().includes('versatile') ? (
                            <MdPsychology className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />
                          ) : item.toLowerCase().includes('protection') || item.toLowerCase().includes('resistant') ? (
                            <MdSecurity className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />
                          ) : item.toLowerCase().includes('stability') || item.toLowerCase().includes('foundation') ? (
                            <MdFoundation className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />
                          ) : item.toLowerCase().includes('eco') || item.toLowerCase().includes('environment') ? (
                            <MdEco className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />
                          ) : (
                            <MdVerified className="text-[#D84315] mt-1 mr-2 flex-shrink-0" />
                          )}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      );
    }

    // Handle simple key-value pairs
    return (
      <div key={key} className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start">
          <div className="flex items-center mb-2 sm:mb-0">
            {key === 'function' ? (
              <MdPsychology className="text-[#D84315] mr-2 flex-shrink-0" /> // innovation and versatility
            ) : key === 'materials' ? (
              <MdConstruction className="text-[#D84315] mr-2 flex-shrink-0" /> // durability and strength
            ) : key === 'structure' ? (
              <MdFoundation className="text-[#D84315] mr-2 flex-shrink-0" /> // structural strength and stability
            ) : (
              <MdVerified className="text-[#D84315] mr-2 flex-shrink-0" /> // reliability and trust
            )}
            <span className="font-bold text-black text-base sm:text-lg">{formatKey(key)}:</span>
          </div>
          <span className="text-gray-800 sm:ml-2 text-base sm:text-lg flex-1">{value}</span>
        </div>
      </div>
    );
  };

  // Helper function to get icon based on section title
  const getSectionIcon = (title: string, size: number = 24) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('gabion box') || titleLower.includes('types')) return <MdConstruction size={size} />;
    if (titleLower.includes('fencing') || titleLower.includes('defensive')) return <MdSecurity size={size} />;
    if (titleLower.includes('strength') || titleLower.includes('structures')) return <MdFoundation size={size} />;
    if (titleLower.includes('applications')) return <MdPsychology size={size} />;
    if (titleLower.includes('benefits') || titleLower.includes('eco')) return <MdEco size={size} />;
    if (titleLower.includes('advantages')) return <MdVerified size={size} />;
    if (titleLower.includes('installation')) return <BsTools size={size} />;
    if (titleLower.includes('security')) return <BsShieldCheck size={size} />;
    if (titleLower.includes('architecture')) return <BsBuilding size={size} />;
    if (titleLower.includes('systems')) return <BsGear size={size} />;
    if (titleLower.includes('environmental')) return <BsTreeFill size={size} />;
    if (titleLower.includes('quality')) return <BsCheckCircle size={size} />;
    if (titleLower.includes('stone') || titleLower.includes('rock')) return <GiStonePile size={size} />;
    if (titleLower.includes('water') || titleLower.includes('coastal')) return <GiWaterfall size={size} />;
    if (titleLower.includes('road') || titleLower.includes('transport')) return <GiRoad size={size} />;
    if (titleLower.includes('barrier')) return <GiBarrier size={size} />;
    if (titleLower.includes('fence')) return <GiFencer size={size} />;
    if (titleLower.includes('protection')) return <FaShieldAlt size={size} />;
    if (titleLower.includes('industrial')) return <FaIndustry size={size} />;
    if (titleLower.includes('flood')) return <FaWater size={size} />;
    if (titleLower.includes('mobility')) return <FaRoad size={size} />;
    if (titleLower.includes('construction')) return <FaHardHat size={size} />;
    if (titleLower.includes('nature')) return <MdNature size={size} />;
    return <MdConstruction size={size} />; // default icon
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-grow w-full">
        {/* Main Image and Title Section */}
        <section className="mt-5 sm:mt-8 md:mt-10 top-20 sm:top-28 md:top-40 relative">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
              {Array.isArray(data.mainImage) ? (
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
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
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
                  src={data.mainImage}
                  alt={data.title}
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
          <div className="w-full border-b-2 border-[#D84315]"></div>
        </div>

        {/* Gallery Section */}
        {data.galleryImages && data.galleryImages.length > 0 && (
          <div className="w-full bg-gray-50 py-8 sm:py-12 md:py-16">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                {data.galleryImages.map((image, index) => (
                  <div key={index} className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
                    <Image
                      src={image}
                      alt={`${data.title} Gallery Image ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
