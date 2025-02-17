"use client";

import { ReactNode, useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdFactory } from 'react-icons/md';
import { BsBuildingsFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './WhyChooseUs.css';

interface ChooseCardProps {
  icon: ReactNode;
  title: string;
  description: string | ReactNode;
}

const ChooseCard = ({ icon, title, description }: ChooseCardProps) => (
  <div 
    className={`
      relative p-8 md:p-10 min-h-[320px] flex flex-col bg-white
      rounded-lg shadow-lg transition-all duration-500
      before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_40px_rgba(0,0,0,0.1)] before:z-[-1]
      hover:bg-[#DA491A] hover:scale-105 hover:shadow-xl group
      h-full
    `}
  >
    <div className="flex flex-col h-full">
      <div className="w-12 h-12 mb-6 flex items-center justify-center text-[#DA491A] group-hover:text-white transition-colors duration-500">
        <div className="text-3xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800 transition-colors duration-500 group-hover:text-white">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white/90">
        {description}
      </div>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const features = [
    {
      icon: <FaCheckCircle />,
      title: "Quality First",
      description: "Our products meet high-quality parameters of national and international standards IS2266:2019,IS16014:2018.IS17746:2016,EN10223-3:2013,BS EN10244-2:2023.With a well-equipped advanced(ISO/IEC/7025:2017)Certified in-house laboratory,we are dedicated to delivering top-notch construction materials,ensuring every project benefits from durability,safety and reliability"
    },
    {
      icon: <MdFactory />,
      title: "Manufacturing",
      description:( 
      <div className="space-y-3"> 
        <p className="text-gray-600 group-hover:text-white/90 text-sm">
          Our well-equipped manufacturing facilities allow us to produce:
        </p>

        <div className="overflow-hidden rounded-md border border-gray-200 group-hover:border-white/20">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-gray-50 group-hover:bg-white/10">
                <th className="p-2 text-left font-medium border-b border-gray-200 group-hover:border-white/20 group-hover:text-white">Product</th>
                <th className="p-2 text-left font-medium border-b border-gray-200 group-hover:border-white/20 group-hover:text-white">Lines</th>
                <th className="p-2 text-left font-medium border-b border-gray-200 group-hover:border-white/20 group-hover:text-white">Capacity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="group-hover:text-white/90">
                <td className="p-2 border-b border-gray-200 group-hover:border-white/20">Gabion Mesh 100x120</td>
                <td className="p-2 border-b border-gray-200 group-hover:border-white/20">2</td>
                <td className="p-2 border-b border-gray-200 group-hover:border-white/20" rowSpan={3}>1200MT/Month</td>
              </tr>
              <tr className="group-hover:text-white/90">
                <td className="p-2 border-b border-gray-200 group-hover:border-white/20">Gabion Mesh 80x100</td>
                <td className="p-2 border-b border-gray-200 group-hover:border-white/20">2</td>
              </tr>
              <tr className="group-hover:text-white/90">
                <td className="p-2 border-b border-gray-200 group-hover:border-white/20">Gabion Mesh 60x80</td>
                <td className="p-2 border-b border-gray-200 group-hover:border-white/20">1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-2 bg-gray-50 rounded-md text-xs font-medium group-hover:bg-white/10 group-hover:text-white">
          Rockfall Mitigation System – 50000SQM/Month
        </div>
      </div>
     ),
    },
    {
      icon: <BsBuildingsFill />,
      title: "Portfolio",
      description: (
        <>
          We offer a diverse portfolio across key sectors, including{" "}
          <span className="font-bold">Construction & Mining, Defence & Security, Agri & Farming, Coastal Defence & River Stabilization</span>.
          and <span className="font-bold"> Real Estate & Urban Development</span>.
          delivering innovative solutions for sustainable growth and resilience
        </>
      ),
    },
    {
      icon: <FaCheckCircle />,
      title: "Strong Network",
      description: "We pride ourselves on a strong global customer base, fostering excellent relationships built on trust and reliability. Our extensive dealer network ensures seamless service and accessibility. This robust framework drives customer satisfaction and long-term partnerships"
    },
    {
      icon: <MdFactory />,
      title: "Strategic Innovation",
      description: "With a proactive mindset, we create cutting-edge solutions designed to meet the demands of the industry efficiently and effectively. Our Value Analysis & Value Engineering approach (VA-VE) approach, strives us to provide innovative solutions to our customers"
    },
    {
      icon: <BsBuildingsFill />,
      title: "Excellence",
      description: " At Secure Matrix, we seamlessly blend advanced technology with operational expertise. Our approach ensures exceptional efficiency, driving innovation at every step. Through our commitment to excellence, we set industry benchmarks."
    }
  ];

  return (
    <section className="py-16 md:py-0 px-4 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
        <div
          className="w-full h-full bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: 'url("/images/dots.png")' }}
        />
      </div>

      <div className="container mx-auto max-w-[1400px]">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">Why Choose us</h2>
          <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
        </div>

        {/* Features Grid/Slider */}
        {isMobile ? (
          <div className="relative px-4">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="!pb-12"
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <ChooseCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative">
            {features.map((feature, index) => (
              <ChooseCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
