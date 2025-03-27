'use client'

import { categories } from '@/lib/data/categories'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import ProductTabs from './ProductTabs'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

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

  // Get related products with category info
  const relatedProducts = categories.flatMap(cat => 
    cat.products.map(prod => ({
      ...prod,
      categoryId: cat.id
    }))
  )
  .filter(p => p.id !== product?.id) // Exclude current product
  .slice(0, 3); // Take only 3 products

  if (!category || !product) {
    notFound()
  }

  console.log('Page Product Data:', {
    categoryId: resolvedParams.categoryId,
    productId: resolvedParams.productId,
    product
  })

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

          {/* Related Products Section */}
          <div className="mt-16 mb-16 bg-white rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-10 text-center">Related Products</h2>
            
            {/* Mobile view with Swiper */}
            <div className="block md:hidden">
              <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="mySwiper"
              >
                {relatedProducts.map(relatedProduct => (
                  <SwiperSlide key={relatedProduct.id}>
                    <Link 
                      href={`/products/${relatedProduct.categoryId}/${relatedProduct.id}`}
                      className="group block"
                    >
                      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                        <div className="relative h-52 w-full">
                          <Image
                            src={relatedProduct.imagePath[0]}
                            alt={relatedProduct.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#D84315] transition-colors text-center">
                            {relatedProduct.title}
                          </h3>
                          <p className="mt-3 text-sm text-gray-600 line-clamp-2 text-center">
                            {relatedProduct.shortDescription}
                          </p>
                          <div className="mt-4 flex items-center justify-center">
                            <button 
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/products/${relatedProduct.categoryId}/${relatedProduct.id}`;
                              }}
                              className="bg-[#D84315] text-white px-6 py-2 rounded hover:bg-[#BF360C] transition-colors text-sm font-medium"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop view with grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {relatedProducts.map(relatedProduct => (
                <Link 
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.categoryId}/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="relative h-52 w-full">
                      <Image
                        src={relatedProduct.imagePath[0]}
                        alt={relatedProduct.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#D84315] transition-colors text-center">
                        {relatedProduct.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-600 line-clamp-2 text-center">
                        {relatedProduct.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center justify-center">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/products/${relatedProduct.categoryId}/${relatedProduct.id}`;
                          }}
                          className="bg-[#D84315] text-white px-6 py-2 rounded hover:bg-[#BF360C] transition-colors text-sm font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="mt-8 md:mt-12 bg-[#F5F5F5] rounded-lg p-6 md:p-8">
            <h2 className="text-base font-medium font-semibold text-gray-900 mb-6 text-center">Enter Buying Requirement Details</h2>
            <form className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="w-full px-3 py-2 bg-white rounded focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="w-full px-3 py-2 bg-white rounded focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write here..."
                  className="w-full px-3 py-2 bg-white rounded focus:outline-none resize-none"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#D84315] text-white px-6 py-2 rounded flex items-center gap-1 hover:bg-[#BF360C] transition-colors"
                >
                  Send Inquiry <span className="text-sm">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
