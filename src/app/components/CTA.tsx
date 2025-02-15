"use client";

import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 md:py-24 px-4">
      <div className="container mx-auto max-w-[80%]">
        {/* CTA Container */}
        <div className="relative overflow-hidden bg-[#E9B5A8] w-full mx-auto">
          {/* Background Pattern - Left */}
          <div className="absolute left-0 top-0 w-[50%] h-full opacity-10 pointer-events-none">
            <Image
              src="/images/hex-pattern.png"
              alt="Background pattern"
              fill
              className="object-cover origin-left scale-125"
            />
          </div>

          {/* Background Pattern - Right */}
          <div className="absolute right-0 top-0 w-[50%] h-full opacity-10 pointer-events-none">
            <Image
              src="/images/hex-pattern.png"
              alt="Background pattern"
              fill
              className="object-cover origin-right scale-125 rotate-180"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 py-20 md:py-24 px-8 md:px-16">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
              Build Stronger, Safer Environments with Us 
              </h2>
              <p className="text-white/90 text-base md:text-lg mb-12 leading-relaxed">
                Maximisez votre croissance en discutant avec nos experts. Recevez dès maintenant un entretien en ligne pour bénéficier de conseils personnalisés et booster votre activité commerciale.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-medium hover:bg-white/90 transition-colors duration-300"
              >
                Contact us
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5"
                >
                  <path
                    d="M1 8H15M15 8L8 1M15 8L8 15"
                    stroke="currentColor"
                    strokeWidth="2"
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
