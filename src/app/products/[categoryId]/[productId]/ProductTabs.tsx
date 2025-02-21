"use client";

import { useState } from "react";
import { Product } from "@/lib/data/categories";

interface ProductTabsProps {
  product: Product;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "details", label: "Product Details" },
    { id: "specification", label: "Specification" },
    { id: "trade", label: "Trade Information" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max border-b border-gray-200 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 md:py-4 md:px-8 text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 relative ${
                activeTab === tab.id
                  ? "text-[#D84315] bg-white"
                  : "text-gray-600 hover:text-[#D84315] bg-gray-50"
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

      {/* Tab Content */}
      <div className="p-4 md:p-8">
        {activeTab === "description" && (
          <div className="prose max-w-none">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        )}

        {activeTab === "details" && (
          <div className="space-y-4">
            {product.productDetails.map((detail, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
                <div className="font-medium text-gray-700">{detail.key}:</div>
                <div className="text-gray-600">{detail.value}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "specification" && (
          <div className="prose max-w-none">
            <div className="space-y-4">
              {product.specifications?.map((spec, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
                  <div className="font-medium text-gray-700">{spec.key}:</div>
                  <div className="text-gray-600">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "trade" && (
          <div className="prose max-w-none">
            <div className="space-y-4">
              {product.tradeInformation?.map((info, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
                  <div className="font-medium text-gray-700">{info.key}:</div>
                  <div className="text-gray-600">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="prose max-w-none">
            <p className="text-sm md:text-base text-gray-600">No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;