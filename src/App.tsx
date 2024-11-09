import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ThreatDatabasePage } from './pages/ThreatDatabasePage';
import { ProductPage } from './pages/ProductPage';
import { PricingPage } from './pages/PricingPage';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/threats" element={<ThreatDatabasePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}