"use client";

import Image from "next/image";

interface ChooseCardProps {
  icon: string;
  title: string;
  description: string;
}

const ChooseCard = ({ icon, title, description }: ChooseCardProps) => (
  <div 
    className={`
      relative p-8 md:p-10 min-h-[320px] flex flex-col bg-white
      rounded-lg shadow-lg transition-all duration-300
      before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_40px_rgba(0,0,0,0.1)] before:z-[-1]
      hover:bg-[#DA491A] group
    `}
  >
    <div className="flex flex-col h-full">
      <div className="w-12 h-12 mb-6 flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="w-8 h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800 transition-colors duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/90">
        {description}
      </p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: "/icons/expertise.svg",
      title: "Expertise B2B",
      description: "Nous mettons à votre disposition 25 années d'expérience dans la relation commerciale à distance pour garantir des services télémarketing B2B exceptionnels."
    },
    {
      icon: "/icons/strategy.svg",
      title: "Stratégie Personnalisée",
      description: "Chaque client bénéficie d'une stratégie personnalisée, élaborée selon ses besoins spécifiques en prospection, fidélisation et développement commercial."
    },
    {
      icon: "/icons/human.svg",
      title: "Approche Humaine",
      description: "Notre agence privilégie l'humain, créant ainsi des interactions personnelles et durables entre votre entreprise et vos clients."
    },
    {
      icon: "/icons/expertise.svg",
      title: "Expertise B2B",
      description: "Nous mettons à votre disposition 25 années d'expérience dans la relation commerciale à distance pour garantir des services télémarketing B2B exceptionnels."
    },
    {
      icon: "/icons/strategy.svg",
      title: "Stratégie Personnalisée",
      description: "Chaque client bénéficie d'une stratégie personnalisée, élaborée selon ses besoins spécifiques en prospection, fidélisation et développement commercial."
    },
    {
      icon: "/icons/human.svg",
      title: "Approche Humaine",
      description: "Notre agence privilégie l'humain, créant ainsi des interactions personnelles et durables entre votre entreprise et vos clients."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
        <Image
          src="/images/dots.png"
          alt="Background pattern"
          width={160}
          height={160}
        />
      </div>

      <div className="container mx-auto max-w-[1400px]">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">Why Choose us</h2>
          <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {features.map((feature, index) => (
            <ChooseCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
