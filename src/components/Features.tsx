import React from 'react';
import { Shield, Bell, Lock, FileText, DollarSign, Headphones } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Proactive OT Threat Detection',
      description: 'Early warnings of OT-specific threats through continuous dark web monitoring.'
    },
    {
      icon: Bell,
      title: 'Rapid Response',
      description: 'Quick initiation of security protocols and team alerts for immediate action.'
    },
    {
      icon: Lock,
      title: 'Operational Confidence',
      description: 'Enhanced resilience for ICS, SCADA, and critical OT infrastructure.'
    },
    {
      icon: FileText,
      title: 'Regulatory Compliance',
      description: 'Support for NERC CIP, IEC 62443, and NIST 800-82 compliance requirements.'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Protection',
      description: 'Minimize costly impacts of security incidents and operational downtime.'
    },
    {
      icon: Headphones,
      title: 'Specialized Support',
      description: 'Dedicated team of OT security experts available for threat response.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="p-6 bg-slate-800 rounded-lg">
          <feature.icon className="h-12 w-12 text-cyan-500 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}