import React from 'react';
import { MdVerified } from 'react-icons/md';

const Certifications = () => {
  const certifications = [
    { name: "BUREAU OF INDIAN STANDARDS CERTIFIED", image: "/images/certifications/bis.png" },
    { name: "IS 16014:2018 CERTIFIED", image: "/images/certifications/isi.png" },
    { name: "ISO 9001 CERTIFIED", image: "/images/certifications/iso9001.png" },
    { name: "ISO 14001 CERTIFIED", image: "/images/certifications/iso14001.png" },
    { name: "ISO 45001 CERTIFIED", image: "/images/certifications/iso45001.png" },
    { name: "CE MARK CERTIFIED", image: "/images/certifications/ce.svg" },
  ];

  return (
    <section id="certifications" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
            <MdVerified className="text-[#D84315] mr-2" size={32} />
            Our Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Secure Matrix adheres to the highest industry standards with multiple certifications that validate our commitment to quality, safety, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-32 w-full flex items-center justify-center">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-center text-gray-700">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
