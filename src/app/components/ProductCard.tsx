import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data/categories';

interface ProductCardProps {
  product: Product;
  categoryId: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, categoryId, index }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        <div className="lg:w-[40%] relative group">
          <div className="aspect-w-16 aspect-h-10 lg:h-[350px] overflow-hidden">
            <Image
              src={product.imagePath}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </div>
        <div className="lg:w-[60%] p-10">
          <h3 className="text-2xl font-semibold text-[#333] mb-8 hover:text-[#D84315] transition-colors duration-300">
            {product.title}
          </h3>
          {product.price && (
            <div className="mb-6">
              <span className="text-2xl font-bold text-[#DA491A] hover:text-[#BF360C] transition-colors duration-300">
                {product.price} {product.priceUnit}
              </span>
            </div>
          )}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>
          {product.specifications && product.specifications.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-black mb-3">Specifications:</h3>
              <div className="grid grid-cols-1 gap-2 bg-gray-50 p-4 rounded-lg">
                {product.specifications.map((spec, index) => (
                  <div 
                    key={index} 
                    className="flex border-b border-gray-200 py-2 last:border-b-0 hover:bg-gray-100 transition-colors duration-300 rounded px-2"
                  >
                    <span className="font-medium text-gray-600 w-1/2">{spec.key}:</span>
                    <span className="text-gray-800 w-1/2">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {product.features && product.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300"
                  >
                    <span className="text-[#D84315] text-2xl mt-1">•</span>
                    <span className="text-gray-600 flex-1 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link 
              href={`/products/${categoryId}/${product.id}`}
              className="flex-1 bg-[#D84315] text-white px-6 py-3 rounded-md hover:bg-[#BF360C] transform hover:-translate-y-1 transition-all duration-300 text-center text-lg font-medium shadow-md hover:shadow-lg"
            >
              View Details
            </Link>
            <button 
              onClick={() => window.location.href = `mailto:info@securematrix.com?subject=Inquiry about ${product.title}`}
              className="flex-1 border-2 border-[#D84315] text-[#D84315] px-6 py-3 rounded-md hover:bg-[#D84315] hover:text-white transform hover:-translate-y-1 transition-all duration-300 text-center text-lg font-medium shadow-md hover:shadow-lg"
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
