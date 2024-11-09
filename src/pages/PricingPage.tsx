import { useState } from 'react';
import { DemoRequestModal } from '../components/DemoRequestModal';
import { PaymentModal } from '../components/PaymentModal';
import { Shield, Check } from 'lucide-react';

export function PricingPage() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null);

  const plans = [
    {
      name: 'Basic',
      description: 'Essential OT threat monitoring and real-time alerts',
      price: '$499',
      features: [
        'Real-time OT threat monitoring',
        'Basic threat alerts',
        'Daily threat reports',
        'Email support',
        'Up to 5 users'
      ]
    },
    {
      name: 'Professional',
      description: 'Enhanced intelligence with deeper analysis and exposure insights',
      price: '$999',
      features: [
        'All Basic features',
        'Advanced threat analysis',
        'Custom alert rules',
        'Weekly intelligence briefings',
        'Priority email & phone support',
        'Up to 20 users',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive threat intelligence with tailored support',
      price: 'Custom',
      features: [
        'All Professional features',
        'Custom integration support',
        'Dedicated account manager',
        '24/7 premium support',
        'Unlimited users',
        'Custom reporting',
        'On-premise deployment option',
        'Advanced API features'
      ]
    }
  ];

  const handleGetStarted = (plan: { name: string; price: string }) => {
    if (plan.price === 'Custom') {
      setShowDemoModal(true);
    } else {
      setSelectedPlan(plan);
      setShowPaymentModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan to secure your OT environment with our advanced threat intelligence platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-cyan-500 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
                </div>
                <Shield className="h-8 w-8 text-cyan-500" />
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-cyan-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleGetStarted(plan)}
                className="w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-semibold"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      <DemoRequestModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
      {selectedPlan && (
        <PaymentModal 
          isOpen={showPaymentModal} 
          onClose={() => {
            setShowPaymentModal(false);
            setSelectedPlan(null);
          }}
          planName={selectedPlan.name}
          planPrice={selectedPlan.price}
        />
      )}
    </div>
  );
}