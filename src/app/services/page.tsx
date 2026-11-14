import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { YoutubeIcon, TelegramIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Anti-Piracy Services | WebTech Takedown",
  description: "Explore our anti-piracy solutions: YouTube DMCA strikes, Telegram channel takedowns, unauthorized course resale website removal, and proactive monitoring.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[#060B17] text-slate-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-radial-gradient-hero border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-mono font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>SPECIALIZED ENFORCEMENT CAPABILITIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Anti-Piracy Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Targeted solutions engineered for where digital course theft and unauthorized content distribution actually happen.
          </p>
        </div>
      </section>

      {/* Services List Detailed */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. YouTube Piracy */}
        <div id="youtube" className="p-8 sm:p-10 rounded-2xl bg-[#091326] border border-red-500/20 shadow-xl scroll-mt-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0">
                <YoutubeIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
                  Copyright Infringement Reporting
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  YouTube Piracy Protection
                </h2>
              </div>
            </div>
            <Link
              href="/contact?service=youtube"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-red-600/80 hover:bg-red-500 transition-colors"
            >
              <span>Submit YouTube Link</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-300">
            <div className="space-y-4">
              <h3 className="font-bold text-white text-base">The Threat Vector</h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                Rogue uploaders routinely rip proprietary course videos, code walkthroughs, or live-stream recordings and upload them to YouTube as unlisted videos, monetized public channels, or playlist dumps to drive traffic to their paid scams.
              </p>
              <h3 className="font-bold text-white text-base pt-2">Our Takedown Protocol</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Manual and automated fingerprinting of infringing videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Filing formal copyright notices directly via YouTube DMCA portal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Prompting YouTube copyright strikes leading to channel termination</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#060c19] border border-slate-800 space-y-3">
              <h4 className="font-mono text-xs text-cyan-400 uppercase font-semibold">Service Deliverables</h4>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">Notice Dispatch Time</span>
                  <span className="font-mono text-cyan-300 font-semibold">&lt; 24 Hours</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">YouTube Strike Verification</span>
                  <span className="font-mono text-emerald-400 font-semibold">Confirmed</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">Counter-Notice Defense</span>
                  <span className="font-mono text-cyan-300 font-semibold">Supported</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Telegram Piracy */}
        <div id="telegram" className="p-8 sm:p-10 rounded-2xl bg-[#091326] border border-sky-500/20 shadow-xl scroll-mt-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center shrink-0">
                <TelegramIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                  Unauthorized Content Distribution
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Telegram Piracy Removal
                </h2>
              </div>
            </div>
            <Link
              href="/contact?service=telegram"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-sky-600/80 hover:bg-sky-500 transition-colors"
            >
              <span>Submit Telegram Channel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-300">
            <div className="space-y-4">
              <h3 className="font-bold text-white text-base">The Threat Vector</h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                Telegram is the primary piracy conduit for EdTech in India and globally. Illicit supergroups aggregate thousands of students, selling full courses or giving away Mega/Google Drive folders of ripped videos.
              </p>
              <h3 className="font-bold text-white text-base pt-2">Our Takedown Protocol</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Locating invite links, channel handles, and forwarded cloud folders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Escalating verifiable copyright notices to Telegram abuse operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Simultaneous takedown of underlying file locker links (Mega, Drive)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#060c19] border border-slate-800 space-y-3">
              <h4 className="font-mono text-xs text-cyan-400 uppercase font-semibold">Channel Resolution Scope</h4>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">Public & Searchable Channels</span>
                  <span className="font-mono text-emerald-400 font-semibold">High Priority</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">Invite-Only Warez Groups</span>
                  <span className="font-mono text-cyan-300 font-semibold">Monitored</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">Underlying Cloud Dumps</span>
                  <span className="font-mono text-emerald-400 font-semibold">Purged</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Website Piracy */}
        <div id="websites" className="p-8 sm:p-10 rounded-2xl bg-[#091326] border border-teal-500/20 shadow-xl scroll-mt-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0">
                <Globe2 className="w-7 h-7 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold">
                  Unauthorized Course Selling
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Website Piracy & De-indexing
                </h2>
              </div>
            </div>
            <Link
              href="/contact?service=website"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors"
            >
              <span>Submit Pirate Domain</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-300">
            <div className="space-y-4">
              <h3 className="font-bold text-white text-base">The Threat Vector</h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                Unscrupulous webmasters operate course rip storefronts charging \$10 for courses worth \$500. They rank on Google Search for terms like &quot;[Course Name] Free Download&quot; or &quot;[Course Name] Leaked Telegram.&quot;
              </p>
              <h3 className="font-bold text-white text-base pt-2">Our Takedown Protocol</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Official DMCA notice serving to Web Host & Domain Registrar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Google Lumen DMCA de-indexing to strip organic search ranking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Abuse routing to reverse proxies (Cloudflare, Fastly)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#060c19] border border-slate-800 space-y-3">
              <h4 className="font-mono text-xs text-cyan-400 uppercase font-semibold">Target Nodes</h4>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">Google Search De-indexing</span>
                  <span className="font-mono text-cyan-300 font-semibold">Lumen DMCA</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">CDN Abuse Escalation</span>
                  <span className="font-mono text-teal-400 font-semibold">Origin Unmasked</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">Payment Gateway Disruption</span>
                  <span className="font-mono text-emerald-400 font-semibold">Reported</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Content Protection */}
        <div id="monitoring" className="p-8 sm:p-10 rounded-2xl bg-[#091326] border border-cyan-500/20 shadow-xl scroll-mt-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  Monitoring & Takedown Support
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Continuous Content Protection
                </h2>
              </div>
            </div>
            <Link
              href="/contact?service=continuous"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <span>Setup Monitoring</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-300">
            <div className="space-y-4">
              <h3 className="font-bold text-white text-base">Proactive Vigilance</h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                Piracy isn&apos;t a one-time event; it is an ongoing cat-and-mouse game. Once one link goes down, pirates attempt to spin up re-uploads. Continuous monitoring prevents recurring leaks from gaining traction.
              </p>
              <h3 className="font-bold text-white text-base pt-2">Vigilance Matrix</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Daily automated sweeps of course titles and instructor names</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Immediate notice filing upon positive leak detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Redacted periodic audit reports sent directly to your inbox</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#060c19] border border-slate-800 space-y-3">
              <h4 className="font-mono text-xs text-cyan-400 uppercase font-semibold">Protection Cadence</h4>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">Automated Scanning Cycle</span>
                  <span className="font-mono text-cyan-300 font-semibold">24 / 7 Sweep</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">New Leak Alert Time</span>
                  <span className="font-mono text-emerald-400 font-semibold">&lt; 12 Hours</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="text-slate-300">Monthly Status Dossier</span>
                  <span className="font-mono text-teal-400 font-semibold">Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-[#040813] border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Need a custom protection strategy for your entire course catalog?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Contact us for a confidential initial review of existing leaks.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 font-bold text-slate-950 text-sm hover:opacity-95 transition-opacity"
            >
              <span>Request Content Protection Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

