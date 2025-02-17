import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToFirstPage: () => void;
  goToLastPage: () => void;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  goToPage: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  goToFirstPage,
  goToLastPage,
  goToPreviousPage,
  goToNextPage,
  goToPage
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center mt-20 gap-4">
      <button 
        onClick={goToFirstPage}
        className={`text-gray-400 hover:text-[#D84315] text-2xl transform hover:scale-110 transition-transform duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentPage === 1}
      >
        &#171;
      </button>
      <button 
        onClick={goToPreviousPage}
        className={`text-gray-400 hover:text-[#D84315] text-2xl transform hover:scale-110 transition-transform duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentPage === 1}
      >
        &#8249;
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => goToPage(number)}
          className={`w-10 h-10 rounded-full transform hover:scale-110 transition-all duration-300 ${
            currentPage === number 
              ? 'bg-[#D84315] text-white hover:bg-[#BF360C] shadow-md' 
              : 'text-gray-600 hover:bg-gray-100'
          } flex items-center justify-center text-lg font-medium`}
        >
          {number}
        </button>
      ))}
      <button 
        onClick={goToNextPage}
        className={`text-gray-400 hover:text-[#D84315] text-2xl transform hover:scale-110 transition-transform duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentPage === totalPages}
      >
        &#8250;
      </button>
      <button 
        onClick={goToLastPage}
        className={`text-gray-400 hover:text-[#D84315] text-2xl transform hover:scale-110 transition-transform duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentPage === totalPages}
      >
        &#187;
      </button>
    </div>
  );
};

export default Pagination;
