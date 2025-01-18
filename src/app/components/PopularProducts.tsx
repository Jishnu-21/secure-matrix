"use client";

import Image from "next/image";

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  description: string[];
  author: string;
  role: string;
}

const ProductCard = ({ image, category, title, description, author, role }: ProductCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Left side - Image */}
      <div className="relative h-[450px] md:h-[700px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="p-8 md:p-12 flex flex-col justify-between h-[450px] md:h-[700px]">
        <div className="space-y-6">
          <span className="text-sm text-gray-500 uppercase tracking-wider block">
            {category}
          </span>
          <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
            {title}
          </h3>
          <div className="space-y-6">
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 text-sm md:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div className="font-medium text-gray-900 text-lg">{author}</div>
          <div className="text-sm text-gray-500 mt-1">{role}</div>
        </div>
      </div>
    </div>
  </div>
);

const PopularProducts = () => {
  const products = [
    {
      image: "/images/popular.png",
      category: "NOTRE ENGAGEMENT POUR LA CROISSANCE",
      title: "Externalisation Commerciale, le Levier de votre Expansion",
      description: [
        "Chez CRO, notre déclaration est ancrée dans 25 années d'expérience dédiées à la relation commerciale à distance.",
        "Notre objectif ? Mettre à profit nos compétences et notre expertise client pour répondre à vos exigences en matière de services télémarketing et téléprospection B2B.",
        "En tant que partenaire essentiel, nous nous engageons à écouter, veiller, identifier, détecter, et contribuer à votre business en apportant de vrais leads. Optez pour Bizdev.store et propulsez votre entreprise vers de nouveaux horizons de croissance."
      ],
      author: "Olivier Moula",
      role: "CEO"
    },

  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background pattern */}
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
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">Most Popular Products</h2>
          <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="w-full">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
            />
          ))}
        </div>

        {/* Navigation Indicators */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {[0, 1, 2, 3, 4].map((_, index) => (
            <button
              key={index}
              className={`h-[3px] transition-all duration-300 ${
                index === 0 
                  ? 'w-8 bg-[#DA491A]' 
                  : 'w-4 bg-gray-300 hover:bg-[#DA491A]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
