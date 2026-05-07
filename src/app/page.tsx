"use client";

import { HavenLogo, HavenLogoWithText } from "@/components/HavenLogo";
import { MarketOverview } from "@/components/MarketOverview";
import { TamSamSom } from "@/components/TamSamSom";
import { MidlandsQuarters } from "@/components/MidlandsQuarters";
import { FamilyHeritage } from "@/components/FamilyHeritage";
import { Testimonial } from "@/components/Testimonial";
import { ThoughtLeadership } from "@/components/ThoughtLeadership";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--dark-bg)]/80 backdrop-blur-xl border-b border-[var(--dark-border)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HavenLogo size={48} />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold gold-text">HAVEN CARTY</span>
              <span className="text-xs text-[var(--text-muted)]">Family Offices</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#markets" className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold-primary)] transition-colors">Markets</a>
            <a href="#investment" className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold-primary)] transition-colors">Investment</a>
            <a href="#quarters" className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold-primary)] transition-colors">Quarters</a>
            <a href="#heritage" className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold-primary)] transition-colors">Heritage</a>
          </div>
          <button className="btn-primary text-sm">Contact Us</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 particle-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--gold-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--teal-primary)]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <HavenLogoWithText className="justify-center mb-8" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gold-text">IMPACT</span> THE MIDLANDS
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8 leading-relaxed">
            Timing investment into UK Midlands Technology. Helping SMEs turning over £250K+ reach their first £1 million annually.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Explore Opportunities</button>
            <button className="btn-secondary">View Market Analysis</button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-bold gold-text font-mono">£42B</span>
              <p className="text-sm text-[var(--text-muted)] mt-1">Global TAM</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-bold text-[var(--teal-primary)] font-mono">679</span>
              <p className="text-sm text-[var(--text-muted)] mt-1">Active SMEs</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-bold text-[var(--signal-positive)] font-mono">+31%</span>
              <p className="text-sm text-[var(--text-muted)] mt-1">Avg. Growth</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-bold gold-text font-mono">4</span>
              <p className="text-sm text-[var(--text-muted)] mt-1">Tech Quarters</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Market Overview Section */}
      <section id="markets" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs text-[var(--gold-primary)] font-mono tracking-wider">LIVE DATA</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">UK Banks & FTSE Performance</h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
              Real-time tracking of UKTEC funds and UK Bank equities to optimize investment timing
            </p>
          </div>
          <MarketOverview />
        </div>
      </section>

      <div className="section-divider" />

      {/* TAM SAM SOM Section */}
      <section id="investment" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <TamSamSom />
        </div>
      </section>

      <div className="section-divider" />

      {/* Midlands Quarters Section */}
      <section id="quarters" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <MidlandsQuarters />
        </div>
      </section>

      <div className="section-divider" />

      {/* Technology Sectors */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs text-[var(--teal-primary)] font-mono tracking-wider">CORE SECTORS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Technology Focus Areas</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-xl p-8 group hover:border-[var(--teal-primary)]/30 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[var(--teal-muted)] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--teal-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Internet of Things</h3>
              <p className="text-[var(--text-secondary)] mb-6">Connected device ecosystems driving efficiency in manufacturing, retail, and commercial environments across the UK Midlands.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[var(--teal-primary)]" />Industrial sensors & monitoring</li>
                <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[var(--teal-primary)]" />Energy management systems</li>
                <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[var(--teal-primary)]" />Smart home integration</li>
              </ul>
            </div>
            <div className="glass-card rounded-xl p-8 group hover:border-[var(--gold-primary)]/30 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[var(--gold-muted)] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--gold-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Offices</h3>
              <p className="text-[var(--text-secondary)] mb-6">Intelligent workspace solutions optimizing productivity, comfort, and operational costs for modern enterprises.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />Automated climate control</li>
                <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />Occupancy optimization</li>
                <li className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />Integrated security systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Thought Leadership */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ThoughtLeadership />
        </div>
      </section>

      <div className="section-divider" />

      {/* Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Testimonial />
        </div>
      </section>

      <div className="section-divider" />

      {/* Family Heritage */}
      <section id="heritage" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FamilyHeritage />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 particle-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Impact the Midlands?</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8">Connect with Haven Carty Family Offices for institutional-grade insight on UK Technology investment timing and regional economic development.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Schedule Consultation</button>
            <button className="btn-secondary">Download Prospectus</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--dark-border)] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HavenLogo size={40} />
                <span className="font-bold gold-text">HAVEN CARTY</span>
              </div>
              <p className="text-sm text-[var(--text-muted)]">Family Offices delivering thought leadership in Human-Computer Interaction and UK technology investment.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Investment</h4>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li><a href="#" className="hover:text-[var(--gold-primary)] transition-colors">Market Analysis</a></li>
                <li><a href="#" className="hover:text-[var(--gold-primary)] transition-colors">Cluster Technology</a></li>
                <li><a href="#" className="hover:text-[var(--gold-primary)] transition-colors">SME Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quarters</h4>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li><a href="#" className="hover:text-[var(--gold-primary)] transition-colors">Birmingham</a></li>
                <li><a href="#" className="hover:text-[var(--gold-primary)] transition-colors">Nottingham</a></li>
                <li><a href="#" className="hover:text-[var(--gold-primary)] transition-colors">Leicester</a></li>
                <li><a href="#" className="hover:text-[var(--gold-primary)] transition-colors">Cultural Quarter 4</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li>info@havencarty.co.uk</li>
                <li>Birmingham, UK Midlands</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[var(--dark-border)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--text-muted)]">© 2026 Haven Carty Family Offices. Heritage: Hargreaves, Gordon & McCarthy.</p>
            <div className="flex gap-6 text-sm text-[var(--text-muted)]">
              <a href="#" className="hover:text-[var(--gold-primary)] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[var(--gold-primary)] transition-colors">Terms</a>
              <a href="#" className="hover:text-[var(--gold-primary)] transition-colors">Regulatory</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
