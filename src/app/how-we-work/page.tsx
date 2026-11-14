import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  ShieldCheck, 
  Search, 
  Gavel, 
  Eye, 
  FileBarChart, 
  AlertTriangle, 
  ArrowRight,
  CheckCircle2,
  Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work | WebTech Takedown",
  description: "Learn our 5-stage methodical enforcement workflow: from intake and evidence collection to DMCA notice dispatch and search de-indexing.",
};

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Intake & Content Fingerprinting",
    shortDesc: "Establishing verified ownership and establishing tracking baselines.",
    details: [
      "Client submits list of course titles, instructor names, sales landing pages, and proprietary syllabus keywords.",
      "Execution of strict Mutual Non-Disclosure Agreement (NDA) to protect client business intelligence.",
      "Generation of unique asset identifiers and search heuristics for continuous crawling.",
    ],
    icon: Layers,
    badge: "Day 1 Setup",
  },
  {
    step: "02",
    title: "Reconnaissance & Evidence Gathering",
    shortDesc: "Locating pirate nodes and capturing indisputable legal proof.",
    details: [
      "Targeted sweeps across Telegram channels, cyberlockers (Mega, Drive, Rapidgator), course rip blogs, and YouTube.",
      "Capturing timestamped URL proofs, server IP geolocation, domain registrar records, and reverse proxy details.",
      "Preserving digital evidence records in adherence to legal copyright evidentiary standards.",
    ],
    icon: Search,
    badge: "Hours 1–12",
  },
  {
    step: "03",
    title: "Statutory DMCA Notice Dispatch",
    shortDesc: "Serving tailored legal notices through formal intermediary channels.",
    details: [
      "Drafting statutorily compliant copyright notices (under DMCA 17 U.S.C. § 512, WIPO, and national IT directives).",
      "Direct submission to hosting providers, datacenters, domain registrars, and Telegram abuse desks.",
      "Serving notice to reverse-proxy CDNs (e.g. Cloudflare) to uncover actual origin IP infrastructure.",
    ],
    icon: Gavel,
    badge: "Hours 12–24",
  },
  {
    step: "04",
    title: "Search De-indexing & Escalation",
    shortDesc: "Eliminating organic visibility and pursuing non-responsive hosts.",
    details: [
      "Filing formal de-indexing submissions to Google LLC (Lumen Database) to strip pirated links from search results.",
      "Escalating non-compliant hosts to their upstream Tier-1 transit bandwidth providers.",
      "Reporting rogue payment gateways and merchants financing the piracy platform.",
    ],
    icon: Eye,
    badge: "Hours 24–72",
  },
  {
    step: "05",
    title: "Audit Reporting & Continuous Vigilance",
    shortDesc: "Transparent reporting and active watch against recurring re-uploads.",
    details: [
      "Delivery of redacted case dossiers documenting timestamped notice dispatch and platform resolutions.",
      "Ongoing automated crawl alerts to catch any newly spawned mirror channels or duplicate zip files.",
      "Strategic consultation on watermarking and platform DRM enhancements.",
    ],
    icon: FileBarChart,
    badge: "Ongoing Defense",
  },
];

export default function HowWeWorkPage() {
  return (
    <div className="flex flex-col w-full bg-[#060B17] text-slate-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-radial-gradient-hero border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-mono font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>OPERATIONAL WORKFLOW</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            How We Work
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A repeatable, evidence-driven 5-stage enforcement lifecycle engineered to take down illicit content and choke distribution channels.
          </p>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {WORKFLOW_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.step}
                className="relative p-6 sm:p-8 rounded-2xl bg-[#0a142c] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-700/50 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-cyan-400">
                          STEP {step.step}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {step.title}
                      </h2>
                      <p className="text-xs text-slate-400">
                        {step.shortDesc}
                      </p>
                    </div>
                  </div>
                  <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {step.badge}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Realistic Expectations Section (Adhering to advice from Image 1: "100% removal guarantee mat dena") */}
      <section className="py-16 bg-[#081023] border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                Operational Truth
              </span>
              <h2 className="text-2xl font-extrabold text-white">
                Why We Refuse to Make &quot;100% Removal Guarantees&quot;
              </h2>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#091326] border border-amber-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4">
            <p>
              In the cybersecurity and anti-piracy domain, rogue web hosts operating out of non-extradition offshore jurisdictions often market themselves as &quot;bulletproof hosting&quot; and deliberately ignore DMCA notifications.
            </p>
            <p>
              Agencies that claim &quot;100% guaranteed takedown&quot; are either being untruthful or counting trivial cases. <strong>Our approach is practical and ruthlessly effective:</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#060b17] border border-slate-800">
                <h4 className="font-bold text-white mb-1">1. Google De-indexing</h4>
                <p className="text-xs text-slate-400">
                  Even if a rogue host ignores our notice, we de-index the page from Google Search, rendering it virtually invisible to 98% of potential pirates.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#060b17] border border-slate-800">
                <h4 className="font-bold text-white mb-1">2. Telegram Choke</h4>
                <p className="text-xs text-slate-400">
                  Telegram accounts and channels distributing the links are reported and banned, destroying their distribution audiences.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#060b17] border border-slate-800">
                <h4 className="font-bold text-white mb-1">3. Cyberlocker Purging</h4>
                <p className="text-xs text-slate-400">
                  Underlying storage folders (Google Drive, Mega, Dropbox) comply quickly with DMCA, leaving the pirate site with dead, useless links.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-[#040813] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Ready to initiate protection for your digital products?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Contact us today for a free confidential piracy audit.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 font-bold text-slate-950 text-sm transition-colors shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
