"use client";

import React, { useState } from "react";
import { FileText, CheckCircle, Clock, Eye, EyeOff } from "lucide-react";

interface TakedownRecord {
  id: string;
  source: string;
  targetPlatform: string;
  type: string;
  detectedAt: string;
  status: "Removed" | "Delisted" | "Notice Dispatched" | "In Review";
  infringingUrl: string;
  evidenceCode: string;
}

const SAMPLE_RECORDS: TakedownRecord[] = [
  {
    id: "WTT-74291",
    source: "YouTube",
    targetPlatform: "YouTube LLC (Google DMCA)",
    type: "Full Course Re-upload (24 Lectures)",
    detectedAt: "24 Hours ago",
    status: "Removed",
    infringingUrl: "youtube.com/watch?v=███████████",
    evidenceCode: "SHA256: 9b2d...f4e1 (Video Hash Match)",
  },
  {
    id: "WTT-74292",
    source: "Telegram",
    targetPlatform: "Telegram Messenger Abuse Operations",
    type: "Piracy Channel (14,200 Members)",
    detectedAt: "48 Hours ago",
    status: "Removed",
    infringingUrl: "t.me/joinchat/████████████",
    evidenceCode: "Direct Mega.nz & Drive Dump link batch",
  },
  {
    id: "WTT-74293",
    source: "Google Search",
    targetPlatform: "Google LLC Lumen Database DMCA",
    type: "Illicit Course Rip Reseller Index",
    detectedAt: "3 Days ago",
    status: "Delisted",
    infringingUrl: "https://courses-free-download-████.xyz/course/████",
    evidenceCode: "SERP Position #2 De-indexed from Global Search",
  },
  {
    id: "WTT-74294",
    source: "Cyberlocker",
    targetPlatform: "Mega.nz / Rapidgator Cloud Storage",
    type: "Course ZIP File Pack (18.4 GB)",
    detectedAt: "5 Days ago",
    status: "Removed",
    infringingUrl: "https://mega.nz/file/████████#████████",
    evidenceCode: "Abuse notice served under Copyright directive",
  },
];

export default function RedactedReportPreview() {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-[#091124] border border-cyan-500/20 p-6 md:p-8 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-700/50">
              AUDIT CASE SAMPLE
            </span>
            <span className="text-xs text-slate-400 font-mono">ID: REF-EDTECH-2026-08</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">
            Redacted Enforcement & Takedown Audit Log
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Transparent sample showing how our analysts document, verify, and resolve copyright infringements. Client names and sensitive links are blacked out for client privacy.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowExplanation(!showExplanation)}
          className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-cyan-300 bg-cyan-950/70 border border-cyan-800/80 hover:bg-cyan-900/60 transition-colors"
        >
          {showExplanation ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span>{showExplanation ? "Hide Policy Note" : "Why Redacted?"}</span>
        </button>
      </div>

      {showExplanation && (
        <div className="mt-4 p-3.5 rounded-lg bg-slate-900/80 border border-slate-700 text-xs text-slate-300 leading-relaxed">
          <strong className="text-cyan-300">Client Confidentiality Standard:</strong> In adherence to strict non-disclosure policies, WebTech Takedown never displays raw course links, client brand names, or unredacted client files in public marketing materials. Every legitimate client receives an unredacted, real-time live dashboard and PDF audit export.
        </div>
      )}

      {/* Table of Sample Takedowns */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase text-[11px]">
              <th className="pb-3 pl-1 font-semibold">Ref ID</th>
              <th className="pb-3 font-semibold">Platform & Route</th>
              <th className="pb-3 font-semibold">Infringing Asset</th>
              <th className="pb-3 font-semibold">Target URL / Identifier</th>
              <th className="pb-3 font-semibold text-right pr-1">Action Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {SAMPLE_RECORDS.map((rec) => (
              <tr key={rec.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 pl-1 font-mono text-cyan-400 font-semibold">
                  {rec.id}
                </td>
                <td className="py-3.5">
                  <div className="font-medium text-white">{rec.source}</div>
                  <div className="text-[11px] text-slate-400">{rec.targetPlatform}</div>
                </td>
                <td className="py-3.5 text-slate-300 font-medium">
                  {rec.type}
                  <div className="text-[10px] text-slate-400 font-mono">{rec.evidenceCode}</div>
                </td>
                <td className="py-3.5 font-mono text-[11px] text-slate-400">
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800 text-cyan-200/90">
                    {rec.infringingUrl}
                  </span>
                </td>
                <td className="py-3.5 text-right pr-1">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                      rec.status === "Removed"
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        : rec.status === "Delisted"
                        ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                        : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {rec.status === "Removed" && <CheckCircle className="w-3 h-3" />}
                    {rec.status === "Delisted" && <CheckCircle className="w-3 h-3" />}
                    {rec.status === "Notice Dispatched" && <Clock className="w-3 h-3" />}
                    {rec.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-cyan-400" />
          <span>Full audit dossiers include SHA cryptographic hashes, timestamped screenshots, and registrar responses.</span>
        </div>
        <div className="font-mono text-cyan-300 text-[11px]">
          Target Turnaround: 24–48h Dispatch
        </div>
      </div>
    </div>
  );
}

