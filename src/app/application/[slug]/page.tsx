'use client'

import { use } from "react";
import Image from 'next/image'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { applicationData } from "@/lib/data/applications"

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
  mainImage: string;
  leftSection: InstallationSection;
  rightSection: BenefitsSection;
  galleryImages?: string[];
}

export default function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  // Properly unwrap params using React.use()
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const data = applicationData[slug as keyof typeof applicationData] as ApplicationData;
  
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

    // Handle nested objects with title and features/description
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
                  <span className="text-[#D84315] mr-2">•</span>
                  <span>{feature}</span>
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
                <span className="text-[#D84315] mr-2">•</span>
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
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">{formatKey(key)}</h3>
          <div className="space-y-6">
            {Object.entries(value).map(([subKey, subValue]) => {
              if (subKey === 'title') return null;
              
              if (typeof subValue === 'string') {
                return (
                  <div key={subKey} className="flex flex-col space-y-2">
                    <span className="font-medium text-black">{formatKey(subKey)}:</span>
                    <p className="text-gray-800 text-base sm:text-lg ml-4">{subValue}</p>
                  </div>
                );
              }

              if (Array.isArray(subValue)) {
                return (
                  <div key={subKey} className="space-y-3">
                    <span className="font-medium text-black">{formatKey(subKey)}:</span>
                    <ul className="ml-4 space-y-2">
                      {subValue.map((item: string, index: number) => (
                        <li key={index} className="flex items-start text-gray-800 text-base sm:text-lg">
                          <span className="text-[#D84315] mr-2">•</span>
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
          <span className="font-bold text-black text-base sm:text-lg w-32">{formatKey(key)}:</span>
          <span className="text-gray-800 sm:ml-2 text-base sm:text-lg flex-1">{value}</span>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-grow w-full">
        {/* Main Image and Title Section */}
        <section className="mt-5 sm:mt-8 md:mt-10 top-20 sm:top-28 md:top-40 relative">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
              <Image 
                src={data.mainImage}
                alt={data.title}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
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
        <div className="w-full bg-white py-8 sm:py-12 md:py-16 mt-20 sm:mt-28 md:mt-40">
          <div className="w-full border-t-2 border-[#D84315] relative">
            {/* Vertical divider line - shown only on md and up */}
            <div className="absolute top-[-2px] bottom-[-2px] left-1/2 w-[2px] bg-[#D84315] hidden md:block" style={{ transform: 'translateX(-1px)' }}></div>
            
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 md:gap-0 pt-8 pb-8">
                {/* Left Column */}
                <div className="bg-white md:pr-8 lg:pr-16">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F8D7D0] flex items-center justify-center flex-shrink-0">
                      <Image
                        src={data.leftSection.title.toLowerCase().includes('fencing') ? '/icons/security.svg' :
                             data.leftSection.title.toLowerCase().includes('defensive') ? '/icons/security.svg' :
                             data.leftSection.title.toLowerCase().includes('gabion') ? '/icons/foundation.svg' :
                             data.leftSection.title.toLowerCase().includes('types') ? '/icons/construction.svg' :
                             data.leftSection.title.toLowerCase().includes('applications') ? '/icons/psychology.svg' :
                             '/icons/foundation.svg'}
                        alt={data.leftSection.title}
                        width={24}
                        height={24}
                        className="sm:w-8 sm:h-8"
                      />
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
                      <Image
                        src={data.rightSection.title.toLowerCase().includes('advantages') ? '/icons/verified.svg' :
                             data.rightSection.title.toLowerCase().includes('benefits') ? '/icons/eco.svg' :
                             data.rightSection.title.toLowerCase().includes('systems') ? '/icons/psychology.svg' :
                             data.rightSection.title.toLowerCase().includes('structures') ? '/icons/foundation.svg' :
                             '/icons/verified.svg'}
                        alt={data.rightSection.title}
                        width={24}
                        height={24}
                        className="sm:w-8 sm:h-8"
                      />
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
