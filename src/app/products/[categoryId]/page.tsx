'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { categories } from '@/lib/data/categories'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { notFound } from 'next/navigation'

interface PageProps {
  params: { 
    categoryId: string 
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

async function getCategory(categoryId: string) {
  const category = categories.find(cat => cat.id === categoryId)
  if (!category) return null
  return category
}

export default function CategoryPage({ params, searchParams }: PageProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 5

  const category = categories.find(cat => cat.id === params.categoryId)
  
  if (!category) {
    notFound()
  }

  const totalPages = Math.ceil(category.products.length / productsPerPage)
  
  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = category.products.slice(indexOfFirstProduct, indexOfLastProduct)

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
              {currentProducts.map((product, index) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-[40%] relative">
                      <div className="aspect-w-16 aspect-h-10 lg:h-[350px]">
                        <Image
                          src={product.imagePath}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="lg:w-[60%] p-10">
                      <h3 className="text-2xl font-semibold text-[#333] mb-8">{product.title}</h3>
                      <ul className="space-y-4">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span className="text-[#D84315] text-2xl mt-1">•</span>
                            <span className="text-[#666] text-lg flex-1 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10">
                        <Link 
                          href={`/products/${params.categoryId}/${product.id}`}
                          className="inline-block bg-[#D84315] text-white px-8 py-3 rounded-md hover:bg-[#BF360C] transition-colors text-lg"
                        >
                          Send Inquiry
                        </Link>
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
                  className={`text-gray-400 hover:text-[#D84315] text-2xl ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={currentPage === 1}
                >
                  &#171;
                </button>
                <button 
                  onClick={goToPreviousPage}
                  className={`text-gray-400 hover:text-[#D84315] text-2xl ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={currentPage === 1}
                >
                  &#8249;
                </button>
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => goToPage(number)}
                    className={`w-10 h-10 rounded-full ${
                      currentPage === number 
                        ? 'bg-[#D84315] text-white hover:bg-[#BF360C]' 
                        : 'text-gray-600 hover:bg-gray-100'
                    } flex items-center justify-center text-lg font-medium transition-colors`}
                  >
                    {number}
                  </button>
                ))}
                <button 
                  onClick={goToNextPage}
                  className={`text-gray-400 hover:text-[#D84315] text-2xl ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={currentPage === totalPages}
                >
                  &#8250;
                </button>
                <button 
                  onClick={goToLastPage}
                  className={`text-gray-400 hover:text-[#D84315] text-2xl ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
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
