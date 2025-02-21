'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./carousel.css"

// Application data
const sectorData = {
  'construction-mining': {
    title: 'Construction & Mining',
    description: 'A gabion box is a wire mesh container filled with stones, used in construction for soil stabilization, erosion control, and retaining walls. Combined with geotextiles and soil reinforcement, it provides stability and protection from failure.',
    mainImage: '/images/application/image.png',
    leftSection: {
      title: 'Gabion Box for Retaining Walls',
      purpose: 'Provides a gravity-based retaining structure using fill materials',
      materials: 'Hot-dip or epoxy mesh filled with rocks or stones',
      installationSteps: [
        'Excavate the site for proper or level base',
        'Place and align gabion boxes with proper orientation',
        'Assemble and position gabion boxes',
        'Fill them with stones, ensuring optimal voids',
        'Secure and tighten the mesh covers',
        'Backfill with compact soil behind the wall'
      ]
    },
    rightSection: {
      title: 'Soil Reinforcement with Gabion Boxes',
      advantages: [
        'Increases soil stability',
        'Reduces pressure on the retaining wall',
        'Prevents soil erosion'
      ],
      benefits: [
        'Environmentally friendly (use of natural materials)',
        'Durable and long-lasting',
        'Flexible yet strong structure',
        'Natural drainage through stone voids',
        'Cost-effective compared to concrete walls'
      ]
    },
    galleryImages: [
      { url: '/images/application/product.png', title: 'Gallery Image 1', link: 'retaining-wall' },
      { url: '/images/application/product.png', title: 'Gallery Image 2', link: 'retaining-wall' },
      { url: '/images/application/product.png', title: 'Gallery Image 3', link: 'retaining-wall' },
      { url: '/images/application/product.png', title: 'Gallery Image 3', link: 'retaining-wall' },
      { url: '/images/application/product.png', title: 'Gallery Image 3', link: 'retaining-wall' },
    ]
  },
  'infrastructure': {
    title: 'Infrastructure',
    description: 'Advanced river protection solutions utilizing gabion technology for effective erosion control and bank stabilization while maintaining natural water flow.',
    mainImage: '/images/application/image.png',
    leftSection: {
      title: 'Infrastructure System',
      purpose: 'Provides effective erosion control and bank stabilization',
      materials: 'Gabion boxes with specific stone sizing for water flow',
      installationSteps: [
        'Survey and analyze river flow patterns',
        'Prepare riverbank foundation',
        'Install geotextile membrane',
        'Place and secure gabion boxes',
        'Fill with appropriately sized stones',
        'Integrate with existing bank structure'
      ]
    },
    rightSection: {
      title: 'Benefits of River Protection',
      advantages: [
        'Controls river bank erosion',
        'Maintains natural water flow',
        'Protects surrounding infrastructure'
      ],
      benefits: [
        'Natural integration with environment',
        'Allows vegetation growth',
        'High durability in water conditions',
        'Flexible structure adapts to ground movement',
        'Cost-effective long-term solution'
      ]
    },
    galleryImages: [
      { url: '/images/application/product.png', title: 'Gallery Image 1', link: 'infrastructure' },
      { url: '/images/application/product.png', title: 'Gallery Image 2', link: 'infrastructure' },
      { url: '/images/application/product.png', title: 'Gallery Image 3', link: 'infrastructure' },
    ]
  },
  'environmental': {
    title: 'Environmental Protection',
    description: 'Advanced river protection solutions utilizing gabion technology for effective erosion control and bank stabilization while maintaining natural water flow.',
    mainImage: '/images/application/image.png',
    leftSection: {
      title: 'Environmental Protection System',
      purpose: 'Provides effective erosion control and bank stabilization',
      materials: 'Gabion boxes with specific stone sizing for water flow',
      installationSteps: [
        'Survey and analyze river flow patterns',
        'Prepare riverbank foundation',
        'Install geotextile membrane',
        'Place and secure gabion boxes',
        'Fill with appropriately sized stones',
        'Integrate with existing bank structure'
      ]
    },
    rightSection: {
      title: 'Benefits of Environmental Protection',
      advantages: [
        'Controls river bank erosion',
        'Maintains natural water flow',
        'Protects surrounding infrastructure'
      ],
      benefits: [
        'Natural integration with environment',
        'Allows vegetation growth',
        'High durability in water conditions',
        'Flexible structure adapts to ground movement',
        'Cost-effective long-term solution'
      ]
    },
    galleryImages: [
      { url: '/images/application/product.png', title: 'Gallery Image 1', link: 'environmental' },
      { url: '/images/application/product.png', title: 'Gallery Image 2', link: 'environmental' },
      { url: '/images/application/product.png', title: 'Gallery Image 3', link: 'environmental' },
    ]
  }
}

