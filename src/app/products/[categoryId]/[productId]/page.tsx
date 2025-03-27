'use client'

import { categories } from '@/lib/data/categories'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import { use, useState, useEffect } from 'react'
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

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (productImages?.length > 1) {
        setSelectedImage((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [product]);

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
      <main className="bg-[#FAFAFA] relative min-h-screen mt-2 py-6 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 mt-12 md:mt-8">
          {/* Product Details Section */}
          <div className="bg-white rounded-lg p-4 md:p-8 shadow-md">
            <div className="flex flex-col gap-6">
              {/* Main Image */}
              <div className="w-full max-w-7xl mx-auto">
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src={productImages[selectedImage]}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>

           
              {/* Product Info */}
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center">{product.title.toUpperCase()}</h1>                
                <div className="w-full flex justify-center gap-4">
                  <button className="bg-[#D84315] text-white px-6 py-2.5 rounded-md hover:bg-[#BF360C] text-sm md:text-base">
                    Send Inquiry
                  </button>
                  <button className="border border-[#D84315] text-[#D84315] px-6 py-2.5 rounded-md hover:bg-[#D84315] hover:text-white text-sm md:text-base">
                    Get a Price/Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-8 bg-white rounded-lg overflow-hidden">
            <ProductTabs product={product} />
          </div>

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
