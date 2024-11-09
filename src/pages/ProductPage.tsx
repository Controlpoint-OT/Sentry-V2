import React, { useState } from 'react';
import { DemoRequestModal } from '../components/DemoRequestModal';
import { Shield, AlertTriangle, Activity, Lock } from 'lucide-react';

export function ProductPage() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">
            OT Threat Intelligence with Sentry
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Empowering Operational Technology Security
          </p>
          <p className="text-gray-400 mb-8">
            Sentry's OT Threat Intelligence platform is purpose-built to provide real-time insights and proactive defense against evolving threats targeting OT environments, from industrial control systems to SCADA networks. With our comprehensive monitoring and AI-driven analysis, OT organizations gain the intelligence needed to safeguard critical infrastructure and maintain operational continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-slate-800 p-6 rounded-lg">
            <Shield className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced OT Threat Detection</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Proactively identify vulnerabilities in OT systems</li>
              <li>• Monitor threats from OT-targeted sources</li>
              <li>• Real-time threat analysis and alerts</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <AlertTriangle className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Real-Time OT Threat Intelligence</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Continuous threat data analysis</li>
              <li>• Track and prioritize vulnerabilities</li>
              <li>• Immediate response capabilities</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <Activity className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Risk Assessment & Exposure</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• OT-focused risk analysis</li>
              <li>• Comprehensive exposure insights</li>
              <li>• Prioritized mitigation strategies</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <Lock className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Automated Response</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Automated & manual responses</li>
              <li>• OT-specific playbooks</li>
              <li>• Customizable workflows</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Why Choose Sentry for OT Threat Intelligence?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Purpose-Built for OT</h3>
              <p className="text-gray-400">
                Unlike traditional IT solutions, Sentry is designed exclusively to meet the unique security requirements of OT environments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Uncover Hidden OT Threats</h3>
              <p className="text-gray-400">
                Our platform offers unparalleled visibility into threats that specifically target OT systems, leveraging AI to detect subtle indicators before damage occurs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Maintain Compliance</h3>
              <p className="text-gray-400">
                Stay aligned with OT security regulations like IEC 62443 and NERC CIP, with features built to support compliance requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Support for Critical Infrastructure</h3>
              <p className="text-gray-400">
                Protect industrial operations and critical infrastructure with intelligence crafted for high-stakes OT environments.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience Sentry's OT Threat Intelligence
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how Sentry's OT Threat Intelligence platform can provide the proactive defense needed to secure your OT assets.
          </p>
          <button
            onClick={() => setShowDemoModal(true)}
            className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold"
          >
            Request a Demo
          </button>
        </div>
      </div>

      <DemoRequestModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </div>
  );
}