type Params = {
  slug: string
}

type PageParams = {
  params: Params
}

export default function SectorPage({ params }: PageParams) {
  const slug = params.slug
  const data = sectorData[slug as keyof typeof sectorData]

  if (!data) return <div>Sector not found</div>

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-grow w-full">
        {/* Main Image and Title Section */}
        <section className="mt-5 sm:mt-8 md:mt-10 top-20 sm:top-28 md:top-40 relative">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
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
            {/* Vertical divider line */}
            <div className="absolute top-[-2px] bottom-[-2px] left-1/2 w-[2px] bg-[#D84315] hidden md:block" style={{ transform: 'translateX(-1px)' }}></div>
            
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 md:gap-0 pt-8 pb-8">
                {/* Left Column */}
                <div className="bg-white md:pr-8 lg:pr-16">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F8D7D0] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/icons/leaf.svg"
                        alt="Gabion Box"
                        width={24}
                        height={24}
                        className="sm:w-8 sm:h-8"
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">{data.leftSection.title}</h2>
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start">
                          <span className="font-bold text-black text-base sm:text-lg">• Function: </span>
                          <span className="text-gray-800 sm:ml-2 text-base sm:text-lg">{data.leftSection.purpose}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-start">
                          <span className="font-bold text-black text-base sm:text-lg">• Materials: </span>
                          <span className="text-gray-800 sm:ml-2 text-base sm:text-lg">{data.leftSection.materials}</span>
                        </div>
                        <div>
                          <span className="font-bold text-black text-base sm:text-lg">• Installation Steps:</span>
                          <ul className="mt-3 space-y-3">
                            {data.leftSection.installationSteps.map((step, index) => (
                              <li key={index} className="flex items-start text-gray-800 text-base sm:text-lg">
                                <span className="mr-3 font-medium">{index + 1}.</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="bg-white md:pl-8 lg:pl-16">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F8D7D0] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/icons/leaf.svg"
                        alt="Soil Reinforcement"
                        width={24}
                        height={24}
                        className="sm:w-8 sm:h-8"
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">{data.rightSection.title}</h2>
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start">
                          <span className="font-bold text-black text-base sm:text-lg">• Geotextiles and Geogrids: </span>
                          <span className="text-gray-800 sm:ml-2 text-base sm:text-lg">Placed between gabion layers to reinforce the backfill soil.</span>
                        </div>
                        <div>
                          <span className="font-bold text-black text-base sm:text-lg">• Advantages:</span>
                          <ul className="mt-3 space-y-3">
                            {data.rightSection.advantages.map((advantage, index) => (
                              <li key={index} className="text-gray-800 text-base sm:text-lg ml-5">• {advantage}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="font-bold text-black text-base sm:text-lg">• Benefits of Gabion Retaining Walls:</span>
                          <ul className="mt-3 space-y-3">
                            {data.rightSection.benefits.map((benefit, index) => (
                              <li key={index} className="text-gray-800 text-base sm:text-lg ml-5">• {benefit}</li>
                            ))}
                          </ul>
                        </div>
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
        <div className="w-full bg-gray-50 py-8 sm:py-12 md:py-16">
          <h1 className="text-xl sm:text-2xl font-bold text-center text-black mb-6 sm:mb-8">Applications</h1>
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
            {data.galleryImages.length > 3 ? (
              <div className="gallery-container cursor-grab active:cursor-grabbing">
                <Slider {...sliderSettings} className="gallery-slider">
                  {data.galleryImages.map((image, index) => (
                    <div key={index} className="px-2 sm:px-4">
                      <Link href={`/application/${image.link || ''}`} className="block relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full transition-transform duration-300 hover:scale-[1.02]">
                        <Image
                          src={image.url}
                          alt={image.title || `Gallery image ${index + 1}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                        />
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {data.galleryImages.map((image, index) => (
                  <Link 
                    key={index} 
                    href={`/application/${image.link || ''}`}
                    className="block relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <Image
                      src={image.url}
                      alt={image.title || `Gallery image ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
