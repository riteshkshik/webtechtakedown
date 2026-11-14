import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  ShieldCheck, 
  Target, 
  Scale, 
  FileText, 
  Lock, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | WebTech Takedown",
  description: "Learn about WebTech Takedown's mission, ethical principles, and professional anti-piracy solutions for digital content creators.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#060B17] text-slate-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-radial-gradient-hero border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-mono font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>WHO WE ARE & WHAT DRIVES US</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Defending Digital Creators & EdTech Intellectual Property
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            WebTech Takedown was built with a singular mission: to safeguard courses, premium masterclasses, and proprietary media against unauthorized exploitation, resale, and mass piracy.
          </p>
        </div>
      </section>

      {/* Origin & The Challenge */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              The Digital Crisis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why Traditional Copyright Defense Falls Short
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              When an educator or EdTech firm releases a new course, it takes less than 48 hours for automated scrapers and screen recorders to dump the entire syllabus into Telegram channels, Mega folders, and shady &quot;free download&quot; portals.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Creators are educators, coders, and subject matter experts—not full-time cyber investigators. Filing individual DMCA forms by hand is an exhausting, losing battle against automated bots and mirror networks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a142c] border border-cyan-500/20 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <span>The WebTech Takedown Solution</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We provide a proactive, multi-layered defensive shield. We hunt where pirates distribute: private Telegram groups, Google Search results, YouTube mirror channels, cyberlockers, and unauthorized reseller platforms.
            </p>
            <div className="pt-2 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Automated keyword and fingerprint sweeps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct escalation with host abuse desks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Search engine de-indexing (Lumen DMCA)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Code of Conduct (Strictly aligned with user notes) */}
      <section className="py-16 bg-[#081023] border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest">
              Integrity First
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Our Ethical Principles & Promises
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              In an industry fraught with overpromising, we hold ourselves to rigorous standards of honesty and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-[#0b162f] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">No Fake Guarantees</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We will never claim a &quot;100% removal guarantee.&quot; Instead, we promise tireless, methodical enforcement and tactical containment—delisting rogue sites from Google and purging distribution channels.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0b162f] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-950 text-teal-400 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Verifiable Audit Logs</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                No imaginary vanity statistics. Every action we take is backed by timestamped proof, notice dispatch receipts, and platform response tickets accessible to you.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0b162f] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Creator Confidentiality</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your proprietary assets and sensitive customer links are treated with ironclad confidentiality under strict non-disclosure terms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance & Legal Alignment */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-6 rounded-2xl bg-[#091326] border border-slate-800">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Legal Standard & Framework</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            WebTech Takedown operates exclusively within recognized statutory frameworks including the <strong>Digital Millennium Copyright Act (DMCA, 17 U.S.C. § 512)</strong>, <strong>World Intellectual Property Organization (WIPO) Copyright Treaty</strong>, and applicable national intermediary liability regulations. We act as authorized copyright enforcement agents on behalf of rights holders.
          </p>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors shadow-lg"
          >
            <span>Explore All 4 Protection Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

