'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { categories } from '@/lib/data/categories'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CategoryHeader from '../../components/CategoryHeader';
import ProductList from '../../components/ProductList';
import Pagination from '../../components/Pagination';
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
        <div className="relative z-20 pt-20 md:pt-40 pb-10 md:pb-20">
          <div className="container mx-auto max-w-full md:max-w-[80%] px-4">
            <CategoryHeader title={category.title} description={category.description} />
            <ProductList products={currentProducts} categoryId={resolvedParams.categoryId} />
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                goToFirstPage={goToFirstPage}
                goToLastPage={goToLastPage}
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
                goToPage={goToPage}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
