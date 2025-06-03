"use client";

import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import PopularProducts from './components/PopularProducts';
import LogoMarquee from './components/LogoMarquee';
import LatestNews from './components/LatestNews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CompanyProfile from './components/CompanyProfile';
import Certifications from './components/Certifications';

const Page = () => {
    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <Header />
            <main>
                <Banner />
                <CompanyProfile />
                <Certifications />
                
                <div className="relative bg-[#FAFAFA]">
                  {/* Main Content */}
                  <div className="relative z-20 space-y-6 md:space-y-10">
                    <Features />
                    <Products />
                    <WhyChooseUs />
                    <PopularProducts />
                  </div>
                  {/* Testimonials with full background */}
                  <div className="relative mt-6 md:mt-10">
                    <div 
                      className="absolute inset-0 z-0"
                      style={{
                        backgroundImage: 'url("/images/hex-pattern.png")',
                        backgroundSize: '800px',
                        backgroundRepeat: 'repeat',
                        opacity: 0.6,
                        mixBlendMode: 'multiply'
                      }}
                    />
                  </div>

                  {/* Logo Marquee with extended background */}
                  <div className="relative mt-6 md:mt-10">
                    <div 
                      className="absolute inset-0 z-0"
                      style={{
                        backgroundImage: 'url("/images/hex-pattern.png")',
                        backgroundSize: '800px',
                        backgroundRepeat: 'repeat',
                        opacity: 0.6,
                        mixBlendMode: 'multiply'
                      }}
                    />
                    <div className="relative z-20">
                      <LogoMarquee />
                    </div>
                  </div>

                  {/* Remaining Content */}
                  <div className="relative z-20 mt-6 md:mt-10">
                    <LatestNews />
                    <CTA />
                  </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Page;