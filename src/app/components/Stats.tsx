"use client";

import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  endNumber: number;
  text: string;
  prefix?: string;
  suffix?: string;
  isYear?: boolean;
}

const StatItem = ({ endNumber, text, prefix = '', suffix = '', isYear = false }: StatItemProps) => {
  const [number, setNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = endNumber / steps;
    let current = 0;
    let timer: NodeJS.Timeout;

    const updateNumber = () => {
      current += increment;
      if (current >= endNumber) {
        setNumber(endNumber);
      } else {
        setNumber(Math.floor(current));
        timer = setTimeout(updateNumber, stepDuration);
      }
    };

    updateNumber();

    return () => clearTimeout(timer);
  }, [isVisible, endNumber]);

  return (
    <div ref={elementRef} className="flex flex-col items-center space-y-1 sm:space-y-2">
      <p className="text-[#FF4A17] font-medium text-2xl sm:text-3xl lg:text-4xl">
        {prefix}{number}{suffix}
      </p>
      <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-center">{isYear ? text : `No. of ${text}`}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="relative -mt-12 sm:-mt-16 mx-4 lg:mx-auto w-[calc(100%-2rem)] sm:w-[85%] lg:w-[80%] max-w-[1400px]">
      <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-16 border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-16 justify-items-center max-w-[1200px] mx-auto">
          <StatItem endNumber={2017} text="Established in" isYear={true} />
          <StatItem endNumber={15} text="Engineers" />
          <StatItem endNumber={3} text="Designers" />
          <StatItem endNumber={50} text="Employees" suffix="+" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
