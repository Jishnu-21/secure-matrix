import React from 'react';

interface CategoryHeaderProps {
  title: string;
  description: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center mb-20">
      <h1 className="text-3xl font-semibold text-[#333] mb-3">{title}</h1>
      <div className="w-12 h-0.5 bg-[#D84315] mb-4"></div>
      <p className="text-center text-[#666] max-w-xl">{description}</p>
    </div>
  );
};

export default CategoryHeader;
