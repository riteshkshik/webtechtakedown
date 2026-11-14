import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, Globe, ArrowUpRight, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.25)]">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-wider text-white font-mono text-base uppercase">
                  WebTech Takedown
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase">
                  Professional
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Professional anti-piracy and digital content protection services engineered for EdTech platforms, educators, and course creators. We locate, verify, and enforce copyright takedowns across YouTube, Telegram, illicit websites, and cyberlockers.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Official Contact: </span>
                <a 
                  href="mailto:contact@webtechtakedown.com" 
                  className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
                >
                  contact@webtechtakedown.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Primary Domain: </span>
                <span className="text-slate-200 font-mono">webtechtakedown.com</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services#youtube" className="hover:text-cyan-300 transition-colors flex items-center gap-1 group">
                  <span>YouTube Piracy Takedown</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services#telegram" className="hover:text-cyan-300 transition-colors flex items-center gap-1 group">
                  <span>Telegram Channel Removal</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services#websites" className="hover:text-cyan-300 transition-colors flex items-center gap-1 group">
                  <span>Website & Course Piracy</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services#monitoring" className="hover:text-cyan-300 transition-colors flex items-center gap-1 group">
                  <span>Proactive Content Protection</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services#deindexing" className="hover:text-cyan-300 transition-colors flex items-center gap-1 group">
                  <span>Google Search De-indexing</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Industries We Serve
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/industries#edtech" className="hover:text-cyan-300 transition-colors">
                  EdTech Companies
                </Link>
              </li>
              <li>
                <Link href="/industries#educators" className="hover:text-cyan-300 transition-colors">
                  Online Educators & Faculty
                </Link>
              </li>
              <li>
                <Link href="/industries#creators" className="hover:text-cyan-300 transition-colors">
                  Course Creators & Academies
                </Link>
              </li>
              <li>
                <Link href="/industries#digital" className="hover:text-cyan-300 transition-colors">
                  Digital Content Businesses
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-cyan-300 transition-colors">
                  Our 5-Step Workflow
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Trust & Direct Intake */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Direct Action
            </h3>
            <p className="text-xs text-slate-400">
              Found your leaked course or digital product online? Submit the link directly for rapid verification and notice dispatch.
            </p>
            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full px-3.5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_12px_rgba(6,182,212,0.3)]"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Submit Infringement Link</span>
              </Link>
            </div>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Average Notice Dispatch: 24–48 Hours</span>
            </div>
          </div>
        </div>

        {/* Legal & Ethical Transparency Notice per advice */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-400 font-medium">Compliance & Operational Transparency:</strong> WebTech Takedown operates strictly in compliance with international copyright treaties, the Digital Millennium Copyright Act (17 U.S.C. § 512), and intermediary takedown standards. We practice honest, evidence-based enforcement and do not make fabricated &quot;100% removal guarantee&quot; claims. While bulletproof offshore hosts may resist direct compliance, we aggressively target search de-indexing, CDN abuse, payment gateway cutoffs, and major distribution hubs (Telegram, YouTube, Google Drive, Mega) to choke illicit distribution channels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900 text-slate-400">
            <p>© 2026 WebTech Takedown (webtechtakedown.com). All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/about" className="hover:text-slate-300">About</Link>
              <span>•</span>
              <Link href="/how-we-work" className="hover:text-slate-300">Methodology</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-slate-300">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

