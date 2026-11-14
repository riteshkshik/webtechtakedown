import React from "react";
import Link from "next/link";
import { 
  Shield, 
  Globe2, 
  ShieldCheck, 
  ArrowRight, 
  GraduationCap, 
  Video, 
  Sparkles, 
  Layers, 
  Search, 
  FileCheck, 
  Gavel, 
  CheckCircle2, 
  AlertTriangle,
  Lock
} from "lucide-react";
import { YoutubeIcon, TelegramIcon } from "@/components/icons";
import ShieldGraphic from "@/components/ShieldGraphic";
import RedactedReportPreview from "@/components/RedactedReportPreview";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#060B17] text-slate-100 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-radial-gradient-hero">
        <div className="absolute inset-0 bg-radial-grid opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Badge matching reference image */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0c1938] border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-mono font-medium shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-white tracking-wide">WEBTECH TAKEDOWN</span>
                <span className="text-slate-500">|</span>
                <span className="text-emerald-400 font-bold uppercase text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Professional
                </span>
              </div>

              {/* Exact Tagline from Reference Screenshot */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Protect Your Digital Content.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 drop-shadow-[0_0_25px_rgba(0,242,254,0.3)]">
                  Stop Online Piracy.
                </span>
              </h1>

              {/* Exact Subtitle from Reference Screenshot */}
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Professional anti-piracy and digital content protection services for creators and businesses. We rapidly locate, verify, and enforce takedowns across YouTube, Telegram, unauthorized websites, and cloud drives.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#060B17] bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] text-base group"
                >
                  <span>Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-[#0c1833] border border-cyan-500/30 hover:border-cyan-400 hover:text-white hover:bg-[#11234a] transition-all duration-300 text-base"
                >
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span>Report Pirated Link</span>
                </Link>
              </div>

              {/* Key Value Points */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 text-left">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Official DMCA Notices</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Telegram Channel Purge</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Google De-indexing</span>
                </div>
              </div>

            </div>

            {/* Hero Visual: Glowing Cyber Security Shield */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <ShieldGraphic />
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES (Directly matching Image 2 & 3) */}
      <section className="py-20 bg-[#080f21] border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Services
            </h2>
            <p className="text-slate-400 text-base">
              Comprehensive anti-piracy solutions targeted at the specific channels where educational and digital media get illicitly distributed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service 1: YouTube Piracy */}
            <div className="group relative rounded-2xl bg-[#0c1833]/80 border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <YoutubeIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  YouTube Piracy
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Copyright infringement reporting. Identification of ripped lectures, unauthorized course mirror clips, and automated DMCA copyright strike filing with YouTube/Google legal teams.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/70 flex items-center justify-between text-xs font-semibold text-cyan-400">
                <Link href="/services#youtube" className="inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="font-mono text-slate-500 text-[11px]">DMCA Strike</span>
              </div>
            </div>

            {/* Service 2: Telegram Piracy */}
            <div className="group relative rounded-2xl bg-[#0c1833]/80 border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TelegramIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Telegram Piracy
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Unauthorized content distribution. Infiltration of public and private piracy channels, supergroups, and bot networks leaking course drive links, followed by direct abuse escalation to Telegram.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/70 flex items-center justify-between text-xs font-semibold text-cyan-400">
                <Link href="/services#telegram" className="inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="font-mono text-slate-500 text-[11px]">Channel Takedown</span>
              </div>
            </div>

            {/* Service 3: Website Piracy */}
            <div className="group relative rounded-2xl bg-[#0c1833]/80 border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe2 className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Website Piracy
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Unauthorized course selling. Enforcement against clone portals, course rip resellers, cyberlockers (Mega, Google Drive), and rapid Google Search de-indexing to eliminate buyer traffic.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/70 flex items-center justify-between text-xs font-semibold text-cyan-400">
                <Link href="/services#websites" className="inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="font-mono text-slate-500 text-[11px]">Host / De-index</span>
              </div>
            </div>

            {/* Service 4: Content Protection */}
            <div className="group relative rounded-2xl bg-[#0c1833]/80 border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Content Protection
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Monitoring and takedown support. 24/7 web scraping sweeps, proactive early-warning leak alerts, and end-to-end management of counter-notifications and persistent rogue mirrors.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/70 flex items-center justify-between text-xs font-semibold text-cyan-400">
                <Link href="/services#monitoring" className="inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="font-mono text-slate-500 text-[11px]">24/7 Shield</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. WHO WE SERVE (Directly matching Image 1 & 2) */}
      <section className="py-20 bg-[#060B17] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-teal-400 bg-teal-950/80 border border-teal-800/60 uppercase tracking-widest">
                Targeted Protection
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Who We Serve
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Whether you run an established multi-million dollar learning platform or you are an independent creator with a best-selling cohort, we defend the hours of effort behind your digital products.
              </p>
              <div className="pt-2">
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Explore Sector Protection Roadmaps</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Sector 1: EdTech companies */}
              <div className="p-5 rounded-xl bg-[#0a142b] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">EdTech Companies</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Large test-prep repositories, live-recorded masterclasses, proprietary study notes, and tiered subscription databases.
                </p>
              </div>

              {/* Sector 2: Online educators */}
              <div className="p-5 rounded-xl bg-[#0a142b] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-teal-950 text-teal-400">
                    <Video className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Online Educators</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Subject-matter teachers whose copyrighted video syllabi and unlisted webinars are ripped and redistributed without attribution.
                </p>
              </div>

              {/* Sector 3: Course creators */}
              <div className="p-5 rounded-xl bg-[#0a142b] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-sky-950 text-sky-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Course Creators</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cohort mentors and digital entrepreneurs whose premium curriculum is resold on shady forums for a fraction of its real value.
                </p>
              </div>

              {/* Sector 4: Digital content businesses */}
              <div className="p-5 rounded-xl bg-[#0a142b] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Digital Content Businesses</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Software training hubs, stock digital assets, technical documentation, and premium paid video collections.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. THE 4-STEP HOW IT WORKS PREVIEW */}
      <section className="py-20 bg-[#081023] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 uppercase tracking-widest">
              Methodical Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How We Work
            </h2>
            <p className="text-slate-400 text-base">
              A systematic enforcement pipeline built on evidence verification, legal DMCA notices, and persistent escalation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0a142a] border border-slate-800 relative">
              <div className="text-3xl font-extrabold font-mono text-cyan-500/30 mb-3">01</div>
              <div className="flex items-center gap-2 mb-2 font-bold text-white">
                <Search className="w-4 h-4 text-cyan-400" />
                <span>Identification</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We crawl Telegram groups, Google search results, torrent indices, and file hosting lockers to discover leaked assets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a142a] border border-slate-800 relative">
              <div className="text-3xl font-extrabold font-mono text-teal-500/30 mb-3">02</div>
              <div className="flex items-center gap-2 mb-2 font-bold text-white">
                <FileCheck className="w-4 h-4 text-teal-400" />
                <span>Evidence & Verification</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Capturing immutable timestamped proof, IP/host details, mirror URLs, and ownership confirmation before filing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a142a] border border-slate-800 relative">
              <div className="text-3xl font-extrabold font-mono text-cyan-500/30 mb-3">03</div>
              <div className="flex items-center gap-2 mb-2 font-bold text-white">
                <Gavel className="w-4 h-4 text-cyan-400" />
                <span>Notice Dispatch</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Serving targeted DMCA notices to hosting providers, Telegram abuse channels, cyberlockers, and CDN intermediaries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a142a] border border-slate-800 relative">
              <div className="text-3xl font-extrabold font-mono text-emerald-500/30 mb-3">04</div>
              <div className="flex items-center gap-2 mb-2 font-bold text-white">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Delisting & Monitoring</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Filing Lumen/Google de-indexing to kill search visibility, verifying asset deletion, and continuously watching for mirrors.
              </p>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/60 text-sm font-semibold text-white transition-colors"
            >
              <span>Read Full 5-Step Methodology & Escalation Protocols</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. REDACTED SAMPLE REPORT (Adheres to Image 1 advice) */}
      <section className="py-20 bg-[#060B17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 uppercase tracking-widest">
              Evidence-Based Reporting
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sample Enforcement Audit
            </h2>
            <p className="text-slate-400 text-sm">
              We believe in demonstrable results rather than vanity logos. Below is a real structure of our redacted case audits.
            </p>
          </div>

          <RedactedReportPreview />

          {/* Honest SLA Callout Box (Adheres to image 1: "100% removal guarantee mat dena") */}
          <div className="mt-10 p-6 rounded-2xl bg-[#091326] border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">
                Our Transparent Policy on Takedown Guarantees
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Any agency promising a &quot;100% removal guarantee&quot; is misleading you. Rogue bulletproof web hosts operating in non-compliant jurisdictions do not honor basic DMCA requests. In those rare scenarios, our tactical approach is to <strong>cut off their audience</strong>: de-indexing them from Google Search results, striking their Telegram & YouTube distribution hubs, and reporting their payment processors.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="py-16 bg-gradient-to-b from-[#091329] to-[#040813] border-t border-slate-800 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Stop Losing Course Sales to Illegal Leaks
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Send us the infringing links or let us run an initial reconnaissance sweep on your digital catalog.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#060B17] bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] text-base"
            >
              Contact Us for Protection
            </Link>
            <a
              href="mailto:contact@webtechtakedown.com"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-400 transition-colors text-base font-mono"
            >
              contact@webtechtakedown.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
