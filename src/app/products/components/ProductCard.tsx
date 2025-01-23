'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/data/categories'

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  imagePath: string
  serviceType?: 'SERVICE' | 'PRODUIT'
  imageOnRight?: boolean
  href: string
  product?: Product
  categoryId?: string
}

export default function ProductCard({ 
  title,
  description,
  features,
  imagePath,
  serviceType,
  imageOnRight = false,
  href,
  product,
  categoryId
}: ProductCardProps) {
  const contentOrder = imageOnRight ? "order-1" : "order-2"
  const imageOrder = imageOnRight ? "order-2" : "order-1"

  // If product and categoryId are provided, use the product detail layout
  if (product && categoryId) {
    return (
      <Link href={`/products/${categoryId}/${product.id}`}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48">
            <Image
              src={product.imagePath}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 line-clamp-2">{product.description}</p>
          </div>
        </div>
      </Link>
    )
  }

  // Service/Category layout
  return (
    <Link href={href} className="block">
      <div className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className={`md:w-[45%] ${imageOrder}`}>
            <div className="relative h-[500px]">
              <Image
                src={imagePath}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
          <div className={`md:w-[55%] p-12 ${contentOrder}`}>
            {serviceType && (
              <p className="text-[#D84315] uppercase text-xs tracking-wider mb-3">{serviceType}</p>
            )}
            <h3 className="text-2xl font-semibold text-[#333] mb-4">{title}</h3>
            <p className="text-[#666] mb-8 leading-relaxed">{description}</p>
            {features.length > 0 && (
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded bg-[#D84315] text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                        <path d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#444]">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
