"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Globe, 
  Clock, 
  Send, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle,
  ChevronDown,
  ShieldAlert
} from "lucide-react";

const FAQS = [
  {
    q: "How fast are DMCA takedown notices dispatched?",
    a: "Initial notices for verified copyright infringements on YouTube and major hosting cyberlockers are dispatched within 24 hours of evidence validation. Telegram abuse notifications are filed simultaneously.",
  },
  {
    q: "Can you remove courses leaked on private Telegram channels?",
    a: "Yes. We track and document both public channels and private invite-only groups. We escalate verified copyright infringements directly to Telegram abuse desks. Additionally, we target and terminate the underlying cloud hosting links (Google Drive, Mega.nz, Dropbox) where the course files are actually stored.",
  },
  {
    q: "What proof of copyright do I need to provide?",
    a: "You need to provide proof of original ownership or authorization to act on behalf of the copyright holder. This can include your official course website, sales portal, course registration certificates, or timestamps showing your original upload date.",
  },
  {
    q: "What happens if a rogue website ignores the takedown notice?",
    a: "If a rogue 'bulletproof' offshore host fails to comply, we execute secondary enforcement: filing Google Search de-indexing (Lumen DMCA) to remove the site from search engines, reporting reverse-proxy CDNs (like Cloudflare), and flagging unauthorized payment processors.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    service: "all",
    piracyUrl: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit request. Please try again or email us directly.");
      }
    } catch {
      setErrorMessage("Network error occurred. Please contact us directly at contact@webtechtakedown.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#060B17] text-slate-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-radial-gradient-hero border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-mono font-medium">
            <Mail className="w-4 h-4" />
            <span>DIRECT ENFORCEMENT & BUSINESS INQUIRY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact WebTech Takedown
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Report an infringing link for immediate review or request comprehensive anti-piracy protection for your digital content.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Information & Trust Notes */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                Official Channels
              </span>
              <h2 className="text-2xl font-bold text-white">
                Professional Communication
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe in direct, professional communication. Every inquiry is reviewed by our copyright operations team.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              <div className="p-4 rounded-xl bg-[#0a142c] border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">
                    Official Email
                  </h4>
                  <a 
                    href="mailto:contact@webtechtakedown.com"
                    className="text-sm font-semibold text-cyan-300 hover:underline"
                  >
                    contact@webtechtakedown.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    For business inquiries, DMCA notices, and general questions.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0a142c] border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-teal-950 text-teal-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">
                    Turnaround Time
                  </h4>
                  <div className="text-sm font-semibold text-white">
                    12 – 24 Business Hours
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Critical leak alerts receive expedited priority review.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0a142c] border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">
                    Domain Verification
                  </h4>
                  <div className="text-sm font-semibold font-mono text-cyan-200">
                    webtechtakedown.com
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    All official notices originate from our verified company domain.
                  </p>
                </div>
              </div>

            </div>

            {/* Ethics & Registration Clarity */}
            <div className="p-4 rounded-xl bg-[#081023] border border-slate-800/80 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Legitimate Representation</span>
              </div>
              <p className="leading-relaxed">
                We operate transparently as specialized digital copyright agents. All data and course information submitted to WebTech Takedown is kept strictly confidential.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#091326] border border-cyan-500/30 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Submitted Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you. Our copyright enforcement team has received your details. We will review your provided links and respond to you via email within 12–24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          organization: "",
                          email: "",
                          service: "all",
                          piracyUrl: "",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950 border border-cyan-800 hover:bg-cyan-900 transition-colors"
                    >
                      Submit Another Report or Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <ShieldAlert className="w-5 h-5 text-cyan-400" />
                      <span>Piracy Report & Consultation Form</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out the details below. If you already have infringing URLs or Telegram links, attach them for faster action.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name / Creator Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b17] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Organization / Brand
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Tech Ed Academy"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b17] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Professional Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b17] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b17] border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="all">Comprehensive Anti-Piracy (All-in-One)</option>
                        <option value="youtube">YouTube Piracy Takedown</option>
                        <option value="telegram">Telegram Channel Removal</option>
                        <option value="website">Website Piracy & De-indexing</option>
                        <option value="continuous">Continuous Proactive Monitoring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Infringing Link(s) or Piracy Channels (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.piracyUrl}
                      onChange={(e) => setFormData({ ...formData, piracyUrl: e.target.value })}
                      placeholder="e.g. https://t.me/pirate_group or https://youtube.com/watch?v=..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b17] border border-slate-700 text-sm text-white placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message & Content Details <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide details about your content (e.g. course title, number of lectures, where you suspect leaks, urgency level)..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b17] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Submitting to Operations Team...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Takedown Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    By submitting, your details remain under strict confidentiality. We do not share course materials with third parties.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#081023] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#0a142c] border border-slate-800 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white font-semibold text-sm hover:text-cyan-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === idx ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed bg-[#080f21]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

