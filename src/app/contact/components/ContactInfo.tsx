'use client'

import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
import { useEffect } from 'react'

export default function ContactInfo() {
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
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-2">Get In Touch</h2>
        <div className="w-12 h-0.5 bg-[#D84315]"></div>
        <p className="text-gray-600 mt-4 text-center max-w-2xl">
          We're here to help with any questions about our products and services. 
          Reach out to us through any of the following channels.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* Location Section */}
        <div id="location" className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center scroll-mt-32 transition-all duration-500">
          <div className="w-16 h-16 bg-[#D84315]/10 rounded-full flex items-center justify-center mb-4">
            <MdLocationOn className="text-[#D84315] text-3xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Our Location</h3>
          <p className="text-gray-600 mb-4">
            Secure Matrix Headquarters<br />
            123 Industrial Area, Phase 2<br />
            Pune, Maharashtra 411057<br />
            India
          </p>
          <a 
            href="https://maps.google.com/maps?q=18.71150307086937,73.83990901335487&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D84315] font-medium hover:underline mt-auto"
          >
            View on Map
          </a>
        </div>

        {/* Phone Section */}
        <div id="phone" className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center scroll-mt-32 transition-all duration-500">
          <div className="w-16 h-16 bg-[#D84315]/10 rounded-full flex items-center justify-center mb-4">
            <MdPhone className="text-[#D84315] text-3xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p className="text-gray-600 mb-2">
            Sales & Support
          </p>
          <a 
            href="tel:+919999999999" 
            className="text-[#D84315] font-medium hover:underline"
          >
            +91 9999 999 999
          </a>
          <p className="text-gray-600 mt-4 mb-2">
            Office
          </p>
          <a 
            href="tel:+912012345678" 
            className="text-[#D84315] font-medium hover:underline"
          >
            +91 20 1234 5678
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Monday to Friday: 9:00 AM - 6:00 PM<br />
            Saturday: 9:00 AM - 1:00 PM
          </p>
        </div>

        {/* Email Section */}
        <div id="email" className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center scroll-mt-32 transition-all duration-500">
          <div className="w-16 h-16 bg-[#D84315]/10 rounded-full flex items-center justify-center mb-4">
            <MdEmail className="text-[#D84315] text-3xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-gray-600 mb-2">
            General Inquiries
          </p>
          <a 
            href="mailto:info@securematrix.com" 
            className="text-[#D84315] font-medium hover:underline"
          >
            info@securematrix.com
          </a>
          <p className="text-gray-600 mt-4 mb-2">
            Sales Department
          </p>
          <a 
            href="mailto:sales@securematrix.com" 
            className="text-[#D84315] font-medium hover:underline"
          >
            sales@securematrix.com
          </a>
          <p className="text-gray-600 mt-4 mb-2">
            Support
          </p>
          <a 
            href="mailto:support@securematrix.com" 
            className="text-[#D84315] font-medium hover:underline"
          >
            support@securematrix.com
          </a>
        </div>
      </div>
    </div>
  )
}
