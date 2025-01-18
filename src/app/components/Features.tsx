"use client";

import Image from "next/image";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className="flex items-center gap-4 md:gap-6">
    <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F8D7CE] flex items-center justify-center">
      <Image 
        src={icon} 
        alt={title} 
        width={24} 
        height={24} 
        className="w-6 h-6 md:w-7 md:h-7 opacity-80"
      />
    </div>
    <div>
      <h3 className="text-base md:text-lg font-medium text-[#1A5632] mb-1">{title}</h3>
      <p className="text-sm text-gray-500 text-opacity-80">{description}</p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "/icons/organic.svg",
      title: "100% Organic food",
      description: "100% healthy & Fresh food."
    },
    {
      icon: "/icons/support.svg",
      title: "Great Support 24/7",
      description: "Instant access to Contact"
    },
    {
      icon: "/icons/feedback.svg",
      title: "Customer Feedback",
      description: "Our happy customer"
    },
    {
      icon: "/icons/payment.svg",
      title: "100% Sucure Payment",
      description: "We ensure your money is save"
    },
    {
      icon: "/icons/shipping.svg",
      title: "Free Shipping",
      description: "Free shipping with discount"
    },
    {
      icon: "/icons/organic-food.svg",
      title: "100% Organic Food",
      description: "100% healthy & Fresh food"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div className="lg:col-span-5">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              <Image
                src="/images/factory.png"
                alt="Factory"
                fill
                className="object-cover rounded-lg grayscale"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-7 lg:pl-8">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium mb-4">
              <span className="text-[#1A5632]">100% Trusted</span>
              <br />
              <span className="text-[#1A5632]">Organic Food Store</span>
            </h2>
            <p className="text-gray-600 text-opacity-80 mb-8 md:mb-12">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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
    </section>
  );
};

export default Features;
