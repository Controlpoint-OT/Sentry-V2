import React from 'react';
import { X, CreditCard, User, Mail, Calendar, Lock } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: string;
}

export function PaymentModal({ isOpen, onClose, planName, planPrice }: PaymentModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle payment processing
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
          <h2 className="text-2xl font-bold text-white mb-2">Complete Your Purchase</h2>
          <p className="text-gray-400 mb-4">
            {planName} Plan - {planPrice}
            {planPrice !== 'Custom' && '/month'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Cardholder Name
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
              Email Address
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
            <label htmlFor="card" className="block text-sm font-medium text-gray-400 mb-2">
              Card Number
            </label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="card"
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                placeholder="1234 5678 9012 3456"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-400 mb-2">
                Expiry Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="expiry"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                  placeholder="MM/YY"
                />
              </div>
            </div>

            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-400 mb-2">
                CVV
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="cvv"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
                  placeholder="123"
                />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold"
          >
            Complete Purchase
          </button>

          <p className="text-center text-sm text-gray-400">
            Your payment information is securely processed and encrypted.
          </p>
        </form>
      </div>
    </div>
  );
}