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
        <section className="mt-10 mb-10 mx-auto top-40 relative">
          <div className="max-w-[1800px] mx-auto px-8">
            <div className="relative w-full h-[600px] overflow-hidden">
              <Image 
                src={data.mainImage}
                alt={data.title}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="mt-12 mb-32">
              <h1 className="text-4xl font-bold text-center text-black mb-6">{data.title}</h1>
              <p className="text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        </section>

        {/* Two Column Features Section */}
        <div className="w-full bg-white py-16 mt-40">
          <div className="w-full border-t-2 border-[#D84315] relative">
            {/* Vertical divider line - moved outside grid to touch both borders */}
            <div className="absolute top-[-2px] bottom-[-2px] left-1/2 w-[2px] bg-[#D84315] hidden md:block" style={{ transform: 'translateX(-1px)' }}></div>
            
            <div className="max-w-[1800px] mx-auto px-8">
              <div className="grid md:grid-cols-2 pt-8 pb-8">
                {/* Left Column */}
                <div className="bg-white pr-16">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#F8D7D0] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/icons/leaf.svg"
                        alt="Gabion Box"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-black mb-6">{data.leftSection.title}</h2>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="font-bold text-black text-lg">• Function: </span>
                          <span className="text-gray-800 ml-2 text-lg">{data.leftSection.purpose}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="font-bold text-black text-lg">• Materials: </span>
                          <span className="text-gray-800 ml-2 text-lg">{data.leftSection.materials}</span>
                        </div>
                        <div>
                          <span className="font-bold text-black text-lg">• Installation Steps:</span>
                          <ul className="mt-3 space-y-3">
                            {data.leftSection.installationSteps.map((step, index) => (
                              <li key={index} className="flex items-start text-gray-800 text-lg">
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
                <div className="bg-white pl-16">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#F8D7D0] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/icons/leaf.svg"
                        alt="Soil Reinforcement"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-black mb-6">{data.rightSection.title}</h2>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="font-bold text-black text-lg">• Geotextiles and Geogrids: </span>
                          <span className="text-gray-800 ml-2 text-lg">Placed between gabion layers to reinforce the backfill soil.</span>
                        </div>
                        <div>
                          <span className="font-bold text-black text-lg">• Advantages:</span>
                          <ul className="mt-3 space-y-3">
                            {data.rightSection.advantages.map((advantage, index) => (
                              <li key={index} className="text-gray-800 text-lg ml-5">• {advantage}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="font-bold text-black text-lg">• Benefits of Gabion Retaining Walls:</span>
                          <ul className="mt-3 space-y-3">
                            {data.rightSection.benefits.map((benefit, index) => (
                              <li key={index} className="text-gray-800 text-lg ml-5">• {benefit}</li>
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
        <div className="w-full bg-gray-50 py-16">
          <h1 className='text-2xl font-bold text-center text-black mb-8'>Applications</h1>
          <div className="max-w-[1800px] mx-auto px-8">
            {data.galleryImages.length > 3 ? (
              <div className="gallery-container cursor-grab active:cursor-grabbing">
                <Slider {...sliderSettings} className="gallery-slider">
                  {data.galleryImages.map((image, index) => (
                    <div key={index} className="px-4">
                      <Link href={`/application/${image.link || ''}`} className="block relative h-[400px] w-full transition-transform duration-300 hover:scale-[1.02]">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.galleryImages.map((image, index) => (
                  <Link 
                    key={index} 
                    href={`/application/${image.link || ''}`}
                    className="block relative h-[400px] transition-transform duration-300 hover:scale-[1.02]"
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
