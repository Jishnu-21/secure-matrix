'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { categories } from '@/lib/data/categories'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { notFound } from 'next/navigation'
import { use } from 'react'

interface PageProps {
  params: Promise<{ 
    categoryId: string 
  }>
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function CategoryPage({ params, searchParams }: PageProps) {
  const resolvedParams = use(params)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 5

  const category = categories.find(cat => cat.id === resolvedParams.categoryId)
  
  if (!category) {
    notFound()
  }

  const totalPages = Math.ceil(category.products?.length / productsPerPage)
  
  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = category.products?.slice(indexOfFirstProduct, indexOfLastProduct)

  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToFirstPage = () => goToPage(1)
  const goToLastPage = () => goToPage(totalPages)
  const goToPreviousPage = () => currentPage > 1 && goToPage(currentPage - 1)
  const goToNextPage = () => currentPage < totalPages && goToPage(currentPage + 1)

  // Generate page numbers
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <Header />
      <main className="bg-[#FAFAFA] relative min-h-screen">
        {/* Background Pattern Container */}
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
            <div className="flex flex-col items-center mb-20">
              <h1 className="text-3xl font-semibold text-[#333] mb-3">{category.title}</h1>
              <div className="w-12 h-0.5 bg-[#D84315] mb-4"></div>
              <p className="text-center text-[#666] max-w-xl">
                {category.description}
              </p>
            </div>

            <div className="space-y-12">
              {currentProducts?.map((product, index) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-[40%] relative group">
                      <div className="aspect-w-16 aspect-h-10 lg:h-[350px] overflow-hidden">
                        <Image
                          src={product.imagePath}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <div className="lg:w-[60%] p-10">
                      <h3 className="text-2xl font-semibold text-[#333] mb-8 hover:text-[#D84315] transition-colors duration-300">
                        {product.title}
                      </h3>
                      
                      {/* Price Information */}
                      {product.price && (
                        <div className="mb-6">
                          <span className="text-2xl font-bold text-[#DA491A] hover:text-[#BF360C] transition-colors duration-300">
                            {product.price} {product.priceUnit}
                          </span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Specifications */}
                      {product.specifications && product.specifications.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-black mb-3">Specifications:</h3>
                          <div className="grid grid-cols-1 gap-2 bg-gray-50 p-4 rounded-lg">
                            {product.specifications.map((spec, index) => (
                              <div 
                                key={index} 
                                className="flex border-b border-gray-200 py-2 last:border-b-0 hover:bg-gray-100 transition-colors duration-300 rounded px-2"
                              >
                                <span className="font-medium text-gray-600 w-1/2">{spec.key}:</span>
                                <span className="text-gray-800 w-1/2">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Features */}
                      {product.features && product.features.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold mb-3">Features:</h3>
                          <ul className="space-y-2">
                            {product.features.map((feature, index) => (
                              <li 
                                key={index} 
                                className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300"
                              >
                                <span className="text-[#D84315] text-2xl mt-1">•</span>
                                <span className="text-gray-600 flex-1 leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link 
                          href={`/products/${resolvedParams.categoryId}/${product.id}`}
                          className="flex-1 bg-[#D84315] text-white px-6 py-3 rounded-md hover:bg-[#BF360C] transform hover:-translate-y-1 transition-all duration-300 text-center text-lg font-medium shadow-md hover:shadow-lg"
                        >
                          View Details
                        </Link>
                        <button 
                          onClick={() => window.location.href = `mailto:info@securematrix.com?subject=Inquiry about ${product.title}`}
                          className="flex-1 border-2 border-[#D84315] text-[#D84315] px-6 py-3 rounded-md hover:bg-[#D84315] hover:text-white transform hover:-translate-y-1 transition-all duration-300 text-center text-lg font-medium shadow-md hover:shadow-lg"
                        >
                          Send Inquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-20 gap-4">
                <button 
                  onClick={goToFirstPage}
                  className={`text-gray-400 hover:text-[#D84315] text-2xl transform hover:scale-110 transition-transform duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={currentPage === 1}
                >
                  &#171;
                </button>
                <button 
                  onClick={goToPreviousPage}
                  className={`text-gray-400 hover:text-[#D84315] text-2xl transform hover:scale-110 transition-transform duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={currentPage === 1}
                >
                  &#8249;
                </button>
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => goToPage(number)}
                    className={`w-10 h-10 rounded-full transform hover:scale-110 transition-all duration-300 ${
                      currentPage === number 
                        ? 'bg-[#D84315] text-white hover:bg-[#BF360C] shadow-md' 
                        : 'text-gray-600 hover:bg-gray-100'
                    } flex items-center justify-center text-lg font-medium`}
                  >
                    {number}
                  </button>
                ))}
                <button 
                  onClick={goToNextPage}
                  className={`text-gray-400 hover:text-[#D84315] text-2xl transform hover:scale-110 transition-transform duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={currentPage === totalPages}
                >
                  &#8250;
                </button>
                <button 
                  onClick={goToLastPage}
                  className={`text-gray-400 hover:text-[#D84315] text-2xl transform hover:scale-110 transition-transform duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={currentPage === totalPages}
                >
                  &#187;
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
