"use client";

const insights = [
  { title: "Human-Computer Interaction", description: "Pioneering research in HCI drives our analysis of SME technology adoption and usability metrics for maximum ROI", icon: "HCI", stat: "94%", statLabel: "Adoption Rate" },
  { title: "Technology Analysis", description: "Deep-dive assessments of SME performability, growth trajectory, and scalability potential in emerging markets", icon: "TA", stat: "£250K+", statLabel: "SME Threshold" },
  { title: "Investment Timing", description: "Proprietary signals for optimal entry points in UK Technology and FTSE indices for institutional investors", icon: "IT", stat: "£1M", statLabel: "Growth Target" },
  { title: "Regional Impact", description: "Strategic capital allocation driving wealth, business, and trade development across UK Midlands technology sectors", icon: "RI", stat: "4", statLabel: "Key Quarters" }
];

export function ThoughtLeadership() {
  return (
    <div className="glass-card rounded-xl p-8">
      <div className="text-center mb-10">
        <span className="text-xs text-[var(--gold-primary)] font-mono tracking-wider">THOUGHT LEADERSHIP</span>
        <h3 className="text-3xl font-bold mt-2 mb-3">Expert Analysis & Insight</h3>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Haven Carty Family Offices delivers institutional-grade analysis combining Human-Computer Interaction expertise with deep technology sector knowledge</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight) => (
          <div key={insight.title} className="p-6 bg-[var(--dark-elevated)] rounded-xl border border-[var(--dark-border)] hover:border-[var(--teal-primary)]/30 transition-all group">
            <div className="w-14 h-14 rounded-lg bg-[var(--teal-muted)] flex items-center justify-center mb-4 group-hover:bg-[var(--teal-primary)]/20 transition-colors">
              <span className="text-[var(--teal-primary)] font-mono font-bold">{insight.icon}</span>
            </div>
            <h4 className="font-semibold mb-2">{insight.title}</h4>
            <p className="text-sm text-[var(--text-secondary)] mb-4">{insight.description}</p>
            <div className="pt-4 border-t border-[var(--dark-border)]">
              <span className="text-2xl font-bold gold-text font-mono">{insight.stat}</span>
              <span className="text-xs text-[var(--text-muted)] ml-2">{insight.statLabel}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
