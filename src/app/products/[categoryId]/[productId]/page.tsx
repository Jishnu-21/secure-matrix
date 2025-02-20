'use client'

import { categories } from '@/lib/data/categories'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import { use, useState } from 'react'
import Link from 'next/link'
import ProductTabs from './ProductTabs'

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
  const [startIndex, setStartIndex] = useState(0)

  console.log('Page Product Data:', {
    categoryId: resolvedParams.categoryId,
    productId: resolvedParams.productId,
    product
  })

  if (!category || !product) {
    notFound()
  }

  const productImages = product.imagePath
  const maxScrollIndex = Math.max(0, productImages.length - 4)
  const visibleThumbnails = productImages.slice(startIndex, startIndex + 4)

  const handlePrevThumbnails = () => {
    if (startIndex > 0) {
      setStartIndex(prev => Math.max(0, prev - 1))
    }
  }

  const handleNextThumbnails = () => {
    if (startIndex < maxScrollIndex) {
      setStartIndex(prev => Math.min(maxScrollIndex, prev + 1))
    }
  }

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'details', label: 'Product Details' },
    { id: 'specification', label: 'Specification' },
    { id: 'trade', label: 'Trade Information' },
    { id: 'reviews', label: 'Reviews' },
   
  ]

  return (
    <>
      <Header />
      <main className="bg-[#FAFAFA] relative min-h-screen py-6 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 mt-4 md:mt-8">
          {/* Product Details Section */}
          <div className="bg-white rounded-lg p-4 md:p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10">
              {/* Mobile Layout - Main Image First */}
              <div className="block md:hidden w-full mb-4">
                <div className="relative w-full aspect-square">
                  <Image
                    src={productImages[selectedImage]}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Left Column - Thumbnail Gallery (Only show if multiple images) */}
              {productImages.length > 1 && (
                <div className="md:col-span-2">
                  <div className="flex flex-row md:flex-col relative">
                    <div className="relative w-full md:w-auto">
                      <div className={`flex flex-row md:flex-col gap-4 md:gap-10 ${
                        productImages.length >= 5 ? 'overflow-x-auto md:overflow-y-auto md:overflow-x-hidden thumbnail-scroll' : ''
                      } md:max-h-[calc(40rem+3*2.5rem)] pt-3`}>
                        {productImages.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`relative w-20 h-20 md:w-40 md:h-40 border-2 ${
                              selectedImage === index ? 'border-[#D84315]' : 'border-gray-300'
                            } rounded-md overflow-hidden flex-shrink-0 transition-all duration-300 first:mt-0 last:mb-0`}
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
                  </div>
                </div>
              )}

              {/* Center Column - Main Image (Desktop Only) */}
              <div className={`hidden md:block ${productImages.length > 1 ? 'md:col-span-6' : 'md:col-span-8'} h-full`}>
                <div className="relative w-full h-full">
                  <Image
                    src={productImages[selectedImage]}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Column - Product Info */}
              <div className="md:col-span-4 flex flex-col">
                <h1 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 text-center md:text-left">{product.title.toUpperCase()}</h1>
                <p className="text-[#D84315] text-lg md:text-2xl mb-4 md:mb-6 font-semibold text-center md:text-left">{product.price} {product.priceUnit}</p>
                
                <div className="flex-grow space-y-4">
                  <h2 className="font-semibold text-gray-700 text-base md:text-lg mb-3 md:mb-4">PRODUCT DETAILS:</h2>
                  <div className="space-y-2 md:space-y-3">
                    {product.productDetails.map((spec, index) => (
                      <div key={index} className="grid grid-cols-1">
                        <div className="flex items-start">
                          <span className="font-medium text-gray-800 min-w-[120px] md:min-w-[160px] text-sm md:text-base">{spec.key}:</span>
                          <span className="text-gray-600 flex-1 text-sm md:text-base">{spec.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-6 md:mt-8">
                  <button className="w-full bg-[#D84315] text-white px-4 md:px-6 py-2.5 md:py-3 rounded-md hover:bg-[#BF360C] text-sm md:text-base">
                    Send Inquiry
                  </button>
                  <button className="w-full border border-[#D84315] text-[#D84315] px-4 md:px-6 py-2.5 md:py-3 rounded-md hover:bg-[#D84315] hover:text-white text-sm md:text-base">
                    Get a Price/Quote
                  </button>
                </div>

                <div className="mt-4 md:mt-6 text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#D84315] flex items-center gap-2 justify-center md:justify-start hover:underline text-sm md:text-base"
                  >
                    <span>Download product data sheet (PDF)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8 bg-white rounded-lg overflow-hidden">
            <ProductTabs product={product} />
          </div>

          {/* Related Products */}
          

          {/* Inquiry Form */}
          <div className="mt-8 md:mt-12 bg-gray-100 rounded-lg p-4 md:p-8">
            <h2 className="text-base md:text-xl font-medium text-gray-900 mb-4 md:mb-6 text-center">Enter Buying Requirement Details</h2>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md text-sm md:text-base"
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
                    className="w-full p-2 border border-gray-300 rounded-md text-sm md:text-base"
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
                  className="w-full p-2 border border-gray-300 rounded-md text-sm md:text-base"
                  placeholder="Hello there!"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#D84315] text-white py-2.5 md:py-3 rounded-md hover:bg-[#BF360C] transition-colors text-sm md:text-base"
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
