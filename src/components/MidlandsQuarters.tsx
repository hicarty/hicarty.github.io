"use client";

const quarters = [
  { id: 1, city: "Birmingham", focus: "Technology Hub", description: "Central hub for fintech and enterprise IoT solutions", stats: { smes: 240, growth: "+34%", sector: "FinTech" }, color: "var(--gold-primary)" },
  { id: 2, city: "Nottingham", focus: "Smart Manufacturing", description: "Advanced manufacturing and industrial IoT applications", stats: { smes: 185, growth: "+28%", sector: "Industry 4.0" }, color: "var(--teal-primary)" },
  { id: 3, city: "Leicester", focus: "Retail Tech", description: "E-commerce and retail technology innovation centre", stats: { smes: 156, growth: "+22%", sector: "RetailTech" }, color: "var(--signal-positive)" },
  { id: 4, city: "Quarter 4", focus: "Cultural & Creative", description: "Arts, media, and creative technology district", stats: { smes: 98, growth: "+41%", sector: "CreativeTech" }, color: "#a78bfa" }
];

export function MidlandsQuarters() {
  return (
    <div className="glass-card rounded-xl p-8">
      <div className="text-center mb-10">
        <span className="text-xs text-[var(--teal-primary)] font-mono tracking-wider">REGIONAL DEVELOPMENT</span>
        <h3 className="text-3xl font-bold mt-2 mb-3">UK Midlands Technology Quarters</h3>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Strategic investment zones helping SMEs reach their first £1M annual turnover</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quarters.map((quarter) => (
          <div key={quarter.id} className="relative p-6 bg-[var(--dark-elevated)] rounded-xl border transition-all group hover:scale-[1.02]" style={{ borderColor: `color-mix(in srgb, ${quarter.color} 40%, transparent)` }}>
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl" style={{ backgroundColor: quarter.color }} />
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold font-mono" style={{ color: quarter.color }}>Q{quarter.id}</span>
              <span className="text-lg font-semibold">{quarter.city}</span>
            </div>
            <span className="inline-block text-xs font-mono px-2 py-1 rounded mb-3" style={{ backgroundColor: `color-mix(in srgb, ${quarter.color} 20%, transparent)`, color: quarter.color }}>{quarter.focus}</span>
            <p className="text-sm text-[var(--text-secondary)] mb-6">{quarter.description}</p>
            <div className="space-y-2 pt-4 border-t border-[var(--dark-border)]">
              <div className="flex justify-between text-sm"><span className="text-[var(--text-muted)]">Active SMEs</span><span className="font-mono">{quarter.stats.smes}</span></div>
              <div className="flex justify-between text-sm"><span className="text-[var(--text-muted)]">YoY Growth</span><span className="font-mono text-[var(--signal-positive)]">{quarter.stats.growth}</span></div>
              <div className="flex justify-between text-sm"><span className="text-[var(--text-muted)]">Lead Sector</span><span className="font-mono text-[var(--teal-primary)]">{quarter.stats.sector}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
