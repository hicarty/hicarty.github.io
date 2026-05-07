"use client";

import { useState } from "react";

interface MarketSegment {
  id: "tam" | "sam" | "som";
  label: string;
  fullName: string;
  value: string;
  description: string;
  color: string;
  details: string[];
}

const marketData: MarketSegment[] = [
  {
    id: "tam",
    label: "TAM",
    fullName: "Total Addressable Market",
    value: "£42B",
    description: "Global IoT & Smart Office Devices Export Market",
    color: "var(--gold-primary)",
    details: [
      "Global Cluster Devices export opportunity",
      "Smart office systems worldwide",
      "IoT infrastructure deployments",
      "Enterprise automation solutions"
    ]
  },
  {
    id: "sam",
    label: "SAM",
    fullName: "Serviceable Available Market",
    value: "£8.5B",
    description: "UK & Ireland Energy and Smart Home IoT",
    color: "var(--teal-primary)",
    details: [
      "UK smart home device market",
      "Ireland IoT infrastructure",
      "Energy management systems",
      "Residential & commercial automation"
    ]
  },
  {
    id: "som",
    label: "SOM",
    fullName: "Serviceable Obtainable Market",
    value: "£850M",
    description: "UK Midlands Commercial IoT Services",
    color: "var(--signal-positive)",
    details: [
      "Birmingham tech corridor",
      "Nottingham smart office deployments",
      "Leicester commercial IoT",
      "Cultural Quarter 4 innovation hub"
    ]
  }
];

export function TamSamSom() {
  const [activeSegment, setActiveSegment] = useState<MarketSegment>(marketData[0]);

  return (
    <div className="glass-card rounded-xl p-8">
      <div className="text-center mb-8">
        <span className="text-xs text-[var(--teal-primary)] font-mono tracking-wider">CLUSTER TECHNOLOGY LIMITED</span>
        <h3 className="text-3xl font-bold mt-2 mb-3">Market Opportunity Analysis</h3>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
          First venture investment: Cluster Devices for IoT and Smart Office solutions,
          scaling from UK Midlands to global export markets.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative flex items-center justify-center py-8">
          <svg viewBox="0 0 400 400" className="w-full max-w-md">
            <circle cx="200" cy="200" r="180" fill="none" stroke="var(--gold-primary)"
              strokeWidth={activeSegment.id === "tam" ? "4" : "2"}
              opacity={activeSegment.id === "tam" ? 1 : 0.3}
              className="transition-all duration-300 cursor-pointer"
              onClick={() => setActiveSegment(marketData[0])}
            />
            <circle cx="200" cy="200" r="180" fill="var(--gold-muted)"
              opacity={activeSegment.id === "tam" ? 0.3 : 0.1}
              className="cursor-pointer" onClick={() => setActiveSegment(marketData[0])}
            />
            <circle cx="200" cy="200" r="120" fill="none" stroke="var(--teal-primary)"
              strokeWidth={activeSegment.id === "sam" ? "4" : "2"}
              opacity={activeSegment.id === "sam" ? 1 : 0.3}
              className="transition-all duration-300 cursor-pointer"
              onClick={() => setActiveSegment(marketData[1])}
            />
            <circle cx="200" cy="200" r="120" fill="var(--teal-muted)"
              opacity={activeSegment.id === "sam" ? 0.4 : 0.15}
              className="cursor-pointer" onClick={() => setActiveSegment(marketData[1])}
            />
            <circle cx="200" cy="200" r="60" fill="none" stroke="var(--signal-positive)"
              strokeWidth={activeSegment.id === "som" ? "4" : "2"}
              opacity={activeSegment.id === "som" ? 1 : 0.3}
              className="transition-all duration-300 cursor-pointer"
              onClick={() => setActiveSegment(marketData[2])}
            />
            <circle cx="200" cy="200" r="60" fill="rgba(34, 197, 94, 0.2)"
              opacity={activeSegment.id === "som" ? 0.5 : 0.2}
              className="cursor-pointer" onClick={() => setActiveSegment(marketData[2])}
            />
            <text x="200" y="45" textAnchor="middle" fill="var(--gold-primary)" className="text-sm font-mono">TAM £42B</text>
            <text x="200" y="105" textAnchor="middle" fill="var(--teal-primary)" className="text-sm font-mono">SAM £8.5B</text>
            <text x="200" y="205" textAnchor="middle" fill="var(--signal-positive)" className="text-sm font-bold font-mono">SOM</text>
            <text x="200" y="225" textAnchor="middle" fill="var(--signal-positive)" className="text-xs font-mono">£850M</text>
          </svg>
        </div>

        <div className="space-y-6">
          <div className="flex gap-2">
            {marketData.map((segment) => (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(segment)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                  activeSegment.id === segment.id
                    ? "bg-[var(--dark-elevated)] border-2"
                    : "bg-transparent border border-[var(--dark-border)] opacity-60 hover:opacity-100"
                }`}
                style={{
                  borderColor: activeSegment.id === segment.id ? segment.color : undefined,
                  color: segment.color
                }}
              >
                {segment.label}
              </button>
            ))}
          </div>

          <div className="p-6 bg-[var(--dark-elevated)] rounded-xl border border-[var(--dark-border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: activeSegment.color }} />
              <span className="text-xs text-[var(--text-muted)] font-mono">{activeSegment.fullName}</span>
            </div>
            <h4 className="text-4xl font-bold mb-2 font-mono" style={{ color: activeSegment.color }}>
              {activeSegment.value}
            </h4>
            <p className="text-[var(--text-secondary)] mb-6">{activeSegment.description}</p>
            <ul className="space-y-3">
              {activeSegment.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeSegment.color }} />
                  <span className="text-[var(--text-secondary)]">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
