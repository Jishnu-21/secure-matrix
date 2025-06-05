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
import { Pagination, Autoplay } from 'swiper/modules'

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const ApplicationCard = ({ application, index }: { application: any; index: number }) => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
      <Image
        src={application.image}
        alt={application.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={index === 0}
        className="object-cover w-full h-full"
        onError={(e: any) => {
          e.target.src = "/images/products/gabion-mattress/1.jpeg";
        }}
      />
      <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 drop-shadow-md">{application.title}</h3>
          <p className="text-white text-sm sm:text-base opacity-90 drop-shadow-md">{application.description}</p>
        </div>
      </div>
    </div>
  );

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
                  {/* Left Arrow */}
                  <button 
                    onClick={() => setSelectedImage(prev => prev === 0 ? productImages.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  {/* Right Arrow */}
                  <button 
                    onClick={() => setSelectedImage(prev => prev === productImages.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          selectedImage === index ? 'bg-[#D84315]' : 'bg-white bg-opacity-50'
                        }`}
                        onClick={() => setSelectedImage(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center">{product.title.toUpperCase()}</h1>
                <p className="text-center text-gray-700">{product.description}</p>
              </div>

              {/* Technical Aspects Table */}
              {product.technicalAspects && (
                <div className="mt-8 bg-white rounded-lg overflow-hidden">
                  <table className="w-full border-collapse border border-black">
                    <thead className="bg-gray-100">
                      <tr>
                        <th rowSpan={2} className="border border-black p-2">Sr. No.</th>
                        <th rowSpan={2} className="border border-black p-2">Characteristics</th>
                        <th colSpan={2} className="border border-black p-2">Mesh Type 10x12<br/>D=100 mm</th>
                        <th colSpan={2} className="border border-black p-2">Mesh Type 8x10<br/>D=80 mm</th>
                      </tr>
                      <tr>
                        <th className="border border-black p-2">Only Zinc / Zinc Alloy<sup>2</sup> coated</th>
                        <th className="border border-black p-2">Zinc / Zinc Alloy<sup>2</sup> + Polymer coated</th>
                        <th className="border border-black p-2">Only Zinc / Zinc Alloy<sup>2</sup> coated</th>
                        <th className="border border-black p-2">Zinc / Zinc Alloy<sup>2</sup> + Polymer coated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.technicalAspects.map((aspect, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                          <td className="border border-black p-2">{aspect.srNo}</td>
                          <td className="border border-black p-2">{aspect.characteristic}</td>
                          {aspect.srNo === 5 || aspect.srNo === 6 ? (
                            <td colSpan={4} className="border border-black p-2">{aspect.values[0]}</td>
                          ) : (
                            aspect.values.map((value: string, index: number) => (
                              <td key={index} className="border border-black p-2">{value}</td>
                            ))
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="text-xs mt-2">
                    <p className="mb-1">1) Internal diameter/External diameter of polymer coated wire.</p>
                    <p>2) Zinc Alloy shall consist to 90 percent zinc + 10 percent Aluminium or 95 percent Zinc + 5 percent Aluminium.</p>
                  </div>
                </div>
              )}
            </div>
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



          
          {/* Applications Section */}
          {product.applications && product.applications.length > 0 && (
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
              <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">APPLICATIONS</h2>
                {isMobile ? (
                  <div className="applications-swiper">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={20}
                      slidesPerView={1}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                        bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#D84315]'
                      }}
                      className="w-full pb-10"
                    >
                      {product.applications.map((application, index) => (
                        <SwiperSlide key={index}>
                          <Link href={application.link} className="group block">
                            <ApplicationCard application={application} index={index} />
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                ) : product.applications.length === 2 ? (
                  <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8">
                    {product.applications.map((application, index) => (
                      <Link key={index} href={application.link} className="group block">
                        <ApplicationCard application={application} index={index} />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="applications-swiper">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={20}
                      slidesPerView={3}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                        bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#D84315]'
                      }}
                      className="w-full pb-10"
                    >
                      {product.applications.map((application, index) => (
                        <SwiperSlide key={index}>
                          <Link href={application.link} className="group block">
                            <ApplicationCard application={application} index={index} />
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
