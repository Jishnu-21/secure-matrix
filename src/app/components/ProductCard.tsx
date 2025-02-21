'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/data/categories'

interface ProductCardProps {
  product: Product
  categoryId: string
  index: number
}

export default function ProductCard({ product, categoryId, index }: ProductCardProps) {
  const imageOrder = index % 2 === 0 ? "md:order-1" : "md:order-2"
  const contentOrder = index % 2 === 0 ? "md:order-2" : "md:order-1"

  return (
    <Link href={`/products/${categoryId}/${product.id}`} className="block">
      <div className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className={`w-full md:w-[45%] ${imageOrder}`}>
            <div className="relative h-[300px] md:h-[500px]">
              <Image
                src={product.imagePath[0]}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className={`w-full md:w-[55%] p-6 md:p-12 flex flex-col justify-center ${contentOrder}`}>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-[#333]">{product.title}</h3>
              <p className="text-[#666] leading-relaxed line-clamp-3 md:line-clamp-none">{product.description}</p>
              
              {/* Product Details */}
              <div className="mt-4 space-y-2">
                {product.productDetails.slice(0, 3).map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-4 md:w-5 h-4 md:h-5 rounded bg-[#D84315] text-white flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 md:w-3 h-2.5 md:h-3">
                        <path d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm md:text-base text-[#444] font-medium">{detail.key}: </span>
                      <span className="text-sm md:text-base text-[#666]">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* View Details Button */}
              <div className="pt-4 md:pt-6">
                <span className="inline-block text-[#D84315] text-sm md:text-base font-medium hover:underline">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
