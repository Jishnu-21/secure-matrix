'use client'

import { categories } from '@/lib/data/categories'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import { use, useState } from 'react'
import Link from 'next/link'

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
  const [activeTab, setActiveTab] = useState('description')
  const [selectedImage, setSelectedImage] = useState(0)

  if (!category || !product) {
    notFound()
  }

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specification', label: 'Specification' },
    { id: 'reviews', label: 'Reviews' },
  ]

  // Mock data for product images (you should replace these with actual product images)
  const productImages = [
    product.imagePath,
    product.imagePath,
    product.imagePath,
    product.imagePath,
  ]

  return (
    <>
      <Header />
      <main className="bg-[#FAFAFA] relative min-h-screen py-10 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 mt-8">
          {/* Product Details Section */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
              {/* Left Column - Thumbnail Gallery */}
              <div className="md:col-span-1">
                <div className="flex flex-row md:flex-col gap-4 md:gap-10">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-16 h-16 md:w-24 md:h-24 border-2 ${
                        selectedImage === index ? 'border-[#D84315]' : 'border-gray-300'
                      } rounded-md overflow-hidden flex-shrink-0`}
                    >
                      <Image
                        src={image}
                        alt={`Product thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Center Column - Main Image */}
              <div className="md:col-span-7">
                <div className="relative w-full h-[300px] md:h-[500px]">
                  <Image
                    src={productImages[selectedImage]}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Column - Product Info */}
              <div className="md:col-span-4">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 text-center md:text-left">{product.title.toUpperCase()}</h1>
                <p className="text-[#D84315] text-xl md:text-2xl mb-6 font-semibold text-center md:text-left">{product.price} {product.priceUnit}</p>
                
                <div className="space-y-4">
                  <h2 className="font-semibold text-gray-700">PRODUCT DETAILS:</h2>
                  <ul className="space-y-2 text-gray-600">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="flex items-center justify-between md:justify-start">
                        <span className="font-medium text-gray-800 md:w-auto w-1/2">{spec.key}:</span> <span className="w-1/2 md:w-auto">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-8">
                  <button className="bg-[#D84315] text-white px-6 py-3 rounded-md hover:bg-[#BF360C]">
                    Send Inquiry
                  </button>
                  <button className="border border-[#D84315] text-[#D84315] px-6 py-3 rounded-md hover:bg-[#D84315] hover:text-white">
                    Get a Price/Quote
                  </button>
                </div>

                <div className="mt-6 text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#D84315] flex items-center gap-2 justify-center md:justify-start hover:underline"
                  >
                    <span>Download product data sheet (PDF)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8 bg-white rounded-lg overflow-hidden">
            <div className="border-b border-gray-100">
              <div className="flex justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-4 md:px-8 text-sm md:text-base font-medium transition-all duration-300 relative ${
                      activeTab === tab.id
                        ? 'text-[#D84315] bg-white'
                        : 'text-gray-600 hover:text-[#D84315] bg-gray-50'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D84315]"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 md:p-8 text-center">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {product.description}
                  </p>
                </div>
              )}

              {activeTab === 'specification' && (
                <div className="prose max-w-none">
                  {product.specifications && product.specifications.length > 0 ? (
                    <div className="space-y-4">
                      {product.specifications.map((spec, index) => (
                        <div key={index} className="flex items-start justify-center py-2">
                          <span className="font-medium text-gray-900 w-1/3 text-sm">
                            {spec.key}
                          </span>
                          <span className="text-gray-600 w-2/3 text-sm">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic text-sm">No specifications available</p>
                  )}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="prose max-w-none">
                  <div className="text-center py-6">
                    <p className="text-gray-500 mb-4 text-sm">No reviews yet</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12 text-center">
            <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.products?.slice(0, 3).map((relatedProduct) => (
                <Link 
                  href={`/products/${category.id}/${relatedProduct.id}`}
                  key={relatedProduct.id}
                  className="bg-white rounded-lg overflow-hidden group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={relatedProduct.imagePath}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-900 font-medium mb-2">{relatedProduct.title}</h3>
                    <button className="w-full bg-[#D84315] text-white py-2 rounded text-sm hover:bg-[#BF360C] transition-colors">
                      Know more
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="mt-12 bg-gray-100 rounded-lg p-6 md:p-8">
            <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-6 text-center">Enter Buying Requirement Details</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Abc@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Hello there!"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#D84315] text-white py-3 rounded-md hover:bg-[#BF360C] transition-colors"
              >
                Send Inquiry →
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
