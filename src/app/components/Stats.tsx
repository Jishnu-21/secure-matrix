"use client";

import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  endNumber: number;
  text: string;
  prefix?: string;
  suffix?: string;
}

const StatItem = ({ endNumber, text, prefix = '', suffix = '' }: StatItemProps) => {
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
    <div ref={elementRef} className="flex flex-col items-center space-y-2">
      <p className="text-[#FF4A17] font-medium text-3xl md:text-4xl">
        {prefix}{number}{suffix}
      </p>
      <p className="text-sm md:text-base text-gray-600">No. of {text}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="relative -mt-16 mx-auto w-full max-w-[1400px] bg-white rounded shadow-xl py-10 px-8 md:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 justify-items-center max-w-[1200px] mx-auto">
        <StatItem endNumber={25} text="Engineers" suffix=" ans" />
        <StatItem endNumber={500} text="Engineers" prefix="+" />
        <StatItem endNumber={98} text="Engineers" suffix="%" />
        <StatItem endNumber={10} text="Engineers" prefix="+" suffix="K" />
      </div>
    </div>
  );
};

export default Stats;
