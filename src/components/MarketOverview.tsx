"use client";

import { useState, useEffect } from "react";

interface MarketData {
  symbol: string;
  name: string;
  type: "BANK" | "INDEX";
  price: number;
  change: number;
  low: number;
  high: number;
}

const initialMarketData: MarketData[] = [
  { symbol: "NWG.L", name: "NatWest Group", type: "BANK", price: 565.60, change: 18.87, low: 510.60, high: 665.20 },
  { symbol: "LLOY.L", name: "Lloyds Banking Group", type: "BANK", price: 98.24, change: 37.71, low: 76.78, high: 108.95 },
  { symbol: "BARC.L", name: "Barclays", type: "BANK", price: 433.75, change: 47.13, low: 327.58, high: 486.20 },
  { symbol: "^FTSE", name: "FTSE 100", type: "INDEX", price: 10363.93, change: 21.97, low: 8761.00, high: 10910.60 },
  { symbol: "^FTMC", name: "FTSE 250", type: "INDEX", price: 22531.61, change: 11.90, low: 21028.00, high: 23757.20 },
  { symbol: "^FT30", name: "FT 30", type: "INDEX", price: 2900.00, change: -0.45, low: 2552.00, high: 3248.00 },
];

interface Signal {
  symbol: string;
  action: "BUY" | "SELL";
  position: string;
  price: number;
  time: string;
}

const signals: Signal[] = [
  { symbol: "NWG.L", action: "BUY", position: "OTE LONG", price: 619.00, time: "00:00:00" },
  { symbol: "NWG.L", action: "SELL", position: "OTE SHORT", price: 619.00, time: "00:00:00" },
  { symbol: "NWG.L", action: "SELL", position: "OTE SHORT", price: 510.60, time: "00:00:00" },
  { symbol: "NWG.L", action: "SELL", position: "BREAKER BLOCK BEAR", price: 527.00, time: "00:00:00" },
];

export function MarketOverview() {
  const [data, setData] = useState(initialMarketData);
  const [activeTab, setActiveTab] = useState<"market" | "signals">("market");

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(item => ({
        ...item,
        price: item.price * (1 + (Math.random() - 0.5) * 0.001),
        change: item.change + (Math.random() - 0.5) * 0.1,
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--signal-positive)] animate-pulse" />
            <span className="text-xs text-[var(--text-muted)] font-mono">SYSTEM: ONLINE</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--text-muted)]">WORKSPACE:</span>
          <span className="text-xs text-[var(--gold-primary)] font-mono">UK_BANKS_FTSE</span>
          <span className="text-xs bg-[var(--gold-muted)] text-[var(--gold-primary)] px-2 py-0.5 rounded">PRO TIER</span>
        </div>
      </div>

      {/* Ticker bar */}
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {data.map((item) => (
          <div key={item.symbol} className="flex items-center gap-2 text-sm whitespace-nowrap">
            <span className="text-[var(--text-secondary)]">{item.symbol}</span>
            <span className="font-mono">{item.price.toFixed(2)}</span>
            <span className={`text-xs ${item.change >= 0 ? 'text-[var(--signal-positive)]' : 'text-[var(--signal-negative)]'}`}>
              {item.change >= 0 ? '↑' : '↓'}
            </span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("market")}
          className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${
            activeTab === "market"
              ? "border-[var(--gold-primary)] text-[var(--gold-primary)]"
              : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
          }`}
        >
          MARKET OVERVIEW
        </button>
        <button
          onClick={() => setActiveTab("signals")}
          className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${
            activeTab === "signals"
              ? "border-[var(--gold-primary)] text-[var(--gold-primary)]"
              : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
          }`}
        >
          LATEST SIGNALS
        </button>
      </div>

      {activeTab === "market" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.symbol} className="market-card">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-mono text-lg font-semibold">{item.symbol}</span>
                  <p className="text-xs text-[var(--text-muted)]">{item.name}</p>
                </div>
                <span className={`signal-badge ${
                  item.type === "BANK"
                    ? "bg-[var(--teal-muted)] text-[var(--teal-primary)]"
                    : "bg-[var(--gold-muted)] text-[var(--gold-primary)]"
                }`}>
                  {item.type}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-mono text-2xl font-bold">{item.price.toFixed(2)}</span>
                <span className={`ml-2 text-sm font-mono ${
                  item.change >= 0 ? "text-[var(--signal-positive)]" : "text-[var(--signal-negative)]"
                }`}>
                  {item.change >= 0 ? "+" : ""}{item.change.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between text-xs text-[var(--text-muted)]">
                <span>L: {item.low.toFixed(2)}</span>
                <span>H: {item.high.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {signals.map((signal, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-[var(--dark-elevated)] rounded-lg">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm">{signal.symbol}</span>
                <span className={`signal-badge ${
                  signal.action === "BUY"
                    ? "bg-[var(--signal-positive)]/20 text-[var(--signal-positive)]"
                    : "bg-[var(--signal-negative)]/20 text-[var(--signal-negative)]"
                }`}>
                  {signal.action}
                </span>
                <span className="text-xs text-[var(--text-muted)]">{signal.position}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm">{signal.price.toFixed(2)}</span>
                <span className="text-xs text-[var(--text-muted)] font-mono">{signal.time}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
