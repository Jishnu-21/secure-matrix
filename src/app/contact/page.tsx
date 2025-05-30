"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { useEffect } from 'react';

const Contact = () => {
  // Handle scroll to section with animation and offset
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the hash without the # symbol
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          // Scroll to the element with offset for the fixed header
          const headerOffset = 120; // Adjust based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Add highlight animation
          element.classList.add('highlight-section');
          
          // Remove highlight after animation completes
          setTimeout(() => {
            element.classList.remove('highlight-section');
          }, 2000);
        }, 300);
      }
    }
  }, []);

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
            {/* Section Title */}
            <div className="container max-w-6xl mx-auto px-4">
              <div className="flex flex-col items-center mb-8">
                <h1 className="text-3xl font-bold text-black mb-2">Contact us</h1>
                <div className="w-12 h-0.5 bg-[#D84315]"></div>
              </div>
            </div>

            {/* Location Section with Map */}
            <section id="location" className="py-12 scroll-mt-32 transition-all duration-500">
              <div className="container max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-4 md:gap-0">
                  <div className="w-full h-[400px] md:h-[500px]">
                    <iframe 
                      src="https://maps.google.com/maps?q=18.71150307086937,73.83990901335487&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                  <div className="flex flex-col bg-[#e6eaf0] p-8 min-h-[400px] md:min-h-[500px]">
                    <div className="flex flex-col items-center mb-8">
                      <h2 className="text-xl font-bold text-black mb-2">
                      Get in touch for inquiries, support, or collaboration. We're here to assist you.
                      </h2>
                      <div className="w-12 h-0.5 bg-[#D84315]"></div>
                    </div>
                    <form className="space-y-6 flex-grow">
                      <div>
                        <input
                          placeholder="Name"
                          className="w-full bg-white border-0 text-black placeholder:text-gray-500 h-12 shadow-sm px-4 rounded-md"
                        />
                      </div>
                      <div>
                        <input
                          placeholder="Email"
                          type="email"
                          className="w-full bg-white border-0 text-black placeholder:text-gray-500 h-12 shadow-sm px-4 rounded-md"
                        />
                      </div>
                      <div className="flex-grow">
                        <textarea
                          placeholder="Message"
                          className="w-full min-h-[240px] bg-white border-0 text-black placeholder:text-gray-500 shadow-sm p-4 rounded-md"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button 
                          type="submit" 
                          className="w-24 bg-[#D84315] hover:bg-[#BF360C] text-white h-10 rounded-md"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            {/* Phone Section */}
            <section id="phone" className="py-12 bg-white scroll-mt-32 transition-all duration-500">
              <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center mb-8">
                  <div className="w-16 h-16 bg-[#D84315]/10 rounded-full flex items-center justify-center mb-4">
                    <MdPhone className="text-[#D84315] text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-black mb-2">Contact by Phone</h2>
                  <div className="w-12 h-0.5 bg-[#D84315] mb-4"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-[#f8f8f8] rounded-lg shadow-md p-8 text-center">
                    <h3 className="text-xl font-bold mb-4">Sales Department</h3>
                    <a 
                      href="tel:+919999999999" 
                      className="text-[#D84315] text-xl font-medium hover:underline block mb-2"
                    >
                      +91 9999 999 999
                    </a>
                    <p className="text-gray-600">For product inquiries and quotes</p>
                  </div>
                  
                  <div className="bg-[#f8f8f8] rounded-lg shadow-md p-8 text-center">
                    <h3 className="text-xl font-bold mb-4">Customer Support</h3>
                    <a 
                      href="tel:+919888888888" 
                      className="text-[#D84315] text-xl font-medium hover:underline block mb-2"
                    >
                      +91 9888 888 888
                    </a>
                    <p className="text-gray-600">For technical assistance and support</p>
                  </div>
                  
                  <div className="bg-[#f8f8f8] rounded-lg shadow-md p-8 text-center">
                    <h3 className="text-xl font-bold mb-4">Office</h3>
                    <a 
                      href="tel:+912012345678" 
                      className="text-[#D84315] text-xl font-medium hover:underline block mb-2"
                    >
                      +91 20 1234 5678
                    </a>
                    <p className="text-gray-600">For general inquiries</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-700 font-medium">Business Hours</p>
                  <p className="text-gray-600">Monday to Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </section>

            {/* Email Section */}
            <section id="email" className="py-12 scroll-mt-32 transition-all duration-500">
              <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center mb-8">
                  <div className="w-16 h-16 bg-[#D84315]/10 rounded-full flex items-center justify-center mb-4">
                    <MdEmail className="text-[#D84315] text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-black mb-2">Email Us</h2>
                  <div className="w-12 h-0.5 bg-[#D84315] mb-4"></div>
                  <p className="text-gray-600 mb-8 text-center max-w-2xl">
                    Choose the appropriate email address based on your inquiry. Our team will respond within 24 hours on business days.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-[#f8f8f8] rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-4">General Inquiries</h3>
                    <a 
                      href="mailto:info@securematrix.com" 
                      className="text-[#D84315] text-lg font-medium hover:underline block mb-2"
                    >
                      info@securematrix.com
                    </a>
                    <p className="text-gray-600">For general questions and information</p>
                  </div>
                  
                  <div className="bg-[#f8f8f8] rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-4">Sales Department</h3>
                    <a 
                      href="mailto:sales@securematrix.com" 
                      className="text-[#D84315] text-lg font-medium hover:underline block mb-2"
                    >
                      sales@securematrix.com
                    </a>
                    <p className="text-gray-600">For product inquiries and quotes</p>
                  </div>
                  
                  <div className="bg-[#f8f8f8] rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-4">Technical Support</h3>
                    <a 
                      href="mailto:support@securematrix.com" 
                      className="text-[#D84315] text-lg font-medium hover:underline block mb-2"
                    >
                      support@securematrix.com
                    </a>
                    <p className="text-gray-600">For technical assistance and support</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
