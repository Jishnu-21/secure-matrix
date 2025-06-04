"use client";

import Image from "next/image";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#F8D7CE] flex items-center justify-center">
      <span className="material-icons text-[#D84315] text-2xl sm:text-3xl md:text-4xl">
        {icon}
      </span>
    </div>
    <div className="flex-1">
      <h3 className="text-base sm:text-lg font-medium text-[#D84315] mb-1">{title}</h3>
      <p className="text-sm text-gray-500 text-opacity-80 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "construction",
      title: "Durable & Long-Lasting",
      description: "Built for strength and longevity"
    },
    {
      icon: "psychology",
      title: "Innovative & Versatile",
      description: "Solutions for diverse construction needs"
    },
    {
      icon: "security",
      title: "Corrosion-Resistant",
      description: "Protected against rust and weather"
    },
    {
      icon: "foundation",
      title: "Strong & Stable",
      description: " Reinforced for structural integrity"
    },
    {
      icon: "eco",
      title: "Eco-Friendly",
      description: "Sustainable and efficient materials"
    },
    {
      icon: "verified",
      title: "Reliable & Trusted",
      description: "Quality backed by expertise"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left side - Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 h-full">
            <div className="sticky top-24 h-[500px] w-full">
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/factory.png"
                  alt="Factory"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-7 lg:pl-8 order-1 lg:order-2">
            <div className="sticky top-24">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium mb-4 leading-tight">
                <span className="text-[#1A5632]">Secure Matrix,</span>
                <br className="hidden sm:block" />
                <span className="text-[#1A5632]">Engineering the Future of Safety.</span>
              </h2>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Depth Effect */}
      <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-b from-white via-gray-50 to-gray-100/50"></div>
    </section>
  );
};

export default Features;
