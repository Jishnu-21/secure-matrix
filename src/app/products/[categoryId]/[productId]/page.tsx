'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { categories, Product } from '@/lib/data/categories'
import { notFound } from 'next/navigation'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

export default function ProductDetailPage({ 
  params 
}: { 
  params: { categoryId: string; productId: string } 
}) {
  const category = categories.find(cat => cat.id === params.categoryId)
  const product = category?.products.find(prod => prod.id === params.productId)
  
  if (!category || !product) {
    notFound()
  }

  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('Description')
  const images = [product.imagePath, product.imagePath, product.imagePath, product.imagePath] // Replace with actual product images

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-32 pb-20">
        <div className="container mx-auto max-w-[90%] px-4">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Image section wrapper */}
            <div className="flex gap-4 md:w-[800px] flex-shrink-0">
              {/* Left side - Thumbnails */}
              <div className="w-32 flex-shrink-0">
                <div className="flex flex-col gap-4 h-[500px]">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      className={`relative w-32 h-[116px] border rounded-sm overflow-hidden ${
                        selectedImage === index ? 'ring-1 ring-[#D84315]' : 'hover:ring-1 hover:ring-gray-300'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={img}
                        alt={`${product.title} ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Center - Main Image */}
              <div className="flex-1">
                <div className="relative h-[500px] border rounded-sm overflow-hidden">
                  <Image
                    src={images[selectedImage]}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right side - Product Info */}
            <div className="flex-1 min-w-[400px] flex flex-col h-[500px]">
              <div className="flex-1">
                <h1 className="text-3xl font-semibold text-[#333] mb-4">
                  {product.title}
                </h1>
                
                <div className="text-xl text-[#D84315] font-medium mb-6">
                  150 INR/Square Meter
                </div>

                <div className="mb-6">
                  <div className="text-lg mb-4 font-medium text-[#333]">PRODUCT DETAILS</div>
                  <div className="space-y-3">
                    {[
                      { label: 'Surface Treatment', value: product.features[0] },
                      { label: 'Hole Shape', value: product.features[1] },
                      { label: 'Product Type', value: product.features[2] },
                      { label: 'Mesh Type', value: product.features[3] },
                      { label: 'Material', value: product.features[4] },
                      { label: 'Color', value: product.features[5] },
                    ].map((detail, index) => (
                      <div key={index} className="flex items-center text-base">
                        <span className="text-gray-600 w-36 flex-shrink-0">{detail.label}</span>
                        <span className="text-[#333]">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-auto">
                <div className="flex gap-3 mb-4">
                  <Button 
                    className="bg-[#D84315] hover:bg-[#BF360C] text-white text-base h-11 px-8"
                  >
                    Send Inquiry
                  </Button>
                  <Button 
                    variant="outline"
                    className="text-base h-11 px-8 border-gray-300"
                  >
                    Get Best Quote
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-base text-[#D84315]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span className="hover:underline cursor-pointer">Download product data sheet (PDF)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex border-b border-gray-200">
              {['Description', 'Specification', 'Reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 text-sm font-medium ${
                    activeTab === tab 
                      ? 'text-[#D84315] border-b-2 border-[#D84315] -mb-[2px]' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="py-4">
              {activeTab === 'Description' && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description || `The UG-C2-42 10ft(6m) 14 Sheet GALV.BOX TV is the best on demand PUG TV we've tested. Although UG-PUG's videos exhibit fantastic picture quality, this one stands out for its value thanks to a free many-gigabyte download feature that lets great for gamers.`}
                </p>
              )}
              {activeTab === 'Specification' && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  • Only 16GB is shown in this image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
                  <br /><br />
                  • RECZ brand review is at a minimum 35% lighter than the C1 series.
                  <br /><br />
                  • The following LG2 TVs(2H) offer Upside to RECZ V19. All other C2 models (below C2-83) received 100% renewable label.
                </p>
              )}
              {activeTab === 'Reviews' && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  Reviews content here
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
