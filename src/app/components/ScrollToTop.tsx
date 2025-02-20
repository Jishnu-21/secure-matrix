'use client';

import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-24 z-50 transition-all duration-500 ease-out ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-16 opacity-0'
    }`}>
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative p-3 rounded-full bg-[#DA491A] shadow-lg transform transition-all duration-300 hover:bg-[#ff6b3d] hover:shadow-xl group"
        aria-label="Scroll to top"
      >
        {/* Ripple effect */}
        <div className={`absolute inset-0 rounded-full bg-white opacity-30 transition-transform duration-500 ${
          isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-0'
        }`} />
        
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full">
          <div className={`absolute inset-0 rounded-full border-2 border-[#DA491A] transition-all duration-1000 ${
            isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-0'
          }`} />
          <div className={`absolute inset-0 rounded-full border-2 border-[#DA491A] transition-all duration-1000 delay-200 ${
            isHovered ? 'scale-175 opacity-0' : 'scale-100 opacity-0'
          }`} />
        </div>

        {/* Icon */}
        <svg
          className={`w-6 h-6 text-white transform transition-all duration-500 ${
            isHovered ? '-translate-y-1 scale-110' : 'translate-y-0 scale-100'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>

        {/* Tooltip */}
        <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-gray-800 text-white text-sm rounded transition-all duration-300 ${
          isHovered ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-1'
        }`}>
          Scroll to top
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;
