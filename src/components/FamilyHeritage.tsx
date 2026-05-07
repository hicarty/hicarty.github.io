"use client";

const families = [
  { name: "Hargreaves", established: "1847", legacy: "Industrial Innovation", contribution: "Pioneered textile machinery and early automation systems in the Midlands industrial revolution" },
  { name: "Gordon", established: "1892", legacy: "Banking & Finance", contribution: "Established regional banking networks and early investment frameworks for manufacturing enterprises" },
  { name: "McCarthy", established: "1923", legacy: "Technology & Trade", contribution: "Led post-war technology adoption and international trade relations across Europe and beyond" }
];

export function FamilyHeritage() {
  return (
    <div className="glass-card rounded-xl p-8">
      <div className="text-center mb-10">
        <span className="text-xs text-[var(--gold-primary)] font-mono tracking-wider">LEGACY OF EXCELLENCE</span>
        <h3 className="text-3xl font-bold mt-2 mb-3">Family Heritage</h3>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Three generations of innovation, combining industrial heritage with modern technology investment</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {families.map((family, idx) => (
          <div key={family.name} className="relative p-6 bg-[var(--dark-elevated)] rounded-xl border border-[var(--dark-border)] group hover:border-[var(--gold-primary)]/30 transition-all">
            {idx < families.length - 1 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[var(--gold-primary)]/30" />}
            <div className="w-12 h-12 rounded-full bg-[var(--gold-muted)] flex items-center justify-center mb-4">
              <span className="text-[var(--gold-primary)] text-xl font-bold">{family.name[0]}</span>
            </div>
            <h4 className="text-xl font-bold gold-text mb-1">{family.name}</h4>
            <span className="text-xs text-[var(--text-muted)] font-mono">Est. {family.established}</span>
            <div className="mt-4 mb-3"><span className="text-xs font-mono px-2 py-1 rounded bg-[var(--gold-muted)] text-[var(--gold-primary)]">{family.legacy}</span></div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{family.contribution}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--gold-primary)]/30 to-[var(--gold-primary)]" />
        <span className="text-sm text-[var(--gold-primary)] font-mono px-4">1847 — Present</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--gold-primary)]/30 to-[var(--gold-primary)]" />
      </div>
    </div>
  );
}
