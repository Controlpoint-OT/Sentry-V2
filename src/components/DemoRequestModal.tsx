import React from 'react';
import { X, Building2, Mail, User, Phone, MessageSquare } from 'lucide-react';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoRequestModal({ isOpen, onClose }: DemoRequestModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-slate-800 rounded-lg p-8 w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Request a Demo</h2>
          <p className="text-gray-400">
            Experience how Sentry can protect your OT infrastructure. Fill out the form below and our team will contact you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="name"
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Business Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
              Company Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="company"
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                placeholder="Company Inc."
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message (Optional)
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea
                id="message"
                rows={4}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                placeholder="Tell us about your OT security needs..."
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold"
          >
            Request Demo
          </button>
        </form>
      </div>
    </div>
  );
}