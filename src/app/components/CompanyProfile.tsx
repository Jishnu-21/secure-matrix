"use client";

import React from 'react';
import Image from 'next/image';
import { MdConstruction, MdPsychology, MdSecurity, MdFoundation, MdEco, MdVerified } from 'react-icons/md';
import Features from './Features';

const CompanyProfile = () => {
  return (
    <section id="company-profile" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden bg-white w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/hex-pattern.png")',
            backgroundSize: '800px',
            backgroundRepeat: 'repeat',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
        />
      </div>
      <div className="container mx-auto max-w-[1500px] relative z-10">
        <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Company Profile</h2>
          <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
        </div>
          
          <div className="mb-8 md:mb-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <p className="text-base md:text-lg mb-4 text-gray-800">
              Our Pune, Maharashtra, India-based enterprise, Secure Matrix Constro Engineering Solutions, is one of the most acclaimed names in the market. We are renowned for making super-fast deliveries of the finest-grade Mild Steel Fence Systems, Iron Boundary Wire Fencing, PVC Coated Wires, Square Stainless-Steel Gabion Mattresses, and more. Each item is manufactured to exacting industry standards.
            </p>
            <p className="text-base md:text-lg mb-4 text-gray-800">
              In addition to this product range, we provide highly effective customer services. Every service is executed in a punctual, ethical, and fair manner to greatly benefit our clients. We plan to continue operating with this same customer-centric approach and exceptional dedication in the future. This commitment will help us achieve our goal of becoming a leading name in the competitive Indian marketplace.
            </p>
          </div>
          
          {/* Key Features 
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16 w-full">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-start">
              <div className="mr-3 mt-1">
                <MdConstruction className="text-[#D84315] text-xl md:text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-base text-[#D84315] mb-1">Durable & Long-lasting</h3>
                <p className="text-sm text-gray-700">Built for strength and longevity</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-start">
              <div className="mr-3 mt-1">
                <MdSecurity className="text-[#D84315] text-xl md:text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-base text-[#D84315] mb-1">Corrosion-Resistant</h3>
                <p className="text-sm text-gray-700">Protected against rust and weather</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-start">
              <div className="mr-3 mt-1">
                <MdEco className="text-[#D84315] text-xl md:text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-base text-[#D84315] mb-1">Eco-Friendly</h3>
                <p className="text-sm text-gray-700">Sustainable and efficient materials</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-start">
              <div className="mr-3 mt-1">
                <MdPsychology className="text-[#D84315] text-xl md:text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-base text-[#D84315] mb-1">Innovation & Versatile</h3>
                <p className="text-sm text-gray-700">Solutions for diverse construction needs</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-start">
              <div className="mr-3 mt-1">
                <MdFoundation className="text-[#D84315] text-xl md:text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-base text-[#D84315] mb-1">Strong & Stable</h3>
                <p className="text-sm text-gray-700">Reinforced for structural integrity</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-start">
              <div className="mr-3 mt-1">
                <MdVerified className="text-[#D84315] text-xl md:text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-base text-[#D84315] mb-1">Reliable & Trusted</h3>
                <p className="text-sm text-gray-700">Quality backed by expertise</p>
              </div>
            </div>
          </div>*/}
      

          <Features/>
          
          {/* Company Facts Table */}
          <div className="mb-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-black inline-block relative">
              Key Facts of Secure Matrix Constro Engineering Solutions
              <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-[#D84315] opacity-70"></span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 w-full">
            {/* Left Column */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="bg-[#f8f8f8] p-4 border-b border-gray-200">
                <h4 className="font-semibold text-lg flex items-center">
                  <MdConstruction className="text-[#D84315] mr-2 text-xl" />
                  Company Information
                </h4>
              </div>
              
              <div className="divide-y divide-gray-100">
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">Nature of Business</div>
                  <div className="w-1/2">Manufacturer and Supplier</div>
                </div>
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">Year of Establishment</div>
                  <div className="w-1/2">2017</div>
                </div>
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">Location</div>
                  <div className="w-1/2">Pune, Maharashtra, India</div>
                </div>
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">Annual Turnover</div>
                  <div className="w-1/2">INR 60 Crore</div>
                </div>
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">Shipment Mode</div>
                  <div className="w-1/2">By Road</div>
                </div>
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">Payment Modes</div>
                  <div className="w-1/2">Online Payments (NEFT/RTGS/IMPS), Cheque/DD</div>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="bg-[#f8f8f8] p-4 border-b border-gray-200">
                <h4 className="font-semibold text-lg flex items-center">
                  <MdPsychology className="text-[#D84315] mr-2 text-xl" />
                  Team & Legal Information
                </h4>
              </div>
              
              <div className="divide-y divide-gray-100">
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">No. of Employees</div>
                  <div className="w-1/2">150</div>
                </div>
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">No. of Designers</div>
                  <div className="w-1/2">03</div>
                </div>
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">No. of Engineers</div>
                  <div className="w-1/2">15</div>
                </div>
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">No. of Production Units</div>
                  <div className="w-1/2">01</div>
                </div>
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">GST No.</div>
                  <div className="w-1/2">27ADBPH0138G1Z2</div>
                </div>
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">TAN No.</div>
                  <div className="w-1/2">PNEM30220B</div>
                </div>
                <div className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                  <div className="w-1/2 font-medium text-gray-700 pr-3">Bankers</div>
                  <div className="w-1/2">Canara Bank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
