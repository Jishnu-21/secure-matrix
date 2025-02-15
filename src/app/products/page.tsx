'use client'

import { useState } from 'react'
import ProductCard from "./components/ProductCard"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CTA from "../components/CTA"
import { categories } from '@/lib/data/categories'

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 5
  const totalPages = Math.ceil(categories.length / productsPerPage)
  
  // Get current categories
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentCategories = categories.slice(indexOfFirstProduct, indexOfLastProduct)

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
      <Header/>
      <main className="min-h-screen bg-[#FAFAFA]">
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
        <div className="relative z-10 mt-10 top-40 pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-20">
              <h1 className="text-3xl font-semibold text-[#333] mb-3">Our Product Range</h1>
              <div className="w-12 h-0.5 bg-[#D84315] mb-4"></div>
              <p className="text-center text-[#666] max-w-xl">
              Reliable solutions for erosion control and ground reinforcement
              </p>
            </div>
            <div className="space-y-20">
              {currentCategories.map((category, index) => (
                <ProductCard
                  key={category.id}
                  serviceType="SERVICE"
                  title={category.title}
                  description={category.description}
                  features={category.features}
                  imagePath={category.imagePath}
                  imageOnRight={index % 2 === 1}
                  href={`/products/${category.id}`}
                />
              ))}
            </div>
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
          <div className="mt-20">
            <CTA/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
