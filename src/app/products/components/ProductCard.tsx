'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ElementType } from 'react'

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  imagePath: string;
  serviceType?: string;
  imageOnRight?: boolean;
  href?: string;
}

export default function ProductCard({ 
  title, 
  description, 
  features, 
  imagePath, 
  serviceType,
  imageOnRight = false,
  href
}: ProductCardProps) {
  const contentOrder = imageOnRight ? "order-1" : "order-2"
  const imageOrder = imageOnRight ? "order-2" : "order-1"

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return <Link href={href} className="block">{children}</Link>
    }
    return <>{children}</>
  }

  const isProduct = serviceType === "PRODUIT"

  return (
    <Wrapper>
      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg overflow-hidden">
        <CardContent className="p-0">
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
              {!isProduct && <p className="text-[#666] mb-8 leading-relaxed">{description}</p>}
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
              {isProduct && (
                <div className="mt-8">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-[#D84315]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                      <span className="text-sm font-medium">Valeur</span>
                    </div>
                  </div>
                  <Button 
                    className="bg-[#D84315] hover:bg-[#BF360C] text-white text-sm px-8 py-2"
                    onClick={(e) => {
                      e.preventDefault()
                      // Handle enquiry action
                    }}
                  >
                    Send Inquiry
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  )
}
