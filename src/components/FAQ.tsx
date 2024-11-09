import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'What Is Sentry?',
      answer: 'Sentry is an AI-powered OT Cyber Intelligence Platform specializing in threat intelligence for operational technology (OT) environments. It helps organizations detect, analyze, and respond to cyber threats targeting OT systems, such as industrial control systems (ICS) and SCADA networks.'
    },
    {
      question: 'What Are Our Solutions?',
      answer: (
        <div className="space-y-4">
          <p>Sentry offers specialized OT threat intelligence solutions designed to monitor and mitigate risks in OT environments:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real-Time Threat Intelligence: Continuous monitoring of OT-specific threats from diverse sources.</li>
            <li>Risk Analysis & Exposure Insight: Detailed analysis of potential OT risks and real-time exposure tracking.</li>
            <li>Incident Response Support: Guidance on OT-specific threat responses, with real-time alerts and actionable insights.</li>
          </ul>
        </div>
      )
    },
    {
      question: 'Why Do I Need Sentry for My Business?',
      answer: 'Sentry provides essential threat intelligence for OT-focused organizations, helping them protect critical assets from cyber threats. By delivering early threat detection and real-time analysis, Sentry supports organizations in maintaining operational integrity and preventing costly disruptions.'
    },
    {
      question: 'What Are Our Packages?',
      answer: (
        <div className="space-y-4">
          <p>Sentry offers flexible packages to accommodate a range of OT threat intelligence needs:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Basic: Essential OT threat monitoring and real-time alerts.</li>
            <li>Professional: Enhanced intelligence with deeper analysis and exposure insights.</li>
            <li>Enterprise: Comprehensive threat intelligence with tailored support and integrations for critical infrastructure.</li>
          </ul>
        </div>
      )
    },
    {
      question: 'Who Needs the Solutions of Sentry?',
      answer: (
        <div className="space-y-4">
          <p>Sentry is ideal for sectors with OT systems, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Manufacturing</li>
            <li>Energy & Utilities</li>
            <li>Transportation</li>
            <li>Oil & Gas</li>
            <li>Water & Wastewater Treatment</li>
          </ul>
          <p>These industries rely on Sentry to monitor and respond to OT cybersecurity threats that could impact operational continuity.</p>
        </div>
      )
    },
    {
      question: 'What Distinguishes Sentry in the Cybersecurity Industry?',
      answer: 'Sentry is uniquely focused on OT threat intelligence. Unlike general cybersecurity solutions, Sentry is specifically designed to address the threats, risks, and operational requirements of OT environments, making it a trusted choice for industries that depend on secure and resilient infrastructure.'
    }
  ];

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div 
          key={index}
          className="bg-slate-800 rounded-lg overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-700 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-lg font-semibold text-white">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-cyan-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-cyan-500 flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 text-gray-300 bg-slate-800/50">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}