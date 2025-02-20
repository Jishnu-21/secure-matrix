'use client'

import { useState } from 'react'
import { Product } from '@/lib/data/categories'

interface ProductTabsProps {
  product: Product
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description')

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'details', label: 'Product Details' },
    { id: 'specification', label: 'Specifications' },
    { id: 'trade', label: 'Trade Information' }
  ]

  return (
    <div>
      <div className="border-b border-gray-100">
        <div className="flex justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-4 md:px-8 text-sm md:text-base font-semibold transition-all duration-300 relative ${
                activeTab === tab.id
                  ? 'text-[#D84315] bg-white'
                  : 'text-gray-600 hover:text-[#D84315] bg-gray-50'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D84315]"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 md:p-8">
        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {product.description}
            </p>
          </div>
        )}

        {activeTab === 'specification' && (
          <div className="space-y-4">
            {product.specifications?.map((spec, index) => (
              <div key={index} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="font-medium text-gray-900 w-1/3 text-sm">{spec.key}</span>
                <span className="text-gray-600 w-2/3 text-sm">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'trade' && (
          <div className="space-y-4">
            {product.tradeInformation?.map((info, index) => (
              <div key={index} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="font-medium text-gray-900 w-1/3 text-sm">{info.key}</span>
                <span className="text-gray-600 w-2/3 text-sm">{info.value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'details' && (
          <div className="space-y-4">
            {product.productDetails?.map((detail, index) => (
              <div key={index} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="font-medium text-gray-900 w-1/3 text-sm">{detail.key}</span>
                <span className="text-gray-600 w-2/3 text-sm">{detail.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}