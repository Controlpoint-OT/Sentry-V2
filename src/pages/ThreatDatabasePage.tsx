import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThreatDatabase } from '../components/ThreatDatabase';

export function ThreatDatabasePage() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Threats Database
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto text-center">
          Comprehensive database of OT-specific threats, vulnerabilities, and security advisories from leading sources including ICS-CERT, NVD, Shodan, and vendor-specific security advisories.
        </p>
        <ThreatDatabase initialSearch={initialSearch} />
      </div>
    </section>
  );
}