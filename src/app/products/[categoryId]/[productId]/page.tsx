'use server'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { categories } from '@/lib/data/categories'
import { notFound } from 'next/navigation'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import ProductTabs from './ProductTabs'
import ProductButtons from './ProductButtons'

interface PageProps {
  params: {
    categoryId: string
    productId: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

async function getProduct(categoryId: string, productId: string) {
  const category = categories.find(cat => cat.id === categoryId)
  if (!category) return null
  
  const product = category.products.find(p => p.id === productId)
  if (!product) return null
  
  return { category, product }
}

export default async function ProductDetailPage({ params, searchParams }: PageProps) {
  const data = await getProduct(params.categoryId, params.productId)
  
  if (!data) {
    notFound()
  }

  const { product } = data

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
            <div className="flex flex-col items-center mb-12">
              <h1 className="text-3xl font-semibold text-[#333] mb-3">{product.title}</h1>
              <div className="w-12 h-0.5 bg-[#D84315] mb-4"></div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Thumbnails Column */}
                <div className="w-32 h-[500px] flex flex-col gap-4">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div key={index} className="relative h-[116px] w-full">
                      <Image
                        src={product.imagePath}
                        alt={`${product.title} view ${index + 1}`}
                        fill
                        className="object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    </div>
                  ))}
                </div>

                {/* Main Image */}
                <div className="w-[800px] h-[500px] relative">
                  <Image
                    src={product.imagePath}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 h-[500px] flex flex-col">
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h2 className="text-lg font-semibold text-[#333] mb-2">Details</h2>
                      <p className="text-[#666]">{product.description}</p>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#333] mb-2">Features</h2>
                      <ul className="list-disc list-inside space-y-2 text-[#666]">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <ProductButtons categoryId={params.categoryId} productId={params.productId} />
                </div>
              </div>
              
              <div className="mt-12">
                <ProductTabs product={product} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
