'use client'

import { useState } from 'react'
import { Product } from '@/lib/data/categories'

interface ProductTabsProps {
  product: Product
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className="mt-12">
      <div className="border-b border-gray-200">
        <div className="flex gap-8">
          <button
            className={`py-2 px-4 -mb-px ${
              activeTab === 'description'
                ? 'border-b-2 border-[#D84315] text-[#D84315]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`py-2 px-4 -mb-px ${
              activeTab === 'specification'
                ? 'border-b-2 border-[#D84315] text-[#D84315]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('specification')}
          >
            Specification
          </button>
          <button
            className={`py-2 px-4 -mb-px ${
              activeTab === 'reviews'
                ? 'border-b-2 border-[#D84315] text-[#D84315]'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
      </div>
      <div className="py-6">
        {activeTab === 'description' && (
          <div>
            <p className="text-gray-600">{product.description}</p>
          </div>
        )}
        {activeTab === 'specification' && (
          <div>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            <p className="text-gray-600">No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
