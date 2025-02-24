"use client";

import { useEffect, useState, use } from 'react';
import Image from "next/image";
import { categories } from "@/lib/data/categories";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function ProductPage({ params }: { params: Promise<{ categoryId: string; productId: string }> }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Properly unwrap params using React.use()
  const resolvedParams = use(params);
  
  // Find the product from categories data
  const category = categories.find(cat => cat.id === resolvedParams.categoryId);
  const product = category?.products.find(prod => prod.id === resolvedParams.productId);

  if (!product) return <div>Product not found</div>;

  // Auto slide images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === (product.imagePath.length - 1) ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [product.imagePath.length]);

  return (
   <main className="min-h-screen flex flex-col bg-white">
    <Header/>
      <div className="flex-grow w-full">
        {/* Main Image and Title Section */}
        <section className="mt-5 sm:mt-8 md:mt-10 top-20 sm:top-28 md:top-40 relative">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center">
              <Image 
                src={product.imagePath[currentImageIndex]}
                alt={product.title}
                fill
                priority
                style={{ objectFit: 'fill' }}
                className="!relative !h-auto !w-auto max-h-[600px]"
              />
            </div>
            <div className="mt-8 sm:mt-10 md:mt-12 mb-16 sm:mb-24 md:mb-32">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-4 sm:mb-6 px-4">
                {product.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-4">
                {product.shortDescription}
              </p>
              {/* Add Pricing Section */}
              <div className="mt-6 text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D84315]">
                  {product.price} {product.priceUnit}
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <button className="bg-[#D84315] text-white px-6 py-3 rounded-md hover:bg-[#BF360C] transition-colors">
                    Send Inquiry
                  </button>
                  <button className="border-2 border-[#D84315] text-[#D84315] px-6 py-3 rounded-md hover:bg-[#D84315] hover:text-white transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Features Section */}
        <div className="w-full bg-white py-8 sm:py-12 md:py-16 mt-20 sm:mt-28 md:mt-40">
          <div className="w-full border-t-2 border-[#D84315] relative">
            <div className="absolute top-[-2px] bottom-[-2px] left-1/2 w-[2px] bg-[#D84315] hidden md:block" 
                 style={{ transform: 'translateX(-1px)' }}></div>
            
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 md:gap-0 pt-8 pb-8">
                {/* Left Column */}
                <div className="bg-white md:pr-8 lg:pr-16">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F8D7D0] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/icons/leaf.svg"
                        alt="Product Features"
                        width={24}
                        height={24}
                        className="sm:w-8 sm:h-8"
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Product Features</h2>
                      <div className="space-y-4">
                        {product.productDetails?.map((detail, index) => (
                          <div key={index} className="flex flex-col sm:flex-row sm:items-start">
                            <span className="font-bold text-black text-base sm:text-lg">• {detail.key}: </span>
                            <span className="text-gray-800 sm:ml-2 text-base sm:text-lg">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
                
                {/* Mobile Horizontal Line */}
                <div className="w-full h-[2px] bg-[#D84315] md:hidden my-8"></div>

                {/* Right Column */}
                <div className="bg-white md:pl-8 lg:pl-16">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F8D7D0] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/icons/leaf.svg"
                        alt="Specifications"
                        width={24}
                        height={24}
                        className="sm:w-8 sm:h-8"
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Specifications & Trade Information</h2>
                      <div className="space-y-4">
                        {product.specifications?.map((spec, index) => (
                          <div key={index} className="flex flex-col sm:flex-row sm:items-start">
                            <span className="font-bold text-black text-base sm:text-lg">• {spec.key}: </span>
                            <span className="text-gray-800 sm:ml-2 text-base sm:text-lg">{spec.value}</span>
                          </div>
                        ))}
                        {/* Trade Information */}
                        <div className="pt-6 border-t border-gray-200">
                          <h3 className="text-lg font-semibold mb-4">Trade Information</h3>
                          {product.tradeInformation?.map((info, index) => (
                            <div key={index} className="flex flex-col sm:flex-row sm:items-start mb-3">
                              <span className="font-bold text-black text-base sm:text-lg">• {info.key}: </span>
                              <span className="text-gray-800 sm:ml-2 text-base sm:text-lg">{info.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-t-2 border-[#D84315] relative">
            </div>
          </div>
        </div>
      </div>
      {/* Enquiry Form Section with better margins */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="bg-gray-100 rounded-lg p-6 md:p-8 lg:p-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Enter Buying Requirement Details</h2>
          <form className="space-y-4 md:space-y-6 max-w-[90%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-[#D84315] focus:ring-1 focus:ring-[#D84315] outline-none transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-[#D84315] focus:ring-1 focus:ring-[#D84315] outline-none transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                <input type="tel" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-[#D84315] focus:ring-1 focus:ring-[#D84315] outline-none transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-[#D84315] focus:ring-1 focus:ring-[#D84315] outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Requirement Details *</label>
              <textarea rows={4} className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-[#D84315] focus:ring-1 focus:ring-[#D84315] outline-none transition-colors text-base" required placeholder="Please describe your requirements in detail..."></textarea>
            </div>
            <div className="flex justify-center mt-8">
              <button type="submit" className="bg-[#D84315] text-white px-12 py-3 rounded-md hover:bg-[#BF360C] transition-colors text-lg font-medium">
                Submit Requirement
              </button>
            </div>
          </form>
        </div>
        </div>
        
      <Footer/>
    </main>
  );
}