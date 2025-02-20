'use client';

import { terms, privacyPolicy } from '@/lib/data/terms';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsPage() {
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);
  const [expandedPrivacySections, setExpandedPrivacySections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const togglePrivacySection = (index: number) => {
    setExpandedPrivacySections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <Header />
      <main className="pt-32 text-[#363636]"> 
        <div className="container mx-auto px-4 py-8 max-w-4xl bg-[var(--background)]">
          {/* Terms Header */}
          <h1 className="text-4xl font-bold text-center mb-8">
            Terms and Conditions
          </h1>

          {/* Terms Sections */}
          <div className="mb-12">
            {terms.map((section, index) => (
              <div key={index} className="mb-4 border border-[#363636] border-opacity-20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-4 py-3 bg-[var(--background)] hover:bg-opacity-80 flex justify-between items-center text-left border-b border-[#363636] border-opacity-20"
                >
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <span className="text-2xl">{expandedSections.includes(index) ? '−' : '+'}</span>
                </button>
                {expandedSections.includes(index) && (
                  <div className="px-4 py-3">
                    <p className="opacity-90 whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Privacy Policy Section */}
          <div className="border-t border-[#363636] border-opacity-20 my-12"></div>
          
          <h2 className="text-3xl font-bold text-center mb-8">
            {privacyPolicy.title}
          </h2>

          <div>
            {privacyPolicy.sections.map((section, index) => (
              <div key={index} className="mb-4 border border-[#363636] border-opacity-20 rounded-lg overflow-hidden">
                <button
                  onClick={() => togglePrivacySection(index)}
                  className="w-full px-4 py-3 bg-[var(--background)] hover:bg-opacity-80 flex justify-between items-center text-left border-b border-[#363636] border-opacity-20"
                >
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <span className="text-2xl">{expandedPrivacySections.includes(index) ? '−' : '+'}</span>
                </button>
                {expandedPrivacySections.includes(index) && (
                  <div className="px-4 py-3">
                    <p className="opacity-90 whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
