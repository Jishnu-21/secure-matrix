"use client";

import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative py-15 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative bg-[#DA491A] rounded-lg overflow-hidden">
          {/* Background Pattern - Left */}
          <div className="absolute left-0 top-0 w-full md:w-[50%] h-full opacity-10 pointer-events-none">
            <Image
              src="/images/hex-pattern.png"
              alt="Background pattern"
              fill
              className="object-cover origin-left scale-110 md:scale-125"
            />
          </div>

          {/* Background Pattern - Right */}
          <div className="absolute right-0 top-0 w-full md:w-[50%] h-full opacity-10 pointer-events-none">
            <Image
              src="/images/hex-pattern.png"
              alt="Background pattern"
              fill
              className="object-cover origin-right scale-110 md:scale-125 rotate-180"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 px-4 md:px-12 py-12 md:py-20">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-medium text-white mb-4 md:mb-6">
                Build Stronger, Safer Environments with Us 
              </h2>
              <p className="text-white mb-6">
                We are committed to creating safer, more resilient environments for you and your loved ones. Our innovative solutions are designed to address the challenges of today's construction and infrastructure needs, ensuring that your projects are not only completed on time but also delivered with the highest level of safety and quality.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-white text-[#DA491A] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-white/90 transition-colors duration-300 rounded group"
              >
                Contact us
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transform group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
