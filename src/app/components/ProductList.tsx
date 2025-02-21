'use client'

import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '@/lib/data/categories'

interface ProductListProps {
  products: Product[]
  categoryId: string
}

const ProductList: React.FC<ProductListProps> = ({ products, categoryId }) => {
  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-12">
      {products.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          categoryId={categoryId} 
          index={index} 
        />
      ))}
    </div>
  )
}

export default ProductList
