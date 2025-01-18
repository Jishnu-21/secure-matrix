'use client'

import { useState } from 'react'
import { categories } from '@/lib/data/categories'
import ProductCard from "../components/ProductCard"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CTA from "../../components/CTA"
import { notFound } from 'next/navigation'

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const category = categories.find(cat => cat.id === params.categoryId)
  
  if (!category) {
    notFound()
  }

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 5
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
      <Header/>
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
            <div className="space-y-20">
              {currentProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  serviceType="PRODUIT"
                  title={product.title}
                  description={product.description}
                  features={product.features}
                  imagePath={product.imagePath}
                  imageOnRight={index % 2 === 1}
                  href={`/products/${params.categoryId}/${product.id}`}
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
        </div>
      </main>
      <Footer/>
    </>
  )
}
