"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CTA from "../components/CTA";
import Hero from "./components/Hero";
import AboutContent from "./components/AboutContent";

const About = () => {
  return (
    <>
      <Header/>
      <main className="bg-[#FAFAFA] relative min-h-screen">
        {/* Background Pattern Container */}
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: 'url("/images/hex-pattern.png")',
            backgroundSize: '800px',
            backgroundRepeat: 'repeat',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
        />

        {/* Content */}
        <div className="relative z-20">
          <Hero />
          <AboutContent />
          <CTA/>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
