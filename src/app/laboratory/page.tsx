'use client'

import Image from 'next/image'
import Header from "../components/Header"
import Footer from "../components/Footer"

const laboratoryServices = [
  {
    title: "MESH TENSILE TESTING M/C",
    description: "Should debris loss mass stopping be strongly. Building can while dirt in the natural earth slope. But we were worried. Carefully and intensively with fast-track time, nature as high level. It means we can make it happen. Carefully and intensively with fast-track time, nature as high level. It means we can make it happen. We can make it happen. We can make it happen. We can make it happen. We can make it happen.",
    image: "/images/laboratory/image(6).png",
    features: [
      "To test the tensile strength of the Protection Mesh for Environmental protection",
      "Speed and deformation while test applied on cross section",
      "Test the environmental strength like Protection mesh"
    ]
  },
  {
    title: "WIRE ROPE TENSILE TESTING M/C",
    description: "Should debris loss mass stopping be strongly. Building can while dirt in the natural earth slope. But we were worried. Carefully and intensively with fast-track time, nature as high level. It means we can make it happen. We can make it happen. We can make it happen.",
    image: "/images/laboratory/image(6).png",
    features: [
      "Test parameters reference to Safety test and civil engineering",
      "Speed and deformation while test applied",
      "Test breaking force with UTM Standard"
    ]
  },
  {
    title: "PUNCH TESTING M/C",
    description: "Testing points vary what service what test strength. Building can while dirt in the natural earth slope. But we were worried. Carefully and intensively with fast-track time, nature as high level. It means we can make it happen.",
    image: "/images/laboratory/image(6).png",
    features: [
      "To test the tensile strength of the Protection Mesh for Environmental protection",
      "Test parameters reference to Safety test and civil engineering",
      "Test breaking force with UTM Standard"
    ]
  }
]

export default function LaboratoryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAFA]">
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: 'url("/images/hex-pattern.png")',
            backgroundSize: '800px',
            backgroundRepeat: 'repeat',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
        />
        <div className="relative z-10 mt-24 sm:mt-8 md:mt-10 top-20 sm:top-28 md:top-40 pb-20 sm:pb-32 md:pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {laboratoryServices.map((service, index) => (
                <div key={service.title}>
                  <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#333] mb-3 sm:mb-4 text-center px-4">{service.title}</h2>
                    <div className="w-12 sm:w-16 h-1 bg-[#D84315]"></div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className="w-full lg:w-[40%] relative">
                        <div className="aspect-w-16 aspect-h-12 sm:aspect-h-10 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-[60%] p-6 sm:p-8 md:p-10 lg:p-12">
                        <p className="text-black font-bold text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed">{service.description}</p>
                        <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                              <span className="text-[#D84315] text-2xl sm:text-3xl mt-1 flex-shrink-0">•</span>
                              <span className="text-[#666] text-base sm:text-lg md:text-xl flex-1 leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="pt-10 sm:pt-16 md:pt-20 bg-[#FAFAFA]">
        <Footer />
      </div>
    </>
  )
}
