import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  GraduationCap, 
  Video, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | WebTech Takedown",
  description: "Anti-piracy solutions tailored for EdTech companies, online educators, independent course creators, and digital content businesses.",
};

const INDUSTRIES = [
  {
    id: "edtech",
    icon: GraduationCap,
    title: "EdTech Companies & Institutions",
    tagline: "Enterprise-grade protection for high-value learning repositories and test prep catalogs.",
    color: "from-cyan-500/20 to-teal-500/10",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    challenges: [
      "Mass screen recording of full academic curricula and test series",
      "Organized student-run Telegram cartels selling access credentials or zip archives",
      "Mirroring of proprietary LMS video assets across offshore cyberlockers",
    ],
    strategy: [
      "Catalog-wide automated fingerprinting of thousands of video lessons",
      "Immediate DMCA filing against cloud file lockers (Mega, Google Drive, Rapidgator)",
      "Bulk Google Search de-indexing of infringing domains to stop student searches",
      "Dedicated account manager with expedited notice dispatch",
    ],
  },
  {
    id: "educators",
    icon: Video,
    title: "Online Educators & Teachers",
    tagline: "Defending independent teachers against personal brand exploitation and unlisted video leaks.",
    color: "from-teal-500/20 to-emerald-500/10",
    borderColor: "border-teal-500/30",
    iconColor: "text-teal-400",
    challenges: [
      "Unlisted YouTube lectures and Zoom recordings ripped and reposted publicly",
      "Impostor channels and Telegram accounts posing as the official educator",
      "Copyright strikes ignored when filed without formal legal phrasing",
    ],
    strategy: [
      "Aggressive YouTube copyright strike escalation directly to Google legal desks",
      "Impostor channel and social media impersonation takedown notices",
      "Clear guidance on setting up watermarking and asset protection",
    ],
  },
  {
    id: "creators",
    icon: Sparkles,
    title: "Course Creators & Solopreneurs",
    tagline: "Preserving your launch revenue from instant Telegram group dumps.",
    color: "from-sky-500/20 to-cyan-500/10",
    borderColor: "border-sky-500/30",
    iconColor: "text-sky-400",
    challenges: [
      "Purchased on Gumroad, Teachable, or Kajabi and immediately leaked within hours",
      "Courses sold on black market forums for 95% off retail price",
      "Lost brand equity and high customer refund requests",
    ],
    strategy: [
      "Pre-launch surveillance and immediate post-launch leak sweeps",
      "Infiltration and reporting of primary Telegram course distribution channels",
      "Takedown notices to payment processors funding the pirate websites",
    ],
  },
  {
    id: "digital",
    icon: Layers,
    title: "Digital Content Businesses",
    tagline: "Safeguarding paid video libraries, developer assets, and digital media.",
    color: "from-indigo-500/20 to-blue-500/10",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    challenges: [
      "Software tutorials, UI kit bundles, and ebooks shared via torrent trackers",
      "Cyberlockers hosting full directory backups of premium asset libraries",
      "SEO erosion from high-ranking pirate download blogs",
    ],
    strategy: [
      "Torrent swarm monitoring and tracker notice escalation",
      "Direct registrar abuse reporting for persistent infringing domains",
      "Google Lumen DMCA de-indexing of search engine result pages",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full bg-[#060B17] text-slate-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-radial-gradient-hero border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-mono font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>WHO WE SERVE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industries We Protect
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Different digital businesses face distinct piracy threats. We tailor our detection and legal escalation workflows to your content format.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {INDUSTRIES.map((industry) => {
          const Icon = industry.icon;
          return (
            <div
              key={industry.id}
              id={industry.id}
              className={`p-8 sm:p-10 rounded-2xl bg-[#091326] border ${industry.borderColor} shadow-xl scroll-mt-24`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} border border-slate-700 flex items-center justify-center shrink-0`}>
                  <Icon className={`w-7 h-7 ${industry.iconColor}`} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {industry.title}
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">
                    {industry.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-800">
                
                {/* Specific Challenges */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>Specific Threat Landscape</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {industry.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tailored Enforcement Strategy */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Our Targeted Enforcement Protocol</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {industry.strategy.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-end">
                <Link
                  href={`/contact?industry=${industry.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  <span>Inquire for {industry.title} Protection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-[#040813] border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Not sure which category fits your organization?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Reach out to our team at <span className="text-cyan-300 font-mono">contact@webtechtakedown.com</span> for a customized assessment.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 font-bold text-slate-950 text-sm transition-colors"
            >
              <span>Schedule an Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

