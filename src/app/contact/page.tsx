"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <>
      <Header/>
      <main className="bg-[#FAFAFA] relative min-h-screen pb-10">
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
        <div className="relative z-10 pt-16 md:pt-32 pb-10 md:pb-20">
          {/* Content */}
          <div className="relative z-20">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
