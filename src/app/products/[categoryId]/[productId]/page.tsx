'use client'

import { categories } from '@/lib/data/categories'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import { use } from 'react'

interface PageProps {
  params: Promise<{
    categoryId: string
    productId: string
  }>
}

export default function ProductPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const category = categories.find((c) => c.id === resolvedParams.categoryId)
  const product = category?.products?.find((p) => p.id === resolvedParams.productId)

  if (!category || !product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="bg-[#FAFAFA] relative min-h-screen">
        {/* Background Pattern */}
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

        {/* Content */}
        <div className="relative z-20 pt-40 pb-20">
          <div className="container mx-auto max-w-[80%] px-4">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-8">
              <span>{category.title}</span>
              <span className="mx-2">/</span>
              <span className="text-[#D84315]">{product.title}</span>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Image */}
                <div className="relative group">
                  <div className="h-[400px] lg:h-[600px] overflow-hidden">
                    <Image
                      src={product.imagePath}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Right Column - Product Details */}
                <div className="p-8">
                  <h1 className="text-3xl font-semibold text-gray-900 mb-4 hover:text-[#D84315] transition-colors duration-300">
                    {product.title}
                  </h1>

                  {/* Price */}
                  {product.price && (
                    <div className="mb-6 transform hover:-translate-y-1 transition-transform duration-300">
                      <div className="text-3xl font-bold text-[#D84315] hover:text-[#BF360C] transition-colors duration-300">
                        {product.price} {product.priceUnit}
                      </div>
                      {product.minOrderQuantity && (
                        <div className="text-sm text-gray-600 mt-1 hover:text-gray-900 transition-colors duration-300">
                          Minimum Order: {product.minOrderQuantity}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <div className="mb-8 hover:bg-gray-50 p-4 rounded-lg transition-all duration-300">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-[#D84315] transition-colors duration-300">
                      Product Description
                    </h2>
                    <p className="text-gray-600 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                      {product.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  {product.specifications && product.specifications.length > 0 && (
                    <div className="mb-8 group">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#D84315] transition-colors duration-300">
                        Specifications
                      </h2>
                      <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                        <div className="grid grid-cols-1 gap-4">
                          {product.specifications.map((spec, index) => (
                            <div 
                              key={index}
                              className="flex items-start py-2 border-b border-gray-200 last:border-b-0 hover:bg-white rounded-lg px-4 transition-all duration-300"
                            >
                              <span className="font-medium text-gray-900 w-1/3 hover:text-[#D84315] transition-colors duration-300">
                                {spec.key}
                              </span>
                              <span className="text-gray-600 w-2/3 hover:text-gray-900 transition-colors duration-300">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="mb-8 group">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#D84315] transition-colors duration-300">
                        Key Features
                      </h2>
                      <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                          <li 
                            key={index} 
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                          >
                            <span className="text-[#D84315] text-2xl mt-1 transition-colors duration-300">•</span>
                            <span className="text-gray-600 flex-1 hover:text-gray-900 transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Button */}
                  <button 
                    onClick={() => window.location.href = `mailto:info@securematrix.com?subject=Inquiry about ${product.title}`}
                    className="w-full bg-[#D84315] text-white py-4 px-8 rounded-lg text-lg font-medium hover:bg-[#BF360C] transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    Send Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
