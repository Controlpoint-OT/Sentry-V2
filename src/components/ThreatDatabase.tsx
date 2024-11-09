import React, { useState, useEffect } from 'react';
import { Search, Filter, AlertTriangle, ExternalLink, Shield, Activity, Bell } from 'lucide-react';

interface Threat {
  oem: string;
  description: string;
  cvssScore: number;
  impact: string;
  source: string;
  sourceUrl: string;
  date?: string;
}

interface ThreatDatabaseProps {
  initialSearch?: string;
}

export function ThreatDatabase({ initialSearch = '' }: ThreatDatabaseProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedOEM, setSelectedOEM] = useState<string>('all');
  const [minCVSS, setMinCVSS] = useState<number>(0);

  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

  // Statistics data
  const stats = {
    totalThreats: 3847,
    activeThreats: 256,
    criticalAlerts: 43,
    highSeverity: 189
  };

  const threats: Threat[] = [
    {
      oem: "Siemens",
      description: "Multiple vulnerabilities in Siemens SIMATIC S7-1200 and S7-1500 PLCs, allowing remote code execution.",
      cvssScore: 9.8,
      impact: "Unauthorized control over industrial processes, leading to operational disruptions.",
      source: "ICS-CERT Advisory",
      sourceUrl: "https://www.cisa.gov/ics-cert",
      date: "2024-03-15"
    },
    {
      oem: "Rockwell Automation",
      description: "Critical vulnerability in FactoryTalk View SE allowing unauthorized remote access (CVE-2024-1234)",
      cvssScore: 9.5,
      impact: "Complete system takeover and potential manipulation of industrial processes",
      source: "NVD",
      sourceUrl: "https://nvd.nist.gov/",
      date: "2024-03-10"
    },
    // ... (rest of the threats array remains the same)
  ];

  const uniqueOEMs = ['all', ...new Set(threats.map(threat => threat.oem))];

  const filteredThreats = threats.filter(threat => {
    const matchesSearch = threat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         threat.oem.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesOEM = selectedOEM === 'all' || threat.oem === selectedOEM;
    const matchesCVSS = threat.cvssScore >= minCVSS;
    return matchesSearch && matchesOEM && matchesCVSS;
  });

  const getCVSSColor = (score: number) => {
    if (score >= 9.0) return 'text-red-500';
    if (score >= 7.0) return 'text-orange-500';
    return 'text-yellow-500';
  };

  const getCVSSSeverity = (score: number) => {
    if (score >= 9.0) return 'Critical';
    if (score >= 7.0) return 'High';
    if (score >= 4.0) return 'Medium';
    return 'Low';
  };

  return (
    <div className="space-y-6">
      {/* Statistics Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-cyan-500" />
            <div>
              <p className="text-gray-400">Total Threats</p>
              <p className="text-2xl font-bold text-white">{stats.totalThreats.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center gap-3">
            <Activity className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-gray-400">Active Threats</p>
              <p className="text-2xl font-bold text-white">{stats.activeThreats.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <div>
              <p className="text-gray-400">Critical Alerts</p>
              <p className="text-2xl font-bold text-white">{stats.criticalAlerts.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="flex items-center gap-3">
            <Bell className="h-8 w-8 text-orange-500" />
            <div>
              <p className="text-gray-400">High Severity</p>
              <p className="text-2xl font-bold text-white">{stats.highSeverity.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-slate-800 rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search threats by OEM or description..."
              className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select
              className="px-4 py-3 bg-slate-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500"
              value={selectedOEM}
              onChange={(e) => setSelectedOEM(e.target.value)}
            >
              {uniqueOEMs.map(oem => (
                <option key={oem} value={oem}>
                  {oem === 'all' ? 'All OEMs' : oem}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <input
                type="number"
                min="0"
                max="10"
                step="0.1"
                placeholder="Min CVSS"
                className="w-24 px-3 py-3 bg-slate-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500"
                value={minCVSS}
                onChange={(e) => setMinCVSS(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredThreats.map((threat, index) => (
            <div key={index} className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`h-6 w-6 ${getCVSSColor(threat.cvssScore)}`} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{threat.oem}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-400">{threat.source}</span>
                      <a 
                        href={threat.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 hover:text-cyan-400 inline-flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span className="text-sm">View Source</span>
                      </a>
                      {threat.date && (
                        <span className="text-sm text-gray-400">| {threat.date}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`font-mono text-lg ${getCVSSColor(threat.cvssScore)}`}>
                    CVSS: {threat.cvssScore}
                  </span>
                  <div className="text-sm text-gray-400 mt-1">
                    Severity: {getCVSSSeverity(threat.cvssScore)}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-3 text-lg leading-relaxed">{threat.description}</p>
              <div className="bg-slate-800/50 rounded p-3 mt-4">
                <p className="text-gray-400">
                  <span className="font-semibold text-gray-300">Potential Impact: </span>
                  {threat.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}