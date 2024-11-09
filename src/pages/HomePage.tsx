import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { ThreatMap } from '../components/ThreatMap';
import { Features } from '../components/Features';
import { OEMVendors } from '../components/OEMVendors';
import { FAQ } from '../components/FAQ';
import { DemoRequestModal } from '../components/DemoRequestModal';

export function HomePage() {
  const [text, setText] = React.useState('Fortifying Operations with ');
  const [showDemoModal, setShowDemoModal] = useState(false);
  const fullText = "Proactive Threat Detection";
  
  React.useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText('Fortifying Operations with ' + fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 min-h-[3em]">
            {text}<span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            AI-Powered OT Threat Intelligence platform focusing on identifying, analyzing, and alerting on OT-specific cyber threats.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Threat Map Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Global OT Threat Intelligence Map
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto text-center">
            Real-time visualization of cyber threats impacting OT environments worldwide. Monitor attack patterns, severity levels, and emerging threats as they unfold.
          </p>
          <ThreatMap />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Sentry?
          </h2>
          <Features />
        </div>
      </section>

      {/* OEM Vendors Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <OEMVendors />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your OT Infrastructure?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Get started with Sentry today and protect your operational technology
            against evolving cyber threats.
          </p>
          <button 
            onClick={() => setShowDemoModal(true)}
            className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors text-lg font-semibold"
          >
            Request a Demo
          </button>
        </div>
      </section>

      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
}